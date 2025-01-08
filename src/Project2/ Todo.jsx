// import { useEffect, useState } from "react";
// import "./Todo.css";
// import { FaCheck } from "react-icons/fa6";
// import { MdOutlineAutoDelete } from "react-icons/md";

// export const Todo = () => {
//     const [inputValue, setInputValue] = useState("");
//     const [task, setTask] = useState([]);
//     const [dateTime, setDateTime] = useState()

//     const handleInputChange = (value) => {
//         setInputValue(value);
//     };

//     const handleFormSubmit = (event) => {
//         event.preventDefault();

//         if (!inputValue) return;

//         if (task.includes(inputValue)) {
//             setInputValue("");
//             return;
//         }

//         setTask((prevTask) => [...prevTask, inputValue]); //spread operater
//         setInputValue("");
//     };

    


//     // todo Date and time

//     useEffect(() => {

//         const interval = setInterval(() => {
//             const now = new Date();
//             const formattedDate = now.toLocaleDateString();
//             const formattedTime = now.toLocaleTimeString();
//             setDateTime(`${formattedDate} - ${formattedTime}`);
//         }, 1000);

//         return () => clearInterval(interval);
//     }, []);

//     // todo handleDeleteTodo function

//     const handleDeleteTodo = (value) =>{
//        const updatedTask = task.filter((curTask) => curTask !== value);
//        setTask(updatedTask);
//     };

//     //Todo handleClearTodoData functionality
//     const handleClearTodoData = ()=>{
//         setTask([]);
//     }
//     return (
//         <section className="todo-container">
//             <header>
//                 <h1>Todo List</h1>
//                 <h2 className="date-time">{dateTime}</h2>
//             </header>
//             <section className="form">
//                 <form onSubmit={handleFormSubmit}>
//                     <div>
//                         <input type="text"
//                             className="todo-input"
//                             autoComplete="off"
//                             value={inputValue}
//                             onChange={(event) => handleInputChange(event.target.value)}
//                         />
//                     </div>
//                     <div>
//                         <button type="submit" className="todo-btn">Add Task</button>
//                     </div>
//                 </form>
//             </section>
//             <section className="myUnOrderList">
//                 <ul>
//                     {
//                         task.map((curTask, index) => {
//                             return <li key={index} className="todo-item">
//                                 <span>{curTask}</span>
//                                 <button className="check-btn">
//                                     <FaCheck />
//                                 </button>
//                                 <button className="delete-btn" onClick={() => handleDeleteTodo(curTask)}>
//                                     <MdOutlineAutoDelete />
//                                 </button>
//                             </li>
//                         })
//                     }
//                 </ul>
//             </section>
//             <section>
//                 <button className="clear-btn" onClick={handleClearTodoData}>
//                     Clear all
//                 </button>
//             </section>
//         </section>
//     )
// }



import { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import {
    getLocalStorageTodoData,
  setLocalStorageTodoData,
} from "./TodoLocalStorage";

export const Todo = () => {
  const [task, setTask] = useState(() => getLocalStorageTodoData());

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;

    //to check if the input field is empty or not
    if (!content) return;

    // to check if the data is already existing or not
    // if (task.includes(inputValue)) return;
    const ifTodoContentMatched = task.find(
      (curTask) => curTask.content === content
    );
    if (ifTodoContentMatched) return;

    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };

  //todo add data to localStorage
  setLocalStorageTodoData(task);

  //todo handleDeleteTodo function
  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((curTask) => curTask.content !== value);
    setTask(updatedTask);
  };

  //todo handleClearTodoData functionality
  const handleClearTodoData = () => {
    setTask([]);
  };

  //todo handleCheckedTodo functionality
  const handleCheckedTodo = (content) => {
    const updatedTask = task.map((curTask) => {
      if (curTask.content === content) {
        return { ...curTask, checked: !curTask.checked };
      } else {
        return curTask;
      }
    });
    setTask(updatedTask);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDate />
      </header>

      <TodoForm onAddTodo={handleFormSubmit} />

      <section className="myUnOrdList">
        <ul>
          {task.map((curTask) => {
            return (
              <TodoList
                key={curTask.id}
                data={curTask.content}
                checked={curTask.checked}
                onHandleDeleteTodo={handleDeleteTodo}
                onHandleCheckedTodo={handleCheckedTodo}
              />
            );
          })}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleClearTodoData}>
          Clear all
        </button>
      </section>
    </section>
  );
};
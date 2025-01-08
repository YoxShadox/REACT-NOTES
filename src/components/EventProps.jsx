
export const EventProps = () =>{

    const HandleWelcomeUser = (user) =>{
       alert(`Hey, ${user}`);
    };
  
  
    const handleHover= () =>{
      alert(`Hey Thanks for hovering me`);
   };
  
  
    return(
      <>
      <WelcomeUser 
      onClick={() => HandleWelcomeUser("yash")} 
        onMouseEnter={handleHover}
         />
      </>
    );
  }
  
  
  const WelcomeUser = (props) => {
    const handleGreeting = () => {
      console.log(`Hey User, WElcome`);
      props.onClick();
    };
    return (
      <>
      <button onClick={props.onClick}>Click</button>
      <button onMOuserEnter={props.onMOuserEnter}>Hover</button>
      <button onClick={handleGreeting}>Greeting</button>
      </>
    );
  };
  
  
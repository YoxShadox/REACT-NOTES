import { useState } from "react";


export const SignUp = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: "",
    });


    const handleInputChange = (e) => {
        const { name, value } = e.target;
       
        setUser((prev)=> ({...prev,[name]: value}) )
    }

    const handleSubmit = (event) => {
        event.preventDefault();
       console.log(user);
       setUser({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: "",
       })
    }

    return (
        <section >
            <div className="content2">
                <h1>SignUp</h1>
                <p>Please fill the form to create an account</p>

                <label htmlFor="fistName">
                    <b>First Name</b>
                </label>
                <input type="text"
                    name="firstName"
                    placeholder="Enter FirstName"
                    required
                    value={user.firstName}
                    onChange={handleInputChange}
                />

                <label htmlFor="lastName">
                    <b>Last Name</b>
                </label>
                <input type="text"
                    name="lastName"
                    placeholder="Enter LastName"
                    required
                    value={user.lastName}
                    onChange={handleInputChange}

                />

                <label htmlFor="email">
                    <b>Email</b>
                </label>
                <input type="text"
                    name="email"
                    placeholder="Enter Email"
                    required
                    value={user.email}
                    onChange={handleInputChange}
                />

                <label htmlFor="password">
                    <b>Password</b>
                </label>
                <input type="password"
                    name="password"
                    placeholder="Enter Password"
                    required
                    value={user.password}
                    onChange={handleInputChange}
                />

                <label htmlFor="phone">
                    <b>Phone Number</b>
                </label>
                <input type="phone"
                    name="phoneNumber"
                    placeholder="123456789"
                    required
                    value={user.phoneNumber}
                    onChange={handleInputChange}
                />
                <p>
                    By creating an account you agree to our
                    <a href="#">
                        Term & Privacy
                    </a>
                </p>
            </div>
            <div>
                <button type="submit" onClick={handleSubmit}> Sign up</button>
            </div>
            <p>
                Hello,my name is
                <span>
                    {user.firstName} {user.lastName}
                </span>
                My email address is  <span>{user.email}</span> and my phone number is
                <span>{user.phoneNumber}</span>
            </p>

        </section>
    )
}
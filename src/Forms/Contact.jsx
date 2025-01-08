import { useState } from "react"

export const Contact = () => {
    const [user, setUser] = useState({
        name: "",
        password: "",
        message:"",
    })
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setUser((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(user);
        setUser({
            name: "",
            password: "",
            message:"",
        })
    }

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <div className="content2">
                    <h2>Login</h2>
                    <form >
                        <div>
                            <label>User Name:</label>
                            <input type="name"
                                name="name"
                                value={user.name}
                                placeholder="Enter Name"
                                autoComplete="off"
                                onChange={handleInputChange}
                                required />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input type="password"
                                name="password"
                                value={user.password}
                                placeholder="Enter password"
                                autoComplete="off"
                                onChange={handleInputChange}
                                required />
                        </div>
                        <div>
                            <label>Message:</label>
                            <textarea type="email"
                                name="message"
                                value={user.message}
                                autoComplete="off"
                                rows="6"
                                onChange={handleInputChange}
                                required />
                        </div>
                        <button type="submit" onClick={handleSubmit}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}


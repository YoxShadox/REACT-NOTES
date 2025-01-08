import { useState } from "react"

export const LoginForm = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
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
            email: "",
            password: "",
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
                                onChange={handleInputChange}
                                required />
                        </div>
                        <div>
                            <label>Email:</label>
                            <input type="email"
                                name="email"
                                value={user.email}
                                placeholder="Enter Email"
                                onChange={handleInputChange}
                                required />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input type="password"
                                name="password"
                                value={user.password}
                                placeholder="Enter password"
                                onChange={handleInputChange}
                                required />
                        </div>
                        <button type="submit" onClick={handleSubmit}>Login</button>
                        <div className="content3">
                            <p className="P">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nam, consequuntur temporibus eveniet voluptas placeat magni quaerat? Distinctio nemo laudantium repudiandae autem eius officiis ullam eos sapiente sed, inventore vitae!</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}


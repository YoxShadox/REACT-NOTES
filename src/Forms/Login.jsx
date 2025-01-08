import React, { useState } from "react";
import SigninPopup from "./Signin";

const LoginPopup = ({ isOpen, onClose }) => {

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log("Login form submitted");
        onClose(); // Close the pop-up
    };

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="close-btn" onClick={onClose}>✖</button>
                <div className="content1">
                    <img className="img" src="Component 13.svg" alt="" />
                </div>
                <div className="content2">
                    <h2>Login</h2>
                    
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Email:</label>
                            <input type="email" required />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input type="password" required />
                        </div>
                        <button type="submit">Login</button>

                        <div className="content3">
                            <p className="P">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nam, consequuntur temporibus eveniet voluptas placeat magni quaerat? Distinctio nemo laudantium repudiandae autem eius officiis ullam eos sapiente sed, inventore vitae!</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPopup;
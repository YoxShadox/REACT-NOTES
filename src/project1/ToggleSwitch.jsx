import "./ToggleSwitch.css";
import { useState } from "react";

export const ToggleSwitch = () => {
    const [isOn, setIsOn] = useState(false);

    const handleToggleSwith = () => {
        setIsOn(!isOn);

    }

    return (
        <div
            className="toggle-switch"
            style={{
                backgroundColor: 
                    isOn? "4caf50": "f44336" }}
                     onClick={handleToggleSwith}>
            <div className={`switch ${isOn ? "on" : "off"}`}>
                <span className="switch-state">{isOn ? "On" : "off"}</span>
            </div>
        </div>
    );
};
import { createContext, use, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState('dark');

    const handleToggleTheme = () => {
        return setTheme((prevTheme) => (prevTheme === "dark" ? "Light" : "dark"));

    };

    return (<ThemeContext.Provider value={{ theme, handleToggleTheme }}>
        {children}
    </ThemeContext.Provider>
    );
};

// creating a compoment

export const DarkLight = () => {

    const { theme, handleToggleTheme } = use(ThemeContext);

    return (
    <div className={`p-4 flex flex-col justify-center 
    items-center h-lvh ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
        <button 
        onClick={handleToggleTheme}
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-md mt-4 p-4"> 
        {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
    </div>);
};
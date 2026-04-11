import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext({});

export const ThemeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem('darkMode');
        return saved ? JSON.parse(saved) : false;
    });

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
        document.body.style.backgroundColor = darkMode ? '#121212' : '';
        document.body.style.transition = 'background-color 0.25s ease';
    }, [darkMode]);

    const handleClick = () => setDarkMode(prev => !prev);

    return (
        <ThemeContext.Provider
            value={{
                darkMode,
                setDarkMode,
                handleClick
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeContext

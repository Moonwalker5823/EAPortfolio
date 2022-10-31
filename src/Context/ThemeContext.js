import { createContext, useState } from "react";

const ThemeContext = createContext({});

export const ThemeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(false);

    const handleClick = () => setDarkMode(prev => !prev)
    
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

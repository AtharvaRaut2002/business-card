import { FaMoon, FaSun } from "react-icons/fa6";
import { useTheme } from "../ThemeContext";

const ToggleSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme} 
      className="relative inline-flex items-center cursor-pointer w-14 h-8 bg-gray-300 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300"
    >
      {/* Track */}
      <div className={`w-14 h-8 bg-gray-300 dark:bg-gray-700 rounded-full py-1 transition-colors duration-300`}>
        {/* Thumb */}
        <div className={`w-6 h-6 bg-yellow-400 dark:bg-white rounded-full shadow-md transform transition-transform duration-300
          ${theme === 'dark' ? 'translate-x-6' : 'translate-x-0'} flex items-center justify-center`}>
          {theme === 'light' ? (
            <FaSun className="text-white" />
          ) : (
            <FaMoon className="text-gray-800" />
          )}
        </div>
      </div>
    </button>
  );
};

export default ToggleSwitch;

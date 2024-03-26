import React, { useState } from 'react'
import HomeDark from './components/HomeDark'
import HomeLite from './components/HomeLite'
import './App.css'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

    const handleThemeSwitch = () => {
        setIsDarkMode(!isDarkMode);
  };
  return (
    <div>
        <div className={`fixed top-4 right-4 z-10`}>
        <button
            className={`px-4 py-2 rounded-full border border-gray-800 ${
            isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'
            } transition duration-300 ease-in-out transform hover:scale-110`}
            onClick={handleThemeSwitch}
        >
            {isDarkMode ? 'Dark' : 'Light'} Mode
        </button>
        </div>
        {isDarkMode ? <HomeLite /> : <HomeDark />}
    </div>
  )
}

export default App
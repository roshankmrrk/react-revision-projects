import { useEffect, useState } from 'react'
import './App.css'
import { ThemeContext, ThemeProvider } from './Context/Theme.js'
import ThemeBtn from './component/ThemeBtn'
import Card from './component/Card'

function App() {
  const [themeMode, setthemeMode] = useState("light")
  const lightMode = ()=>{
    setthemeMode('light')
  }

  const darkMode = ()=>{
    setthemeMode('dark')
  }

  //Actual theme change on this
  useEffect(()=>{
    document.querySelector('html').classList.remove('light','dark');
    document.querySelector('html').classList.add(themeMode);
  },[themeMode])
  return (
    <ThemeProvider value={{themeMode,lightMode,darkMode}}>
      <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn/>
        </div>
          
        <div className="w-full max-w-sm mx-auto">
              <Card/>
        </div>
      </div>
    </div>
    </ThemeProvider>

  )
}

export default App

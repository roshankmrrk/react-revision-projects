import { useState } from 'react'
import './App.css'

function App() {

  const [colour, setColour] = useState("black");
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center gap-10 px-4" style={{ backgroundColor: colour }}>

      <h1 className="text-2xl font-bold text-white text-center max-w-xl">
        Could you please help me choose which colour should I use?
      </h1>

      <div className="bg-white rounded-xl p-4 shadow-lg">

        <div className="flex flex-wrap justify-center gap-3">

          <button onClick={() => setColour("red")} className="btn bg-red-500">Red</button>
          <button onClick={() => setColour("green")} className="btn bg-green-500">Green</button>
          <button onClick={() => setColour("blue")} className="btn bg-blue-500">Blue</button>
          <button onClick={() => setColour("lime")} className="btn bg-lime-600">Olive</button>
          <button onClick={() => setColour("gray")} className="btn bg-gray-500">Grey</button>
          <button onClick={() => setColour("yellow")} className="btn bg-yellow-400 text-black">Yellow</button>
          <button onClick={() => setColour("pink")} className="btn bg-pink-500">Pink</button>
          <button onClick={() => setColour("purple")} className="btn bg-purple-500">Purple</button>
          <button onClick={() => setColour("indigo")} className="btn bg-indigo-300 text-black">Lavender</button>
          <button onClick={() => setColour("white")} className="btn2 bg-white text-black ring-2 ring-gray-300">White</button>
          <button onClick={() => setColour("black")} className="btn bg-black">Black</button>

        </div>

      </div>

    </div>
  )
}

export default App
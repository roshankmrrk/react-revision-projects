import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10);

  const AddCount = () => {
    if (counter < 20) {
      setCounter(prev => prev + 1);
      console.log(counter);
    }
  }
  const RemoveCount = () => {
    if (counter > 0) {
      setCounter(prev => prev - 1);
      console.log(counter);
    }
  }
let error="";
  if (counter >= 20) {
    error = "Add Limit Reached";
  } else if (counter <= 0) {
    error = "Remove Limit Reached";
  }

  return (
    < div className='width-h-screen h-screen bg-gray-800 flex flex-col items-center justify-evenly'>
      <h1 className='text-white font-bold leading-0.5 mt-5'>This is Counter Application</h1>
      <div  className='mt-10 flex flex-row gap-x-10'>
        <button onClick={AddCount} disabled={counter >= 20}  className='w-[150px] h-7 bg-green-200 rounded-md text-shadow-white'>Count Badhao</button> <h1 className='text-2xl font-bold text-white'>{counter}</h1> <button onClick={RemoveCount} disabled={counter <= 0} className='w-[150px] h-7 bg-red-200 rounded-md text-shadow-white'>Count Ghatao</button>
        
      </div>
      <h1 style={{ color: "red" }}>{error}</h1>
      </div>
  )
}

 export default App
import React, { useCallback, useDebugValue, useEffect, useState , useRef} from 'react'

const App = () => {
  const [length, setLength] = useState(8)
  const [password, setPassword] = useState("")
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const PasswordRef = useRef(null);

  const PasswordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "1234567890"
    if (charAllowed) str += "!@#$%^&*-=_+[]{}`~"

    for (let  i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword])

  const Copypasswordinclipboard = useCallback(()=>{
    PasswordRef.current?.select();
    //  PasswordRef.current?.setSelectionRange(Range,Max range);-> allows us to  select with range
    window.navigator.clipboard.writeText(password);
    // alert("Password Copied.")
  },[password])


  useEffect(()=>{ PasswordGenerator()},[length,numberAllowed,charAllowed,PasswordGenerator])

  return (
    <div className='h-screen w-full bg-black flex  justify-center items-center'>
      <div className='w-full max-w-md rounded-md shadow-md bg-gray-700  flex-col justify-center items-center'>
        <h1 className='text-center  font-bold text-xl text-white'>PASSWORD GENERATOR</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 mx-2 '>
            <input type="text" value={password} readOnly placeholder='Password' className='ouline-none w-full py-1 px-3  bg-white'
            />
            <button className=' outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer hover:bg-black ' onClick={Copypasswordinclipboard}> Copy</button>
        </div >
        <div className='flex shadow rounded-lg overflow-hidden mb-4 mx-2  gap-x-2 text-orange-400 '>
            <input type="range" value={length} min={6} max={100} className='cursor-pointer' onChange={(e)=>{ setLength(e.target.value) }}
            />
            <label >Length: {length}</label>

            <input type="checkbox" id="NumberInput" defaultChecked={numberAllowed} onChange={()=>{ setnumberAllowed((prev)=>!prev)}} />
            <label htmlFor="NumberInput">Numbers</label>

            <input type="checkbox" id="CharInput" defaultChecked={charAllowed} onChange={()=>{ setcharAllowed((prev)=>!prev)}} />
            <label htmlFor="CharInput">Charaters</label>
            
        </div>
      </div>
    </div>
  )
}

export default App
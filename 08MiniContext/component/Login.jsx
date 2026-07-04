import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'

const Login = () => {
  const [Username, setUsername] = useState()
  const [Password, setPassword] = useState()
  const { setUser } = useContext(UserContext)

  // const handleSubmit = () => {
  //   console.log("Clicked", Username, Password); // 👈 debug
  //   setUser({ Username, Password });
  // };

  const handleSubmit=(e)=>{
    e.preventDefault();
    setUser({Username, Password})
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={Username} placeholder='username' onChange={(e) => setUsername(e.target.value)} />
      <input type="text" value={Password} placeholder='password' onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  )
}

export default Login
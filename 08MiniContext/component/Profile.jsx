import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

const Profile = () => {
 const {User} = useContext(UserContext)
 if(!User) return <h1> Please Login First!!</h1>

 return <div>Welcome {User.Username} Jii!!</div>
}

export default Profile
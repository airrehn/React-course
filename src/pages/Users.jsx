import { Link, useParams } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"



function Users() {
    const {username} = useParams()
    const [user,setUser] = useState({})
    async function getUser() {
        const unlockUser = await axios.get(`https://jsonplaceholder.typicode.com/users/${username}`)
        const {data} = unlockUser
        setUser(data)   
    }

    useEffect(()=> {getUser()},[]);

    

    return (
        
        <div>
            <Link to={"/"}> Go Home     </Link>
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.username}</p>
        </div>
       
   
    )
}

export default Users
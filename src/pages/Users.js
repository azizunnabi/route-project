
import axios from "axios" 
import { useEffect, useState } from "react"

const Users = () =>{
    const [users, setUsers]= useState([])
    const [loader, setLoader] =useState(false)
    useEffect(function(){
        setLoader(true)
        axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
            setLoader(false)
            setUsers(response.data)
           console.log(response)
            

        }).catch((error) =>{
            setLoader(false)
            console.log(error)

        })

    
    },[])
    console.log(users)

    return loader ? 'Loading' : <table> 
        <thead>
            <tr>
              <th>Name</th>  
              <th>Username</th>
              <th>Email</th>
        
            </tr>
            </thead>

            <tbody>
                {users.map((user)=>{
                    return (<tr><td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    </tr>)

                })}
            </tbody>

           
            
        </table>
}
export default Users
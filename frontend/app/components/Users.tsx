import { useEffect, useState } from "react"
import type { UserType } from "~/types/UserType"

const Users = () => {

    const [users,setUsers] = useState<UserType[]>([])

    useEffect(()=>{
      const fetchUsers = async()=>{
        const res = await fetch("https://dummyjson.com/users")
        const data = await res.json()
        setUsers(data)
      }
      fetchUsers()

    },[])
  return (
    <div>
        //make a table to show users data
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user=>(
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.gender}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Users

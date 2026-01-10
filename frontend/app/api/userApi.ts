export const fetchAllUsers = async ()=>{
    const response  = await fetch("http://localhost:3000/api/users")
    const data = await response.json();
    return data.users
}

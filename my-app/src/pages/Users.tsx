import { use, useEffect, useState } from 'react';
import {api} from '../api'

 type User = {
        id: number;
        name: string;
        email: string;
    };

const Users = () => {

   
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true); 

    useEffect(()=>{
        const load =  async()=>{
        
        try{
            const data = await api('/users');
            setUsers(data)
        }catch(err){
            setError((err as Error).message);
        }finally{
            setLoading(false)
        }
        
    }; load();
    },[])

    if(loading) return "loading....";
    if(error) return error;

    return(
        <ul>
            {users.map((u)=>(
                <li key={u.id}>{u.name} = {u.email}</li>
            ))}
        </ul>)
}

export default Users;

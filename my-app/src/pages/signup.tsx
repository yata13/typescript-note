import  { useState, type FormEvent } from 'react';
import {api}  from '../api';


const Signup = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("");

    const handlerSignup = async (e: FormEvent)=>{
        e.preventDefault();
    try{
        const data = await api('/users/signup', 'POST', {name, email, password})
        setMessage(`account created for ${data.name}`);
    }catch(err){
      setMessage((err as Error).message);
    }
}

    return (
        <>
            <form onSubmit={handlerSignup}>
                <input type='text' placeholder='enter name' value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type='email' placeholder='enter email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type='password' placeholder='enter password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button type='submit'>submit</button>
            </form>

            <p>{message}</p>
        </>
    );
}

export default Signup;

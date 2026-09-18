import React, { useState, type FormEvent } from 'react';
import {api} from "../api"

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messages, setMessage] = useState("");

  const handleLogin = async(e: FormEvent)=>{
    e.preventDefault()

    try{
      const data = await api("/users/login", "POST", { email, password }); // 👈 HERE
      localStorage.setItem("token", data.token)
      setMessage(data.message)
    }catch(err){
      setMessage((err as Error).message);
    }
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <input type='email' placeholder="enter ur email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        <input type='password' placeholder="enter ur email" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        <button type="submit">Login</button>

        <p>{messages}</p>
      </form>
    </>
  );
}

export default Login;

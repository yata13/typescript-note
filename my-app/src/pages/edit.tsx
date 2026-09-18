import React, { useState, type FormEvent } from 'react';
import { api } from '../api';

const Edit = () => {

   
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const handleUpdate = async (e: FormEvent)=>{
        e.preventDefault();

        const api = await 


    }

    return (
        <form onSubmit={handleUpdate}>
            <input type='text' placeholder='enter your name' value={name} onChange={}/>
            <input type='email' placeholder='enter your email' value={email} onChange={}/>
            <input type='password' placeholder='enter your password' value={password} onChange={}/>
            <button type={'submit'}>Submit</button>

            <p>{message}</p>

        </form>
    );
}

export default Edit;

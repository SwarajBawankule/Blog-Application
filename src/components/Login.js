import React, { useState } from 'react'
import api from '../api'
import { TextField } from '@mui/material'
import {Button} from '@mui/material'
const Login = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    function postToAPI(){
        let payload = {
            username:username,password:password
        }
        fetch(api+'/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          })
            .then(response => response.json())
            .then(data =>{ 
                console.log(data)
                window.location.replace('/');
            })
            .catch(error => console.error(error));
    } 

  return (
    <div className='flex justify-center  drop-shadow-xl mt-[10%]'>
       
       <div className='border p-5 '>
       <h1 className='text-2xl text-center'>🔑</h1>
       <div className='m-6'>
       <TextField id="outlined-basic" value={username} onChange={(e)=>setUsername(e.target.value)} label="Username" variant="outlined"  />
       </div>
       <div className='m-6'>
       <TextField id="outlined-basic" value={password} onChange={(e)=>setPassword(e.target.value)} label="Password" variant="outlined" />
       </div>
       <div>
         <span className='text-center block my-2'>
            New User ? <a href='/register' className='text-cyan-500 underline'>Create Account</a>
         </span>
       </div>
       <div className='justify-center flex'>
       <Button onClick={postToAPI} variant="contained" className='w-full'>Log in ❤️</Button>
       </div>
       </div>

    </div>
  )
}

export default Login
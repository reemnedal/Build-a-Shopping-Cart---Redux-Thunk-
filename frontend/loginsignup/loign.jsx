import React, { useState } from 'react';
 
const Login = () => {
 const [password, setPassword] = useState('');
 const [username, setUsername] = useState('');

 const handleLogin=()=>{


  const data={
    

    password,
    username

 } 


 dispatch(loginUser(userData));

  return (
   <>
   

   <form  onsubmit={handleLogin}  className='w-full'>
<input type="text" placeholder='username'   onChange={(e)=>{setPassword(e.target.value)}}  />
<input type="password" placeholder='password'  onChange={(e)=>{setUsername (e.target.value)}}  />


</form>
   
   
   </>
  );
};}

export default Login;

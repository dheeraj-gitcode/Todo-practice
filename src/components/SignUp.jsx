import React, { useState } from 'react';
import {Link} from "react-router-dom";
import  api  from '../axios/api';

const SignUp = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async (event) => {
    event.preventDefault();
    //console.log(event);
    if (!name || !username || !password) {
      setMessage("Please provide all the details");
      return;
    } 

    try {
      const userData = {
        name: name,
        username: username,
        password: password,
      };

      const response = await api.signup(userData);
      if (response && response.message) {
        //console.log(response,response.message);
        setMessage(response.message);
        //console.log('Success:', response.message);
      }
    } catch (error) {
      console.error(error); // Handle the error
    }
  };

  return (
    <div>
      <Link to="/">Go to Home Page</Link>
    <form onSubmit={handleSignup}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Signup</button>
    </form>
     {<p>{message}</p>}
     </div>
  );
};

export default SignUp;

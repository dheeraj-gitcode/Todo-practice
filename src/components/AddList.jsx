// import React from 'react'

// const AddList = () => {
//   return (
//     <div>
//       <h1> Welcome to List Page</h1>
//     </div>
//   )
// }

// export default AddList
import React, { useState } from 'react';
import api from '../axios/api';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const AddList = () => {
  const [listName, setListName] = useState('');
  const [message,setMessage] = useState(''); 
  const history = useHistory();
  const handleAddList = async () => {
    //localStorage.setItem('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0N2M4OTBlYWE5ZDhjZWE2MGI5ZjEyNiIsInVzZXJuYW1lIjoiZGhlZXJhai5tIiwiaWF0IjoxNjg2MzAwOTMyLCJleHAiOjE2ODYzODczMzJ9.GkJR0KT_I8gaCN_oUp0Nf1EWUDNzLnjQYK-RPD8eJkA' );
    const token = localStorage.getItem('token'); 
    //console.log(token);
    const response = await api.addlist(token,listName);
    const data = await response.json();
    setMessage(data.message);
    //console.log(data);
  };
  const handleGetList = () => {
    history.push('/getlist'); // Replace '/getlist' with the desired route
  };

  return (
    <div>
    <div>
      <input type="text" value={listName} onChange={(e) => setListName(e.target.value)} />
      <button onClick={handleAddList}>Add List</button>
      <button onClick={handleGetList}>Get All Lists</button>
    </div>
     <h3>{message}</h3> 
    </div>
  );
};

export default AddList;

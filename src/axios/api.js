import axios from 'axios';

const signup = async (userData) => {
  try {
    const response = await axios.post('http://localhost:3000/api/signup', userData);
    return response.data ; // Handle the response data
  } catch (err) {
    throw new Error(err);
  }
};
const signin =  async (userCheck) => {
  try{
    const response = await axios.post('http://localhost:3000/api/signin', userCheck);
    return response.data ;
  }catch(err){
    throw new Error(err);
  }
};
const addlist = async (token, listname) => {
  try {
    const response = await fetch('http://localhost:3000/api/addlist', {
      method: 'POST',
      headers: {
        'authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: listname }),
    });
    return response;
  } catch (error) {
    console.log('Error:', error.message);
  }
};
const getlist = async (token) => {
  try{
    const response = await fetch('http://localhost:3000/api/getlists', {
      method: 'GET',
      headers: {
        'authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    });
    //console.log(response);
    return response;
  }catch(err){
    console.log('Error:', err.message);
  }
};
const dellist = async (token,itemId) => {
  try {
    const response = await fetch(`http://localhost:3000/api/dellist/${itemId}`, {
      method: 'DELETE',
      headers: {
        'authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    });
    return response;
  } catch (error) {
    console.log('Error:', error.message);
  }
};
const updatelist = async (token,itemId,listname) => {
  try {
    //console.log(listname);
    const response = await fetch(`http://localhost:3000/api/updatelist/${itemId}`, {
      method: 'PUT',
      headers: {
        'authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: listname }),
    });
    return response;
  } catch (error) {
    console.log('Error:', error.message);
  }
}
const api = {
  signup,
  signin,
  addlist,
  getlist,
  dellist,
  updatelist
};
export default api;
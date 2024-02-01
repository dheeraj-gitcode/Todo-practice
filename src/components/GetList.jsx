import React, { useEffect, useState } from 'react';
import api from '../axios/api';
import { useHistory } from 'react-router-dom';

const GetList = () => {
  const [lists, setLists] = useState([]);
  const [updatedItem, setUpdatedItem] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetchLists(token);
  }, []);

  const fetchLists = async (token) => {
    try {
      const response = await api.getlist(token);
      const data = await response.json();
      setLists(data);
    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  const handleAddList = () => {
    history.push('/addlist');
  };

  const handleDelete = async (itemId) => {
    const token = localStorage.getItem('token');
    try {
      await api.dellist(token, itemId);
      setLists((prevLists) => prevLists.filter((item) => item.id !== itemId));
    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  const handleUpdate = (item) => {
    setUpdatedItem(item);
  };

  const handleUpdateSubmit = async (itemId, Name) => {
    const token = localStorage.getItem('token');
    try {
      await api.updatelist(token, itemId, { name: Name });
      setLists((prevLists) =>
        prevLists.map((item) => {
          if (item.id === itemId) {
            return { ...item, name: Name };
          }
          //console.log(item);
          return item;
        })
      );
      setUpdatedItem(null);
    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  return (
    <div>      <button onClick={handleAddList}>Add List items</button>
      <div>
        <h1>List Page</h1>
        {lists.map((item) => (
          <div key={item.id}>
            {updatedItem && updatedItem.id === item.id ? (
              <div>
                <input
                  type="text"
                  value={updatedItem.name}
                  onChange={(e) => setUpdatedItem({ ...updatedItem, name: e.target.value })  }
                />
                <button onClick={() => handleUpdateSubmit(updatedItem.id, updatedItem.name)}>  Save </button> </div>
            ) : (
              <h3>
                {item.name}
                <button onClick={() => handleUpdate(item)}>Update</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </h3>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetList;

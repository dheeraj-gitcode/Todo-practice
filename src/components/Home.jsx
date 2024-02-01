import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
          <h1>Welcome to the Home Page</h1>
          <Link to="/signup">Signup</Link>
          <br />
          <Link to="/signin">Signin</Link>
        </div>
      );
    }
export default Home;

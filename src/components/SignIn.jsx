import React ,{useState,useContext} from "react";
import {Link,Redirect} from "react-router-dom";
import api from "../axios/api";
import {AuthProvider} from '../auth';
import AuthContext from "../auth";
const SignIn = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const {token,login} = useContext(AuthContext);
    const [message,setMessage] = useState('');
const handleSignin = async (event) => {
    event.preventDefault();
    if (!username || !password) {
        setMessage("Please provide all the details");
        return;
      } 
    try{
        const userCheck = {
            username:username,
            password:password,
        }
        const response = await api.signin(userCheck);
        if (response.token) {
            login(response.token);
        }
        setMessage(response.message);
    }catch(err){
        console.log(err);
    }
};
    if (token) {
        return <Redirect to="/addlist" />;
       }
return (
    <div>
         <Link to="/">Go to Home Page</Link>
        <form onSubmit={handleSignin}>
            <input type="text" placeholder="Username" value={username} onChange={(event)=> setUsername(event.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
            <button type="suvmit"> Login </button>
        </form>
        <h4> {message} </h4>
    </div>
)
}
export default SignIn;
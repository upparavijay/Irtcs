import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {

const navigate=useNavigate();

const[email,setEmail]=useState("");
const[password,setPassword]=useState("");

const login=()=>{

let user=JSON.parse(localStorage.getItem("user"));

if(user && user.email===email && user.password===password){

alert("Login Successful");

navigate("/search");

}
else{

alert("Invalid Credentials");

}

}

return(

<div>

<h2>Login</h2>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<br/><br/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<br/><br/>

<button onClick={login}>Login</button>

<p>
New User?
<Link to="/signup"> Signup</Link>
</p>

</div>

)

}

export default Login;

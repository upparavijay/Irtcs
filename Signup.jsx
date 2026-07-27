import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(){

const navigate=useNavigate();

const[name,setName]=useState("");
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");

const register=()=>{
const user={
name,
email,
password
};


localStorage.setItem("user",JSON.stringify(user));

alert("Registration Successful");

navigate("/");

}

return(

<div>

<h2>Signup</h2>

<input
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<br/><br/>

<input
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

<button onClick={register}>
Register
</button>

</div>

)

}

export default Signup;

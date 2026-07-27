import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Passenger(){

const navigate=useNavigate();

const[name,setName]=useState("");
const[age,setAge]=useState("");
const[gender,setGender]=useState("");

const savePassenger=()=>{

const passenger={
name,
age,
gender
};

localStorage.setItem("passenger",JSON.stringify(passenger));

navigate("/payment");

}

return(

<div>

<h2>Passenger Details</h2>

<input
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<br/><br/>

<input
placeholder="Age"
value={age}
onChange={(e)=>setAge(e.target.value)}
/>

<br/><br/>

<select
value={gender}
onChange={(e)=>setGender(e.target.value)}
>

<option value="">Select Gender</option>
<option>Male</option>
<option>Female</option>

</select>

<br/><br/>

<button onClick={savePassenger}>
Continue
</button>

</div>

)

}

export default Passenger;

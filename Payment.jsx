import { useNavigate } from "react-router-dom";

function Payment(){

const navigate=useNavigate();

const payment=()=>{

alert("Payment Successful");

navigate("/booking");

}

return(

<div>

<h2>Payment</h2>

<select>

<option>UPI</option>

<option>Credit Card</option>

<option>Debit Card</option>

</select>

<br/><br/>

<button onClick={payment}>
Pay Now
</button>

</div>

)

}

export default Payment;

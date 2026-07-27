function Booking(){

const train=JSON.parse(localStorage.getItem("train"));

const passenger=JSON.parse(localStorage.getItem("passenger"));

return(

<div>

<h2>Ticket Confirmed</h2>

<h3>{train.name}</h3>

<p>Passenger : {passenger.name}</p>

<p>Age : {passenger.age}</p>

<p>Gender : {passenger.gender}</p>

<p>From : {train.source}</p>

<p>To : {train.destination}</p


<p>Fare : ₹{train.fare}</p>

<p>Status : Confirmed ✅</p>

</div>

)

}

export default Booking;

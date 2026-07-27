import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchTrains() {
  const navigate = useNavigate();

  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  const trains = [
    {
      id: 1,
      name: "Rajdhani Express",
      source: "Hyderabad",
      destination: "Delhi",
      fare: 650,
      seats: 30,
    },

    {
      id: 2,
      name: "Shatabdi Express",
      source: "Hyderabad",
      destination: "Chennai",
      fare: 450,
      seats: 20,
    },
  ];

  return (
    <div>
      <h2>Search Train</h2>

      <input
        placeholder="Source"
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />

      <br />
      <br />

      <input
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />

      <br />
      <br />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <br />
      <br />

      {trains
        .filter(
          (train) =>
            train.source.toLowerCase().includes(source.toLowerCase()) &&
            train.destination.toLowerCase().includes(destination.toLowerCase()),
        )

        .map((train) => (
          <div key={train.id}>
            <h3>{train.name}</h3>

            <p>Fare : ₹{train.fare}</p>

            <p>Seats : {train.seats}</p>

            <button
              onClick={() => {
                localStorage.setItem("train", JSON.stringify(train));

                navigate("/passenger");
              }}
            >
              Book Ticket
            </button>

            <hr />
          </div>
        ))}
    </div>
  );
}

export default SearchTrains;

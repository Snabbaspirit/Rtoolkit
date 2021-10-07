import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import ReservationCard from "./components/ReservationCard";

const App: React.FC = () => {

  const [reservationNameInput, setReservationNameInput] = React.useState("")
  const reservations = useSelector((state: RootState) => state.reservations.value)
  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name) => <ReservationCard name={name}/>)}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              value={reservationNameInput}
              onChange={(e) => setReservationNameInput(e.target.value)}
            />
            <button>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
        </div>
      </div>
    </div>
  );
};

export default App;

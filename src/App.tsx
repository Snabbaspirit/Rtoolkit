import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./app/store";
import BoxInfoCard from "./components/BoxInfoCard";
import { addBoxInfo } from "./features/boxInfoSlice";

const App: React.FC = () => {

  const [boxInfoNameInput, setboxInfoNameInput] = React.useState("")
  const boxInfo = useSelector((state: RootState) => state.boxInfo.value)

  const dispatch = useDispatch();
  const handleAddReservations = () => {
    if(!boxInfoNameInput) return;
    dispatch(addBoxInfo(boxInfoNameInput))
    setboxInfoNameInput("")
  }
  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Info:</h5>
            <div className="reservation-cards-container">
              {boxInfo.map((boxTitle, id) => <BoxInfoCard name={boxTitle} idx={id}/>)}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              value={boxInfoNameInput}
              onChange={(e) => setboxInfoNameInput(e.target.value)}
            />
            <button onClick={handleAddReservations}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
        </div>
      </div>
    </div>
  );
};

export default App;

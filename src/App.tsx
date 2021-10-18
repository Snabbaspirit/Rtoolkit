import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./app/store";
import BoxInfoCard from "./components/BoxInfoCard";
import EditorCard from "./components/EditorCard";
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
        <div className="boxinfo-container">
          <div>
            <h5 className="boxinfo-header">Info:</h5>
            <div className="boxinfo-cards-container">
              {boxInfo.map((boxTitle, id) => <BoxInfoCard name={boxTitle} idx={id}/>)}
            </div>
          </div>
          <div className="boxinfo-input-container">
            <input
              value={boxInfoNameInput}
              onChange={(e) => setboxInfoNameInput(e.target.value)}
            />
            <button onClick={handleAddReservations}>Add</button>
          </div>
        </div>
        <EditorCard/>
      </div>
    </div>
  );
};

export default App;

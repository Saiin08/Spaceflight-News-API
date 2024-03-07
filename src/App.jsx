import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Homepage from "./Homepage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Homepage />
      </BrowserRouter>
    </>
  );
}

export default App;

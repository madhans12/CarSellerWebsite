import "./App.css";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import Carcomp1 from "./Carcomp1";
import Carcomp2 from "./CarComp2";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <div className="App">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
          ></input>

          <SearchSharpIcon className="search-icon" />
        </div>
        <div className="car-list">
          <HashRouter>
            <Routes>
              <Route path="/" element={<Carcomp1 />}></Route>
              <Route path="/page1" element={<Carcomp2 />}></Route>
              <Route path="/page2" element={<Carcomp1 />}></Route>
              <Route path="/page3" element={<Carcomp2 />}></Route>
              <Route path="/page4" element={<Carcomp1 />}></Route>
              <Route path="/page5" element={<Carcomp2 />}></Route>
              <Route path="/page6" element={<Carcomp1 />}></Route>
              <Route path="/page7" element={<Carcomp2 />}></Route>
              <Route path="/page8" element={<Carcomp1 />}></Route>
              <Route path="/page9" element={<Carcomp2 />}></Route>
              <Route path="/page10" element={<Carcomp1 />}></Route>
            </Routes>
          </HashRouter>
        </div>
      </div>
    </div>
  );
}

export default App;

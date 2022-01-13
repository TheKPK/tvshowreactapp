import {BrowserRouter, Route, Routes} from "react-router-dom";
// components
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";
import Aboutpage from "./Pages/Aboutpage";
import Singlepage from "./Pages/Singlepage";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/about" element={<Aboutpage/>}/>
          <Route path="/single/:id" element={<Singlepage/>}/>
          <Route path="*" element={<div>Not found</div>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

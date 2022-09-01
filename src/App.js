import Home from "./components/Home";
import {Route, Routes} from "react-router-dom";
import Contact from "./components/Contact";

function App() {
  return (
    <>
    <div className="navbar">
      <div className="title-div">
        <label className="title">SHOPPING APP</label>
        </div>
        <div className="home-contact">
        {/* <li onClick={()=>{navigation("/")}}>HOME</li>
        <li onClick={()=>{navigation("/contact")}}>CONTACT US</li> */}
      </div>
    </div>
    <Routes>
     <Route path='/'element={<Home/>}/>
     <Route path='/contact'element={<Contact/>}/>
    </Routes>
    </>
  );
}





export default App;

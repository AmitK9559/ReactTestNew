
import './App.css';
//import Contactus from './MyComponents/Contactus';
import { NavLink, Route, Routes } from "react-router-dom";
import Contactus from './MyComponents/Contactus';
import Home from './MyComponents/Home';
import AboutUs from './MyComponents/AboutUs';
import Datat from './MyComponents/Datat';

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* <a className="navbar-brand" href="/">Navbar</a> */}
        <NavLink to="/" className="navbar-brand" >
        Navbar
              </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink to="/" className="nav-link" >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="Aboutus" className="nav-link">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="Contactus" className="nav-link">
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="Datat" className="nav-link">
                Data Table
              </NavLink>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
      {/* <Contactus/> */}
      <Routes>
        <Route path="/" element={<Home />}>   </Route>
        <Route path="/Contactus" element={<Contactus />}></Route>
        <Route path="/Aboutus" element={<AboutUs />}></Route>
        <Route path="/Datat" element={<Datat />}></Route>
      </Routes>
    </>

  );

}


export default App;

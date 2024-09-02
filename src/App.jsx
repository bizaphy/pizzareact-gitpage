import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Carrito from "./pages/Carrito";
import Pizza from "./pages/Pizza";
import CardPizza from "./components/CardPizza";

import "./App.css";

function App() {
  return (
    <div id="root">
      <div className="content">
        <Navbar />
        <Routes>
          <Route path="/pizzareact-gitpage/" element={<Home />} />
          <Route path="/pizzareact-gitpage/cart" element={<Carrito />} />
          <Route path="/pizzareact-gitpage/profile" element={<Profile />} />
          <Route path="/pizzareact-gitpage/register" element={<Register />} />
          <Route path="/pizzareact-gitpage/login" element={<Login />} />
          <Route path="/pizzareact-gitpage/pizza" element={<Pizza />} />
          <Route path="/pizzareact-gitpage/*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Carrito from "./components/Carrito";
import Pizza from "./components/Pizza";

import "./App.css";

function App() {
  return (
    <div id="root">
      <div className="content">
        <Navbar />
        {/* <Home /> */}
        {/* <Register /> */}
        {/* <Login /> */}
        <Pizza />
      </div>
      {/* <Carrito /> */}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

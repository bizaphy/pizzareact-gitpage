import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import Carrito from "./components/Carrito";

import "./App.css";

function App() {
  return (
    <div id="root">
      <div className="content">
        <Navbar />
        <Home />
        {/* <Register /> */}
        {/* <Login /> */}
      </div>
      {/* <Carrito /> */}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

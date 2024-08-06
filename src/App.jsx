import "bootstrap/dist/css/bootstrap.min.css";
import MyCard from "./components/MyCard";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div id="root">
      <div className="content">
        <Navbar />
        <Home />
        <div className="cards">
          <MyCard
            image="https://tofuu.getjusto.com/orioneat-local/resized2/7pxqsSaKQssFkw8qm-350-350.webp"
            title="Marinara"
            ingredients="Salsa de Tomate, Ajo, Orégano y Albahaca."
            precio="$2800"
          />
          <MyCard
            image="https://tofuu.getjusto.com/orioneat-local/resized2/vszbx65A6Tubthu4n-350-350.webp"
            title="Margherita"
            precio="$4000"
            ingredients="Salsa de Tomate, Mozzarella Fior di Latte, Grana Padano y Albahaca."
          />
          <MyCard
            image="https://tofuu.getjusto.com/orioneat-local/resized2/k5hBHpuf3sQAuQexE-350-350.webp"
            title="Quattro Formaggi"
            ingredients="Salsa de Tomate, Mozzarella Fior di Latte, Gorgonzola, Ricotta y Pecorino Romano."
            precio="$5500"
          />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

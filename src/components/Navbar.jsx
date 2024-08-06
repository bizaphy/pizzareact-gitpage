import Button from "react-bootstrap/Button";

const Home = () => {
  const total = 25000;
  const formattedTotal = total.toLocaleString("es-ES");
  const token = false;

  return (
    <>
      <div>
        <div className="navbar-container">
          <div className="navbar-title">Pizzeria Mamma Mia!</div>
          <div className="navbar-buttons">
            <Button className="button button--home">🍕Home</Button>
            {token ? (
              <>
                <Button className="button button--profile">Profile</Button>
                <Button className="button button--logout">Logout</Button>
              </>
            ) : (
              <>
                <Button className="button button--login">Login</Button>
                <Button className="button button--register">Register</Button>
              </>
            )}
          </div>
          <div className="cart">
            <Button className="button button--cart" variant="dark">
              🛒 Total: ${formattedTotal}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

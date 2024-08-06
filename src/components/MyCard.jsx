import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
const MyCard = ({ image, title, ingredients, precio }) => {
  return (
    <>
      <Card className="my-card">
        <Card.Img variant="top" src={image} />
        <Card.Body className="my-card-body">
          <p className="card-title">{title}</p>

          <p className="ingredients">Ingredientes:</p>
          <p className="card-ingredients">🍕{ingredients}</p>
          <p className="card-price">{precio}</p>
        </Card.Body>
        <div className="button-container">
          <Button className="button-more" variant="dark">
            👀 Ver Mas
          </Button>{" "}
          <Button className="button-add" variant="light">
            🛒 Agregar
          </Button>
        </div>
      </Card>
    </>
  );
};
export default MyCard;

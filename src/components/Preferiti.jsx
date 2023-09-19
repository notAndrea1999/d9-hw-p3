import { Button, Container, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeFromFavouriteAction } from "../redux/actions";

const Preferiti = () => {
  const preferiti = useSelector((state) => state.favourite.content);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  return (
    <Container>
      <ListGroup>
        <h2 className="display-4 mb-3">Aziende Preferite:</h2>
        {preferiti.map((preferito, i) => (
          <>
            <ListGroup.Item className="text-primary mt-4 d-flex align-items-center ">
              <Link to={`/${preferito}`}>{preferito}</Link>
              <Button
                className="ms-auto"
                onClick={() => {
                  dispatch(removeFromFavouriteAction(i));
                }}
                variant="danger w-25"
              >
                Elimina dai preferiti
              </Button>
            </ListGroup.Item>
          </>
        ))}
        <Button className="mt-2" variant="success w-25" onClick={() => navigate("/")}>
          Torna alla home
        </Button>
      </ListGroup>
    </Container>
  );
};

export default Preferiti;

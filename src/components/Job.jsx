import { Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { sendToFavouriteAction } from "../redux/actions";

const Job = ({ data }) => {
  const favourite = useSelector((state) => state.favourite.content);

  const controll = favourite.find((elem) => elem === data.company_name);

  const dispatch = useDispatch();

  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        <div className="d-flex justify-content-between">
          <Link to={`/${data.company_name}`}>{data.company_name}</Link>
          {controll ? (
            <i className="bi bi-heart-fill ms-2 text-danger"></i>
          ) : (
            <i
              className="bi bi-heart ms-2 "
              onClick={() => {
                dispatch(sendToFavouriteAction(data.company_name));
              }}
            ></i>
          )}
        </div>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;

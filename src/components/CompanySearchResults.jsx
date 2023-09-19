import { useEffect } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import Job from "./Job";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getJobsAction, sendToFavouriteAction } from "../redux/actions";

const CompanySearchResults = () => {
  const params = useParams();

  const company = useSelector((state) => state.company.content);

  const isJobsLoading = useSelector((state) => state.jobs.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobsAction(params));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs="12">
          <h1 className="display-4">Job posting for: {params.company}</h1>
        </Col>
        {isJobsLoading ? (
          <Spinner className="mt-3" variant="primary"></Spinner>
        ) : (
          <>
            <Col className="my-2">
              {company.map((jobData) => (
                <Job key={jobData._id} data={jobData} />
              ))}
            </Col>
            <Link to={"/"}>
              <Button variant="success" className="mt-1">
                Torna alla Home
              </Button>
            </Link>
          </>
        )}
      </Row>
    </Container>
  );
};

export default CompanySearchResults;

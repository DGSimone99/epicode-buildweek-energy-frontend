import { useEffect } from "react";
import { fetchClienti } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import FormClienti from "./FormClienti";
import { Link } from "react-router";
import FormFatture from "./FormFatture";

function FattureList() {
  const fatture = useSelector((state) => state.fatture.fatture);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchClienti());
  }, [dispatch, fatture]);

  return (
    <Container>
      <h1>Fatture</h1>
      <Row className="d-flex">
        <Col>id</Col>
        <Col>Id Cliente</Col>
        <Col>Importo</Col>
        <Col>Numero</Col>
        <Col>Data</Col>
        <Col>Stato</Col>
      </Row>
      {fatture.map((fattura) => (
        <Row key={fattura.id} as={Link} to={`/fattura/${fattura.id}`}>
          <Col>{fattura.id}</Col>
          <Col>{fattura.idCliente}</Col>
          <Col>{fattura.importo}</Col>
          <Col>{fattura.numero}</Col>
          <Col>{fattura.data}</Col>
          <Col>{fattura.stato}</Col>
        </Row>
      ))}
      {<FormFatture />}
    </Container>
  );
}

export default FattureList;

import { useEffect } from "react";
import { fetchClienti } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import FormClienti from "./FormClienti";
import { Link } from "react-router";

function ClientiList() {
  const clienti = useSelector((state) => state.clienti.clienti);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchClienti());
  }, [dispatch, clienti]);

  return (
    <Container>
      <h1>Clienti</h1>
      <Row className="d-flex">
        <Col>id</Col>
        <Col>Ragione Sociale</Col>
        <Col>Fatturato Annuale</Col>
        <Col>Data Inserimento</Col>
        <Col>Data Ultimo Contatto</Col>
        <Col>Tipo Cliente</Col>
        <Col>Telefono</Col>
      </Row>
      {clienti.map((client) => (
        <Row key={client.id} as={Link} to={`/cliente/${client.id}`}>
          <Col>{client.id}</Col>
          <Col>{client.ragioneSociale}</Col>
          <Col>{client.fatturatoAnnuale}</Col>
          <Col>{client.dataInserimento}</Col>
          <Col>{client.dataUltimoContatto}</Col>
          <Col>{client.tipoCliente}</Col>
          <Col> {client.telefono}</Col>
        </Row>
      ))}
      <FormClienti />
    </Container>
  );
}

export default ClientiList;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router";
import { deleteFatturaCliente, fetchClienteDetails } from "../redux/action";
import { Button, Card, Col, Container, Image, Row, Table } from "react-bootstrap";

function ClienteDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cliente = useSelector((state) => state.cliente.cliente || {});
  const fatture = useSelector((state) => state.cliente.cliente.fatture || []);

  useEffect(() => {
    dispatch(fetchClienteDetails(id));
  }, [dispatch, id]);

  const handleDelete = async (idFattura) => {
    await dispatch(deleteFatturaCliente(idFattura));
    dispatch(fetchClienteDetails(id));
  };

  return (
    <Container className="my-4 text-light">
      {cliente ? (
        <>
          <Row className="justify-content-center mb-4">
            <Col xs="auto">
              <Image src={cliente.logoAziendale} alt="logo" className="rounded-circle" style={{ width: "150px" }} />
            </Col>
          </Row>
          <h2 className="text-center mb-4">Dettagli Cliente</h2>

          <Card className="mb-4 bg-secondary text-light">
            <Card.Header className="fw-bold bg-dark text-light">Informazioni Generali</Card.Header>
            <Card.Body>
              <Row>
                <Col>
                  <strong>Tipo Cliente:</strong> {cliente.tipoCliente}
                </Col>
                <Col>
                  <strong>Ragione Sociale:</strong> {cliente.ragioneSociale}
                </Col>
                <Col>
                  <strong>Partita IVA:</strong> {cliente.partitaIva}
                </Col>
                <Col>
                  <strong>Email:</strong> {cliente.email}
                </Col>
              </Row>
              <hr className="border-light" />
              <Row>
                <Col>
                  <strong>Data Inserimento:</strong> {cliente.dataInserimento}
                </Col>
                <Col>
                  <strong>Ultimo Contatto:</strong> {cliente.dataUltimoContatto}
                </Col>
                <Col>
                  <strong>Fatturato Annuale:</strong> €{cliente.fatturatoAnnuale}
                </Col>
                <Col>
                  <strong>PEC:</strong> {cliente.pec}
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className="mb-4 bg-secondary text-light">
            <Card.Header className="fw-bold bg-dark text-light">Contatti</Card.Header>
            <Card.Body>
              <Row>
                <Col>
                  <strong>Telefono:</strong> {cliente.telefono}
                </Col>
                <Col>
                  <strong>Email Contatto:</strong> {cliente.emailContatto}
                </Col>
                <Col>
                  <strong>Contatto:</strong> {cliente.nomeContatto} {cliente.cognomeContatto}
                </Col>
                <Col>
                  <strong>Telefono Contatto:</strong> {cliente.telefonoContatto}
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className="mb-4 bg-secondary text-light">
            <Card.Header className="fw-bold bg-dark text-light">Indirizzi</Card.Header>
            <Card.Body>
              <p>
                <strong>Sede Legale:</strong> {cliente?.indirizzoSedeLegale?.via} {cliente?.indirizzoSedeLegale?.civico}
                , {cliente?.indirizzoSedeLegale?.localita}, {cliente?.indirizzoSedeLegale?.cap},{" "}
                {cliente?.indirizzoSedeLegale?.comune?.nome} ({cliente?.indirizzoSedeLegale?.comune?.provincia?.sigla})
              </p>
              <p>
                <strong>Sede Operativa:</strong> {cliente?.indirizzoSedeOperativa?.via}{" "}
                {cliente?.indirizzoSedeOperativa?.civico}, {cliente?.indirizzoSedeOperativa?.localita},{" "}
                {cliente?.indirizzoSedeOperativa?.cap}, {cliente?.indirizzoSedeOperativa?.comune?.nome} (
                {cliente?.indirizzoSedeOperativa?.comune?.provincia?.sigla})
              </p>
            </Card.Body>
          </Card>

          <Card className="bg-secondary text-light">
            <Card.Header className="fw-bold bg-dark text-light">Fatture</Card.Header>
            <Card.Body>
              <Button variant="success" className="mb-3" onClick={() => navigate(`/clienti/${id}/nuova-fattura`)}>
                Aggiungi Fattura
              </Button>
              <Table striped bordered hover responsive variant="dark">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Data</th>
                    <th>Importo</th>
                    <th>Numero</th>
                    <th>Stato</th>
                    <th>Azioni</th>
                  </tr>
                </thead>
                <tbody>
                  {fatture.map((fattura) => (
                    <tr key={fattura.id}>
                      <td>{fattura.id}</td>
                      <td>{fattura.data}</td>
                      <td>€{fattura.importo}</td>
                      <td>{fattura.numero}</td>
                      <td>{fattura.stato}</td>
                      <td>
                        <Button variant="danger" size="sm" onClick={() => handleDelete(fattura.id)}>
                          Elimina
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </>
      ) : (
        <p>Caricamento...</p>
      )}
    </Container>
  );
}

export default ClienteDetails;

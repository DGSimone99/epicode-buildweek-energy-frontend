import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { deleteFatturaCliente, fetchClienteDetails } from "../redux/action";
import { useSelector } from "react-redux";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

function ClienteDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const cliente = useSelector((state) => state.cliente.cliente || {});
  const fatture = useSelector((state) => state.cliente.cliente.fatture || []);

  useEffect(() => {
    dispatch(fetchClienteDetails(id));
  }, [dispatch, id, fatture]);

  return (
    <div>
      {cliente ? (
        <Container>
          <Row>
            <Image src={cliente.logoAziendale} alt="logo" className="rounded-circle" style={{ width: "200px" }} />
            <h2>Cliente</h2>
            <Row>
              <Row className="mb-3">
                <Col>
                  <h5>Tipo Cliente: </h5>
                  <p> {cliente.tipoCliente}</p>
                </Col>
                <Col>
                  <h5>Ragione Sociale:</h5>
                  <p> {cliente.ragioneSociale}</p>
                </Col>
                <Col>
                  <h5>Partita IVA: </h5>
                  <p> {cliente.partitaIva}</p>
                </Col>
                <Col>
                  <h5>Email: </h5>
                  <p> {cliente.email}</p>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <h5>Data Inserimento: </h5>
                  <p> {cliente.dataInserimento}</p>
                </Col>

                <Col>
                  <h5>Data Ultimo Contatto: </h5>
                  <p> {cliente.dataUltimoContatto}</p>
                </Col>

                <Col>
                  <h5>Fatturato Annuale: </h5>
                  <p> {cliente.fatturatoAnnuale}</p>
                </Col>
                <Col>
                  <h5>PEC: </h5>
                  <p> {cliente.pec}</p>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <h5>Telefono: </h5>
                  <p> {cliente.telefono}</p>
                </Col>
                <Col>
                  <h5>Email Contatto: </h5>
                  <p> {cliente.emailContatto}</p>
                </Col>
                <Col>
                  <h5>Nome Contatto: </h5>
                  <p>
                    {" "}
                    {cliente.nomeContatto} {cliente.cognomeContatto}
                  </p>
                </Col>
                <Col>
                  <h5>Telefono Contatto: </h5>
                  <p> {cliente.telefonoContatto}</p>
                </Col>
              </Row>
              <p>
                Indirizzo Sede Legale: {cliente?.indirizzoSedeLegale?.via} {cliente?.indirizzoSedeLegale?.civico},{" "}
                {cliente?.indirizzoSedeLegale?.localita}, {cliente?.indirizzoSedeLegale?.cap},{" "}
                {cliente?.indirizzoSedeLegale?.comune.nome} {"("}
                {cliente?.indirizzoSedeLegale?.comune.provincia.sigla}
                {")"}
              </p>
              <p>
                Indirizzo Sede Operativa: {cliente?.indirizzoSedeOperativa?.via || ""}{" "}
                {cliente?.indirizzoSedeOperativa?.civico}, {cliente?.indirizzoSedeOperativa?.localita},{" "}
                {cliente?.indirizzoSedeOperativa?.cap}, {cliente?.indirizzoSedeOperativa?.comune.nome} {"("}
                {cliente?.indirizzoSedeOperativa?.comune.provincia.sigla}
                {")"}
              </p>
            </Row>

            <h3>Fatture:</h3>
            <Row className="d-flex">
              <Col className="fs-5 fw-bold">id</Col>
              <Col className="fs-5 fw-bold">Data</Col>
              <Col className="fs-5 fw-bold">Importo</Col>
              <Col className="fs-5 fw-bold">Numero</Col>
              <Col className="fs-5 fw-bold">Stato</Col>
              <Col className="fs-5 fw-bold"></Col>
            </Row>
            {fatture.map((fattura) => (
              <Row key={fattura.id} className="d-flex align-items-center mb-1">
                <Col>{fattura.id}</Col>
                <Col>{fattura.data}</Col>
                <Col>{fattura.importo}</Col>
                <Col>{fattura.numero}</Col>
                <Col>{fattura.stato}</Col>
                <Col>
                  <Button onClick={() => deleteFatturaCliente(fattura.id)} className=" btn btn-danger">
                    Elimina
                  </Button>
                </Col>
              </Row>
            ))}
          </Row>
        </Container>
      ) : (
        <p>Caricamento...</p>
      )}
    </div>
  );
}

export default ClienteDetails;

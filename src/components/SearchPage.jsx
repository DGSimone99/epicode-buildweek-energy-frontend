import { useState } from "react";
import { Form, Button, Container, Table, Row, Col } from "react-bootstrap";
import { fetchClientiFiltrati } from "../redux/action";
import { Link } from "react-router-dom";

function SearchPage() {
  const [params, setParams] = useState({
    fatturatoAnnuale: "",
    dataInserimento: "",
    dataUltimoContatto: "",
    nomeParziale: "",
  });
  const [clienti, setClienti] = useState([]);

  const handleChange = (e) => {
    setParams({ ...params, [e.target.name]: e.target.value });
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const data = await fetchClientiFiltrati(params);
      setClienti(data);
    } catch (err) {
      console.error("Errore nella ricerca:", err);
    }
  };

  return (
    <Container className="mt-4 text-light">
      <h2 className="mb-3">Ricerca Clienti</h2>
      <Form onSubmit={handleSearch}>
        <Row className="mb-3">
          <Col md={3}>
            <Form.Label>Fatturato minimo</Form.Label>
            <Form.Control
              className="bg-black border-0"
              type="number"
              name="fatturatoAnnuale"
              placeholder="Fatturato minimo"
              value={params.fatturatoAnnuale}
              onChange={handleChange}
            />
          </Col>
          <Col md={3}>
            <Form.Label>Data inserimento</Form.Label>
            <Form.Control
              className="bg-black border-0"
              type="date"
              name="dataInserimento"
              value={params.dataInserimento}
              onChange={handleChange}
            />
          </Col>
          <Col md={3}>
            <Form.Label>Data ultimo contatto</Form.Label>
            <Form.Control
              className="bg-black border-0"
              type="date"
              name="dataUltimoContatto"
              value={params.dataUltimoContatto}
              onChange={handleChange}
            />
          </Col>
          <Col md={3}>
            <Form.Label>Nome</Form.Label>
            <Form.Control
              className="bg-black border-0"
              type="text"
              name="nomeParziale"
              placeholder="Nome cliente"
              value={params.nomeParziale}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Button type="submit" className="bg-success mb-4">
          Cerca
        </Button>
      </Form>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Ragione Sociale</th>
            <th>Email</th>
            <th>Fatturato</th>
            <th>Data Inserimento</th>
            <th>Data Ultimo Contatto</th>
          </tr>
        </thead>
        <tbody>
          {clienti.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.ragioneSociale}</td>
              <td>{c.email}</td>
              <td>{c.fatturatoAnnuale}</td>
              <td>{c.dataInserimento}</td>
              <td>{c.dataUltimoContatto}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="text-center mt-3">
        <Button as={Link} to="/clienti">
          Torna indietro
        </Button>
      </div>
    </Container>
  );
}

export default SearchPage;

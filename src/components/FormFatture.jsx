import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { newFattura } from "../redux/action";
import { Container, Button, Form } from "react-bootstrap";

function FormFatture() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({
    importo: "",
    numero: "",
    stato: "",
    data: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(newFattura({ ...form, idCliente: id }));
    navigate(`/cliente/${id}`);
  };

  return (
    <Container className="h-100 mt-5">
      <Form
        noValidate
        onSubmit={handleSubmit}
        className="d-flex flex-column justify-content-center align-items-center text-center"
      >
        <Form.Group controlId="importo">
          <Form.Label>Importo</Form.Label>
          <Form.Control
            value={form.importo}
            required
            type="number"
            placeholder="Importo"
            onChange={(e) => setForm({ ...form, importo: e.target.value })}
            className="bg-black border-0"
          />
        </Form.Group>

        <Form.Group controlId="numero">
          <Form.Label>Numero</Form.Label>
          <Form.Control
            value={form.numero}
            required
            type="text"
            placeholder="Numero"
            onChange={(e) => setForm({ ...form, numero: e.target.value })}
            className="bg-black border-0"
          />
        </Form.Group>

        <Form.Group controlId="data">
          <Form.Label>Data</Form.Label>
          <Form.Control
            value={form.data}
            required
            type="date"
            onChange={(e) => setForm({ ...form, data: e.target.value })}
            className="bg-black border-0"
          />
        </Form.Group>

        <Form.Group controlId="stato">
          <Form.Label>Stato</Form.Label>
          <Form.Select
            value={form.stato}
            required
            onChange={(e) => setForm({ ...form, stato: e.target.value })}
            className="bg-black border-0"
          >
            <option value="">Seleziona stato</option>
            <option value="PAGATA">Pagata</option>
            <option value="NON_PAGATA">Non Pagata</option>
          </Form.Select>
        </Form.Group>

        <Button className="mt-3 bg-primary" type="submit">
          Crea
        </Button>
      </Form>
    </Container>
  );
}

export default FormFatture;

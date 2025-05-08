import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { newFattura } from "../redux/action";
import { Container } from "react-bootstrap";

function FormFatture() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    idCliente: "",
    importo: "",
    numero: "",
    stato: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(newFattura(form));
  };

  return (
    <Container className="h-100">
      <Form
        noValidate
        onSubmit={handleSubmit}
        className="d-flex flex-column justify-content-center align-items-center text-center"
      >
        <Form.Group controlId="validationCustom02">
          <Form.Label>Id Cliente</Form.Label>
          <Form.Control
            value={form.idCliente}
            required
            type="text"
            placeholder="idCliente"
            onChange={(e) => setForm({ ...form, idCliente: e.target.value })}
            className="bg-black border-0"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="validationCustom03">
          <Form.Label>Importo</Form.Label>
          <Form.Control
            value={form.importo}
            required
            type="text"
            placeholder="importo"
            onChange={(e) => setForm({ ...form, importo: e.target.value })}
            className="bg-black border-0"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="validationCustom04">
          <Form.Label>Numero</Form.Label>
          <Form.Control
            value={form.numero}
            required
            type="text"
            placeholder="numero"
            onChange={(e) => setForm({ ...form, numero: e.target.value })}
            className="bg-black border-0"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="validationCustom06">
          <Form.Label>Data</Form.Label>
          <Form.Control
            value={form.data}
            required
            type="date"
            placeholder="data"
            onChange={(e) => setForm({ ...form, data: e.target.value })}
            className="bg-black border-0"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="validationCustom05">
          <Form.Label>Stato</Form.Label>
          <Form.Control
            value={form.stato}
            required
            type="text"
            placeholder="stato"
            onChange={(e) => setForm({ ...form, stato: e.target.value })}
            className="bg-black border-0"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Button className="mt-3 bg-primary" type="submit">
          Crea
        </Button>
      </Form>
    </Container>
  );
}

export default FormFatture;

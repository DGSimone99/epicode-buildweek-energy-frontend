import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchFatturaDetails, newFattura, updateFattura } from "../redux/action";
import { Container, Button, Form } from "react-bootstrap";

function FormFatture() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { idCliente, idFattura } = useParams();
  const fatturaDettaglio = useSelector((state) => state.fattura.fattura);
  const [errore, setErrore] = useState(false);

  const [form, setForm] = useState({
    importo: "",
    numero: "",
    stato: "",
    data: "",
  });

  const [validated, setValidated] = useState(false);

  useEffect(() => {
    if (idFattura) {
      dispatch(fetchFatturaDetails(idFattura));
    }
  }, [idFattura, dispatch]);

  useEffect(() => {
    if (idFattura && fatturaDettaglio) {
      setForm({
        importo: fatturaDettaglio.importo || "",
        numero: fatturaDettaglio.numero || "",
        stato: fatturaDettaglio.stato || "",
        data: fatturaDettaglio.data || "",
      });
    }
  }, [fatturaDettaglio, idFattura]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formElement = event.currentTarget;
    if (formElement.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }
    setValidated(true);

    const finalForm = { ...form };

    if (!idFattura) {
      finalForm.idCliente = idCliente;
    }

    const action = idFattura ? updateFattura(finalForm, idFattura) : newFattura(finalForm);

    dispatch(action)
      .then(() => {
        navigate("/cliente/" + idCliente);
      })
      .catch((error) => {
        console.error("Errore durante la richiesta:", error);
        setErrore(true);
      });
  };

  return (
    <Container className="h-100 mt-5">
      <Form
        noValidate
        validated={validated}
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
        {errore ? <p className="text-danger text-center m-0">Dati invalidi</p> : <p className="m-0"> </p>}
        <Button className="mt-3 bg-primary" type="submit">
          {idFattura ? "Modifica" : "Crea"}
        </Button>
        <Button className="mt-3" onClick={() => navigate("/cliente/" + idCliente)}>
          Indietro
        </Button>
      </Form>
    </Container>
  );
}

export default FormFatture;

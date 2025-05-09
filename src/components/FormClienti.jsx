import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { newClient } from "../redux/action";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router";

function FormClienti() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errore, setErrore] = useState(false);
  const [form, setForm] = useState({
    ragioneSociale: "",
    partitaIva: "",
    email: "",
    dataInserimento: "",
    dataUltimoContatto: "",
    fatturatoAnnuale: "",
    pec: "",
    telefono: "",
    emailContatto: "",
    nomeContatto: "",
    cognomeContatto: "",
    telefonoContatto: "",
    tipoCliente: "",
    indirizzoSedeLegale: {
      via: "",
      civico: "",
      localita: "",
      cap: "",
    },
    indirizzoSedeOperativa: {
      via: "",
      civico: "",
      localita: "",
      cap: "",
    },
    comuneSedeLegale: "",
    comuneSedeOperativa: "",
  });

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formElement = event.currentTarget;
    if (formElement.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }
    setValidated(true);

    dispatch(newClient(form))
      .then(() => {
        navigate("/clienti");
      })
      .catch((error) => {
        console.error("Errore durante la creazione:", error);
        setErrore(true);
      });
  };

  return (
    <Container fluid>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="gap-5 justify-content-center mx-5 mt-5">
          <Col xs={3}>
            <h2>Nuovo Cliente</h2>
            <Form.Group controlId="validationCustom01">
              <Form.Label className="mb-1 mt-2">Ragione Sociale</Form.Label>
              <Form.Control
                value={form.ragioneSociale}
                required
                type="text"
                placeholder="Ragione Sociale"
                onChange={(e) => setForm({ ...form, ragioneSociale: e.target.value })}
                className="bg-black border-0"
              />
            </Form.Group>
            <Form.Group controlId="validationCustom02">
              <Form.Label className="mb-1 mt-2">Partita Iva</Form.Label>
              <Form.Control
                value={form.partitaIva}
                required
                type="text"
                placeholder="Partita Iva"
                onChange={(e) => setForm({ ...form, partitaIva: e.target.value })}
                className="bg-black border-0"
              />
            </Form.Group>
            <Form.Group controlId="validationCustom03">
              <Form.Label className="mb-1 mt-2">Email</Form.Label>
              <Form.Control
                value={form.email}
                required
                type="email"
                placeholder="Email"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="bg-black border-0"
              />
            </Form.Group>
            <Form.Group controlId="validationCustom04">
              <Form.Label className="mb-1 mt-2">Fatturato Annuale</Form.Label>
              <Form.Control
                value={form.fatturatoAnnuale}
                required
                type="number"
                placeholder="Fatturato Annuale"
                onChange={(e) => setForm({ ...form, fatturatoAnnuale: e.target.value })}
                className="bg-black border-0"
              />
            </Form.Group>
            <Form.Group controlId="validationCustom08">
              <Form.Label className="mb-1 mt-2">Telefono</Form.Label>
              <Form.Control
                value={form.telefono}
                required
                type="tel"
                placeholder="Telefono"
                onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                className="bg-black border-0"
              />
            </Form.Group>
            <p className="mb-1 mt-2">Tipo Cliente</p>
            <Form.Select
              className="bg-black border-0 d-flex"
              onChange={(e) => setForm({ ...form, tipoCliente: e.target.value })}
              style={{ width: "205px" }}
            >
              <option value="PA">PA</option>
              <option value="SAS">SAS</option>
              <option value="SPA">SPA</option>
              <option value="SRL">SRL</option>
            </Form.Select>

            <Form.Group controlId="XXXXXXXXXXXXXXXXXX">
              <Form.Label className="mb-1 mt-2">Upload Foto Profilo</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={(e) => setForm({ ...form, fotoProfilo: e.target.files[0] })}
                className="bg-black border-0 my-2"
              />
            </Form.Group>
          </Col>

          <Col xs={3}>
            <h2>Indirizzo Sede Legale</h2>

            <Form.Group controlId="validationCustom09">
              <Form.Label className="mb-1 mt-2">Via</Form.Label>
              <Form.Control
                value={form.indirizzoSedeLegale.via}
                required
                type="text"
                placeholder="Via"
                onChange={(e) =>
                  setForm({
                    ...form,
                    indirizzoSedeLegale: {
                      ...form.indirizzoSedeLegale,
                      via: e.target.value,
                    },
                  })
                }
                className="bg-black border-0"
              />
            </Form.Group>

            <Form.Group controlId="validationCustom09">
              <Form.Label className="mb-1 mt-2">Civico</Form.Label>
              <Form.Control
                value={form.indirizzoSedeLegale.civico}
                required
                type="text"
                placeholder="Civico"
                onChange={(e) =>
                  setForm({
                    ...form,
                    indirizzoSedeLegale: {
                      ...form.indirizzoSedeLegale,
                      civico: e.target.value,
                    },
                  })
                }
                className="bg-black border-0"
              />
            </Form.Group>

            <Form.Group controlId="validationCustom09">
              <Form.Label className="mb-1 mt-2">Località</Form.Label>
              <Form.Control
                value={form.indirizzoSedeLegale.localita}
                required
                type="text"
                placeholder="Località"
                onChange={(e) =>
                  setForm({
                    ...form,
                    indirizzoSedeLegale: {
                      ...form.indirizzoSedeLegale,
                      localita: e.target.value,
                    },
                  })
                }
                className="bg-black border-0"
              />
            </Form.Group>

            <Form.Group controlId="validationCustom10">
              <Form.Label className="mb-1 mt-2">Cap</Form.Label>
              <Form.Control
                value={form.indirizzoSedeLegale.cap}
                required
                type="text"
                placeholder="CAP"
                onChange={(e) =>
                  setForm({
                    ...form,
                    indirizzoSedeLegale: {
                      ...form.indirizzoSedeLegale,
                      cap: e.target.value,
                    },
                  })
                }
                className="bg-black border-0"
              />
            </Form.Group>

            <Form.Group controlId="validationCustom11">
              <Form.Label className="mb-1 mt-2">Comune Sede Legale</Form.Label>
              <Form.Control
                value={form.comuneSedeLegale}
                required
                type="text"
                placeholder="Comune Sede Legale"
                onChange={(e) => setForm({ ...form, comuneSedeLegale: e.target.value })}
                className="bg-black border-0"
              />
            </Form.Group>
          </Col>

          <Col xs={3}>
            <h2>Indirizzo Sede Operativa</h2>

            <Form.Group controlId="validationCustom09">
              <Form.Label className="mb-1 mt-2">Via</Form.Label>
              <Form.Control
                value={form.indirizzoSedeOperativa.via}
                required
                type="text"
                placeholder="Via"
                onChange={(e) =>
                  setForm({
                    ...form,
                    indirizzoSedeOperativa: {
                      ...form.indirizzoSedeOperativa,
                      via: e.target.value,
                    },
                  })
                }
                className="bg-black border-0"
              />
            </Form.Group>

            <Form.Group controlId="validationCustom09">
              <Form.Label className="mb-1 mt-2">Civico</Form.Label>
              <Form.Control
                value={form.indirizzoSedeOperativa.civico}
                required
                type="text"
                placeholder="Civico"
                onChange={(e) =>
                  setForm({
                    ...form,
                    indirizzoSedeOperativa: {
                      ...form.indirizzoSedeOperativa,
                      civico: e.target.value,
                    },
                  })
                }
                className="bg-black border-0"
              />
            </Form.Group>

            <Form.Group controlId="validationCustom09">
              <Form.Label className="mb-1 mt-2">Località</Form.Label>
              <Form.Control
                value={form.indirizzoSedeOperativa.localita}
                required
                type="text"
                placeholder="Località"
                onChange={(e) =>
                  setForm({
                    ...form,
                    indirizzoSedeOperativa: {
                      ...form.indirizzoSedeOperativa,
                      localita: e.target.value,
                    },
                  })
                }
                className="bg-black border-0"
              />
            </Form.Group>

            <Form.Group controlId="validationCustom10">
              <Form.Label className="mb-1 mt-2">CAP</Form.Label>
              <Form.Control
                value={form.indirizzoSedeOperativa.cap}
                required
                type="text"
                placeholder="CAP"
                onChange={(e) =>
                  setForm({
                    ...form,
                    indirizzoSedeOperativa: {
                      ...form.indirizzoSedeOperativa,
                      cap: e.target.value,
                    },
                  })
                }
                className="bg-black border-0"
              />
            </Form.Group>

            <Form.Group controlId="validationCustom11">
              <Form.Label className="mb-1 mt-2">Comune Sede Operativa</Form.Label>
              <Form.Control
                value={form.comuneSedeOperativa}
                required
                type="text"
                placeholder="Comune Sede Operativa"
                onChange={(e) => setForm({ ...form, comuneSedeOperativa: e.target.value })}
                className="bg-black border-0"
              />
            </Form.Group>
          </Col>
          {errore ? <p className="text-danger text-center m-0">Dati invalidi</p> : <p className="m-0"> </p>}
          <Button className="bg-secondary w-25 m-0" type="submit">
            Crea
          </Button>
          <Button as={Link} to="/clienti">
            Torna indietro
          </Button>
        </Row>
      </Form>
    </Container>
  );
}

export default FormClienti;

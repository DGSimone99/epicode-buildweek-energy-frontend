import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { newClient } from "../redux/action";
import { Container } from "react-bootstrap";

function FormClienti() {
  const dispatch = useDispatch();
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

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(newClient(form));
  };

  return (
    <Container className="h-100">
      <Form
        noValidate
        onSubmit={handleSubmit}
        className="d-flex flex-column justify-content-center align-items-center text-center"
      >
        <Form.Group controlId="validationCustom01">
          <Form.Label>Ragione Sociale</Form.Label>
          <Form.Control
            value={form.ragioneSociale}
            required
            type="text"
            placeholder="ragioneSociale"
            onChange={(e) => setForm({ ...form, ragioneSociale: e.target.value })}
            className="bg-black border-0"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="validationCustom02">
          <Form.Label>Partita Iva</Form.Label>
          <Form.Control
            value={form.partitaIva}
            required
            type="text"
            placeholder="partitaIva"
            onChange={(e) => setForm({ ...form, partitaIva: e.target.value })}
            className="bg-black border-0"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="validationCustom03">
          <Form.Label>Email</Form.Label>
          <Form.Control
            value={form.email}
            required
            type="email"
            placeholder="email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="bg-black border-0"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="validationCustom04">
          <Form.Label>Fatturato Annuale</Form.Label>
          <Form.Control
            value={form.fatturatoAnnuale}
            required
            type="number"
            placeholder="fatturatoAnnuale"
            onChange={(e) => setForm({ ...form, fatturatoAnnuale: e.target.value })}
            className="bg-black border-0"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="validationCustom05">
          <Form.Label>Data Inserimento</Form.Label>
          <Form.Control
            value={form.dataInserimento}
            required
            type="string"
            placeholder="dataInserimento"
            onChange={(e) => setForm({ ...form, dataInserimento: e.target.value })}
            className="bg-black border-0"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="validationCustom06">
          <Form.Label>Data Ultimo Contatto</Form.Label>
          <Form.Control
            value={form.dataUltimoContatto}
            required
            type="string"
            placeholder="dataUltimoContatto"
            onChange={(e) => setForm({ ...form, dataUltimoContatto: e.target.value })}
            className="bg-black border-0"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="validationCustom07">
          <Form.Label>Tipo Cliente</Form.Label>
          <Form.Control
            value={form.tipoCliente}
            required
            type="text"
            placeholder="tipoCliente"
            onChange={(e) => setForm({ ...form, tipoCliente: e.target.value })}
            className="bg-black border-0"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="validationCustom08">
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            value={form.telefono}
            required
            type="tel"
            placeholder="telefono"
            onChange={(e) => setForm({ ...form, telefono: e.target.value })}
            className="bg-black border-0"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <h2>Indirizzo Sede Legale</h2>

        <Form.Group controlId="validationCustom09">
          <Form.Label>Via</Form.Label>
          <Form.Control
            value={form.indirizzoSedeLegale.via}
            required
            type="text"
            placeholder="via"
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
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="validationCustom09">
          <Form.Label>Civico</Form.Label>
          <Form.Control
            value={form.indirizzoSedeLegale.civico}
            required
            type="text"
            placeholder="civico"
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
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="validationCustom09">
          <Form.Label>Località</Form.Label>
          <Form.Control
            value={form.indirizzoSedeLegale.localita}
            required
            type="text"
            placeholder="localita"
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
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="validationCustom10">
          <Form.Label>Cap</Form.Label>
          <Form.Control
            value={form.indirizzoSedeLegale.cap}
            required
            type="text"
            placeholder="cap"
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
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="validationCustom11">
          <Form.Label>Comune Sede Legale</Form.Label>
          <Form.Control
            value={form.comuneSedeLegale}
            required
            type="text"
            placeholder="comuneSedeLegale"
            onChange={(e) => setForm({ ...form, comuneSedeLegale: e.target.value })}
            className="bg-black border-0"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <h2>Indirizzo Sede Operativa</h2>

        <Form.Group controlId="validationCustom09">
          <Form.Label>Via</Form.Label>
          <Form.Control
            value={form.indirizzoSedeOperativa.via}
            required
            type="text"
            placeholder="via"
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
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="validationCustom09">
          <Form.Label>Civico</Form.Label>
          <Form.Control
            value={form.indirizzoSedeOperativa.civico}
            required
            type="text"
            placeholder="civico"
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
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="validationCustom09">
          <Form.Label>Località</Form.Label>
          <Form.Control
            value={form.indirizzoSedeOperativa.localita}
            required
            type="text"
            placeholder="localita"
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
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="validationCustom10">
          <Form.Label>Cap</Form.Label>
          <Form.Control
            value={form.indirizzoSedeOperativa.cap}
            required
            type="text"
            placeholder="cap"
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
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="validationCustom11">
          <Form.Label>Comune Sede Operativa</Form.Label>
          <Form.Control
            value={form.comuneSedeOperativa}
            required
            type="text"
            placeholder="comuneSedeOperativa"
            onChange={(e) => setForm({ ...form, comuneSedeOperativa: e.target.value })}
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

export default FormClienti;

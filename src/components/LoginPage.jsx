import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { login } from "../redux/action";
import { Link, useNavigate } from "react-router";
import { Container } from "react-bootstrap";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({ username: "", password: "" });
  const [errore, setErrore] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formElement = event.currentTarget;
    if (!formElement.checkValidity()) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    setValidated(true);
    setErrore(false);

    const result = await dispatch(login(form));
    if (result?.success) {
      navigate("/clienti");
    } else {
      setErrore(true);
    }
  };

  return (
    <Container className="h-100 mt-5">
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="d-flex flex-column justify-content-center align-items-center text-center"
      >
        <Form.Group controlId="validationUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            className="bg-black border-0"
          />
        </Form.Group>

        <Form.Group controlId="validationPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="bg-black border-0"
          />
        </Form.Group>

        {errore && <p className="text-danger mt-2">Credenziali non valide</p>}

        <Button className="mt-3 bg-primary" type="submit">
          Login
        </Button>
        <Link className="mt-3 text-decoration-none" to="/register">
          Registrati
        </Link>
      </Form>
    </Container>
  );
}

export default LoginPage;

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { login } from "../redux/action";
import { useNavigate } from "react-router";
import { Container } from "react-bootstrap";

function LoginPage() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login(form));
    navigate("/clienti");
  };

  return (
    <Container className="h-100">
      <Form
        noValidate
        onSubmit={handleSubmit}
        className="d-flex flex-column justify-content-center align-items-center text-center"
      >
        <Form.Group controlId="validationCustom01">
          <Form.Label>Username</Form.Label>
          <Form.Control
            value={form.username}
            required
            type="text"
            placeholder="Username"
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            className="bg-black border-0"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="validationCustom02">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={form.password}
            required
            type="password"
            placeholder="Password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="bg-black border-0"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Button className="mt-3 bg-primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default LoginPage;

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { register } from "../redux/action";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";

function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
    nome: "",
    cognome: "",
    email: "",
  });
  const [role1, setRole1] = useState("ROLE_USER");
  const [role2, setRole2] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(register(form, role1, role2));
    navigate("/login");
  };

  return (
    <Container className="h-100 mt-5">
      <Form
        onSubmit={handleSubmit}
        className="d-flex flex-column justify-content-center align-items-center text-center"
      >
        {["username", "password", "nome", "cognome", "email"].map((field) => (
          <Form.Group controlId={field} key={field}>
            <Form.Label>{field.charAt(0).toUpperCase() + field.slice(1)}</Form.Label>
            <Form.Control
              type={field === "password" ? "password" : "text"}
              placeholder={field.toUpperCase()}
              value={form[field]}
              onChange={(e) => setForm({ ...form, [field]: e.target.value })}
              className="bg-black border-0"
              required
            />
          </Form.Group>
        ))}

        <Form.Group controlId="role1">
          <Form.Label>Ruolo principale</Form.Label>
          <Form.Select className="bg-black border-0" value={role1} onChange={(e) => setRole1(e.target.value)}>
            <option value="ROLE_USER">Utente</option>
            <option value="ROLE_ADMIN">Admin</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="role2">
          <Form.Label>Ruolo secondario (opzionale)</Form.Label>
          <Form.Select className="bg-black border-0" value={role2} onChange={(e) => setRole2(e.target.value)}>
            <option value="">Nessuno</option>
            <option value="ROLE_USER">Utente</option>
            <option value="ROLE_ADMIN">Admin</option>
          </Form.Select>
        </Form.Group>

        <Button type="submit" className="mt-3 bg-success">
          Registrati
        </Button>
      </Form>
    </Container>
  );
}

export default RegisterPage;

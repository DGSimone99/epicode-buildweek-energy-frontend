import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";

function HomePage() {
  const navigate = useNavigate();

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
      <h1 className="mb-4">Benvenuto!</h1>
      <p className="mb-4">Accedi al tuo account o registrati per iniziare.</p>
      <div className="d-flex gap-3">
        <Button variant="primary" size="lg" onClick={() => navigate("/login")}>
          <FaSignInAlt className="me-2" />
          Login
        </Button>
        <Button variant="success" size="lg" onClick={() => navigate("/register")}>
          <FaUserPlus className="me-2" />
          Registrati
        </Button>
      </div>
    </Container>
  );
}

export default HomePage;

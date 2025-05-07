import { useEffect } from "react";
import { fetchClienti } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";

function ClientiList() {
  const clienti = useSelector((state) => state.clienti.clienti);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchClienti());
  }, [dispatch]);

  return (
    <Container>
      <h1>Clienti</h1>
      <ul>
        {clienti.map((client) => (
          <li key={client.id}>{client.id}</li>
        ))}
      </ul>
    </Container>
  );
}

export default ClientiList;

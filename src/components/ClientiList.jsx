import { useEffect, useState } from "react";
import { fetchClienti } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { Button, ButtonGroup, Container, Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router";
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";
import { VscTriangleLeft, VscTriangleRight } from "react-icons/vsc";
import { PiPlus } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";

function ClientiList() {
  const clienti = useSelector((state) => state.clienti.clienti.content);
  const pagine = useSelector((state) => state.clienti.clienti);
  const [order, setOrder] = useState("id");
  const [direction, setDirection] = useState("id");
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchClienti(page, 10, order, direction));
  }, [dispatch, page, order, direction]);

  return (
    <Container className="mt-5">
      <Link to="/" className="d-flex justify-content-center align-items-center">
        Home
      </Link>
      <div className="d-flex justify-content-between align-items-center  mb-4">
        <div className="d-flex align-items-center">
          <h1>Clienti</h1>
          <Button onClick={() => navigate("/clienti/new")}>
            <PiPlus className="fs-3 ms-3 border p-1" style={{ cursor: "pointer" }} />
          </Button>
          <Button onClick={() => navigate("/clienti/search")}>
            <FaSearch className="fs-3 ms-3 border p-1" style={{ cursor: "pointer" }} />
          </Button>
        </div>
        <div className="d-flex align-items-center gap-3">
          <Form.Select className="bg-black border-0" onChange={(e) => setOrder(e.target.value)}>
            <option value="id">Id</option>
            <option value="ragioneSociale">Ragione Sociale</option>
            <option value="dataInserimento">Data Inserimento</option>
            <option value="dataUltimoContatto">Dato ultimo contratto</option>
            <option value="fatturatoAnnuale">Fatturato Annuale</option>
            <option value="indirizzoSedeLegale.comune.provincia">Provincia</option>
          </Form.Select>
          <TbTriangleFilled onClick={() => setDirection("asc")} style={{ cursor: "pointer" }} />
          <TbTriangleInvertedFilled onClick={() => setDirection("desc")} style={{ cursor: "pointer" }} />
        </div>
      </div>
      <Row className="d-flex">
        <Col xs={1}>ID</Col>
        <Col>Ragione Sociale</Col>
        <Col>Fatturato Annuale</Col>
        <Col>Data Inserimento</Col>
        <Col>Data Ultimo Contatto</Col>
        <Col>Tipo Cliente</Col>
        <Col>Indirizzo</Col>
      </Row>
      {clienti?.map((client) => (
        <Row
          key={client.id}
          as={Link}
          to={`/cliente/${client.id}`}
          className="text-decoration-none my-3 py-2 border border-secondary pointer"
        >
          <Col xs={1}>{client.id}</Col>
          <Col>{client.ragioneSociale}</Col>
          <Col>{client.fatturatoAnnuale}</Col>
          <Col>{client.dataInserimento}</Col>
          <Col>{client.dataUltimoContatto}</Col>
          <Col>{client.tipoCliente}</Col>
          <Col>{client.indirizzoSedeLegale}</Col>
        </Row>
      ))}
      {pagine ? (
        <div className="d-flex justify-content-center mt-3">
          <Button disabled={page === 0} onClick={() => setPage(page - 1)}>
            <VscTriangleLeft disabled={page === 0} onClick={() => setPage(page - 1)}></VscTriangleLeft>
          </Button>
          <Button disabled={page === pagine.totalPages - 1} onClick={() => setPage(page + 1)}>
            <VscTriangleRight></VscTriangleRight>
          </Button>
        </div>
      ) : null}
    </Container>
  );
}

export default ClientiList;

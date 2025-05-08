import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { fetchClienteDetails } from "../redux/action";
import { useSelector } from "react-redux";
import { Container, Image } from "react-bootstrap";

function ClienteDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const cliente = useSelector((state) => state.cliente.cliente);

  useEffect(() => {
    dispatch(fetchClienteDetails(id));
  }, [dispatch, id]);

  return (
    <Container>
      <Image src={cliente.logoAziendale} alt="logo" />
      <h2>Cliente</h2>
      <p>Ragione Sociale: {cliente.ragioneSociale}</p>
      <p>Partita IVA: {cliente.partitaIva}</p>
      <p>Email: {cliente.email}</p>
      <p>Data Inserimento: {cliente.dataInserimento}</p>
      <p>Data Ultimo Contatto: {cliente.dataUltimoContatto}</p>
      <p>Fatturato Annuale: {cliente.fatturatoAnnuale}</p>
      <p>PEC: {cliente.pec}</p>
      <p>Telefono: {cliente.telefono}</p>
      <p>Email Contatto: {cliente.emailContatto}</p>
      <p>Nome Contatto: {cliente.nomeContatto}</p>
      <p>Cognome Contatto: {cliente.cognomeContatto}</p>
      <p>Telefono Contatto: {cliente.telefonoContatto}</p>
      <p>Tipo Cliente: {cliente.tipoCliente}</p>
      <p>
        Indirizzo Sede Legale: {cliente.indirizzoSedeLegale.via} {cliente.indirizzoSedeLegale.civico},{" "}
        {cliente.indirizzoSedeLegale.localita}, {cliente.indirizzoSedeLegale.cap}
      </p>
      <p>Comune Sede Legale: {cliente.indirizzoSedeLegale.comune.nome}</p>
      <p>
        Indirizzo Sede Operativa: {cliente.indirizzoSedeOperativa.via} {cliente.indirizzoSedeOperativa.civico},{" "}
        {cliente.indirizzoSedeOperativa.localita}, {cliente.indirizzoSedeOperativa.cap}
      </p>
      <p>Comune Sede Operativa: {cliente.indirizzoSedeOperativa.comune.nome}</p>
    </Container>
  );
}

export default ClienteDetails;

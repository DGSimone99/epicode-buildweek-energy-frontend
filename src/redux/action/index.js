import axios from "axios";

export const LOGIN = "LOGIN";
export const GET_CLIENTI = "GET_CLIENTI";
export const REGISTER = "REGISTER";
export const SET_CLIENTE = "SET_CLIENTE";
export const GET_CLIENTE = "GET_CLIENTE";
export const GET_FATTURE = "GET_FATTURE";

export const login = (credentials) => {
  return async (dispatch) => {
    try {
      let login = await axios.post("/api/auth/login", credentials);

      const { token, username, roles } = login.data;
      dispatch({
        type: LOGIN,
        payload: { token, username, roles },
      });
      localStorage.setItem("token", token);
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchClienti = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      let clienti = await axios.get("/api/clienti", { headers: { Authorization: `Bearer ${token}` } });

      dispatch({ type: GET_CLIENTI, payload: clienti.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchClienteDetails = (id) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      let cliente = await axios.get("/api/clienti/" + id, { headers: { Authorization: `Bearer ${token}` } });

      dispatch({ type: GET_CLIENTE, payload: cliente.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const newClient = (client) => {
  return async () => {
    try {
      const token = localStorage.getItem("token");

      const query = new URLSearchParams({
        comuneSedeLegale: client.comuneSedeLegale,
        comuneSedeOperativa: client.comuneSedeOperativa,
        tipoCliente: client.tipoCliente,
      }).toString();

      const body = {
        clienteRequest: {
          ragioneSociale: client.ragioneSociale,
          partitaIva: client.partitaIva,
          email: client.email,
          dataInserimento: client.dataInserimento,
          dataUltimoContatto: client.dataUltimoContatto,
          fatturatoAnnuale: client.fatturatoAnnuale,
          pec: client.pec,
          telefono: client.telefono,
          emailContatto: client.emailContatto,
          nomeContatto: client.nomeContatto,
          cognomeContatto: client.cognomeContatto,
          telefonoContatto: client.telefonoContatto,
        },
        indirizzoSedeLegale: client.indirizzoSedeLegale,
        indirizzoSedeOperativa: client.indirizzoSedeOperativa,
      };

      await axios.post(`/api/clienti?${query}`, body, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteFatturaCliente = (id) => {
  return async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`/api/fatture/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchFatture = (id) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      let fatture = await axios.get(`/api/fatture/${id}`, { headers: { Authorization: `Bearer ${token}` } });

      dispatch({ type: GET_FATTURE, payload: fatture.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchFatturaDetails = (id) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      let fattura = await axios.get(`/api/fatture/${id}`, { headers: { Authorization: `Bearer ${token}` } });

      dispatch({ type: GET_FATTURE, payload: fattura.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const newFattura = (fattura) => {
  return async () => {
    try {
      const token = localStorage.getItem("token");

      const query = new URLSearchParams({
        idCliente: fattura.idCliente,
        data: fattura.data,
        numero: fattura.numero,
        importo: fattura.importo,
        stato: fattura.stato,
      }).toString();

      await axios.post(
        `/api/fatture?${query}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
};

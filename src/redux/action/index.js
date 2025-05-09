import axios from "axios";

export const LOGIN = "LOGIN";
export const GET_CLIENTI = "GET_CLIENTI";
export const REGISTER = "REGISTER";
export const SET_CLIENTE = "SET_CLIENTE";
export const GET_CLIENTE = "GET_CLIENTE";
export const GET_FATTURE = "GET_FATTURE";
export const GET_FATTURA = "GET_FATTURA";

export const login = (credentials) => async (dispatch) => {
  try {
    const res = await axios.post("/api/auth/login", credentials);
    const { token, username, roles } = res.data;

    dispatch({
      type: LOGIN,
      payload: { token, username, roles },
    });

    localStorage.setItem("token", token);

    return { success: true };
  } catch (error) {
    console.error("Login error:", error);
    return { success: false };
  }
};

export const register = (formData, role1 = "ROLE_USER", role2 = "") => {
  return async (dispatch) => {
    try {
      const res = await axios.post("/api/auth/register", formData, {
        params: {
          role: role1,
          role2: role2 || role1,
        },
      });
      dispatch({ type: REGISTER });
      return res;
    } catch (error) {
      console.error("Errore nella registrazione:", error);
      throw error;
    }
  };
};

export const fetchClienti = (page = 0, size = 10, sortBy = "id", direction = "asc") => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      let clienti = await axios.get(
        `/api/clienti/sorted?page=${page}&size=${size}&sortBy=${sortBy}&direction=${direction}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

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

      return await axios.post(`/api/clienti?${query}`, body, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

export const updateClient = (client, id) => {
  return async () => {
    try {
      const token = localStorage.getItem("token");

      const body = {
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
        logoAziendale: client.logoAziendale || "",
      };

      return await axios.put(`/api/clienti/${id}`, body, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

export const deleteCliente = (id) => {
  return async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`/api/clienti/${id}`, {
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

      dispatch({ type: GET_FATTURA, payload: fattura.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const newFattura = (fattura) => {
  return async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        `/api/fatture/clienti/${fattura.idCliente}`,
        {
          data: fattura.data,
          importo: fattura.importo,
          numero: fattura.numero,
          stato: fattura.stato,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (error) {
      console.log("Errore creazione fattura:", error.response?.data || error.message);
    }
  };
};

export const updateFattura = (fattura, id) => {
  return async () => {
    try {
      const token = localStorage.getItem("token");

      return await axios.put(
        `/api/fatture/${id}`,
        {
          data: fattura.data,
          importo: fattura.importo,
          numero: fattura.numero,
          stato: fattura.stato,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

export const uploadLogoAziendale = (clienteId, file) => {
  return async () => {
    try {
      const token = localStorage.getItem("token");

      const formData = new FormData();
      formData.append("file", file);
      formData.append("id", clienteId);

      await fetch(`/api/clienti/${clienteId}/logoaziendale`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      console.log("Logo caricato con successo.");
    } catch (error) {
      console.error("Errore durante l'upload del logo:", error);
      throw error;
    }
  };
};

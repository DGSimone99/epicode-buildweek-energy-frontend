import axios from "axios";

export const LOGIN = "LOGIN";
export const GET_CLIENTI = "GET_CLIENTI";
export const REGISTER = "REGISTER";

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

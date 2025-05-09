import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import LoginPage from "./components/LoginPage";
import ClientiList from "./components/ClientiList";
import ClienteDetails from "./components/ClienteDetails";
import FormFatture from "./components/FormFatture";
import FattureList from "./components/FattureList";
import FormClienti from "./components/FormClienti";
import RegisterPage from "./components/RegisterPage";
import HomePage from "./components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/clienti" element={<ClientiList />} />
        <Route path="/clienti/new" element={<FormClienti />} />
        <Route path="/cliente/:id" element={<ClienteDetails />} />
        <Route path="/clienti/:id/nuova-fattura" element={<FormFatture />} />
        <Route path="/fatture" element={<FattureList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

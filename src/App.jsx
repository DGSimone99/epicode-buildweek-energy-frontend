import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import LoginPage from "./components/LoginPage";
import ClientiList from "./components/ClientiList";
import ClienteDetails from "./components/ClienteDetails";
import FormFatture from "./components/FormFatture";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/clienti" element={<ClientiList />} />
        <Route path="/cliente/:id" element={<ClienteDetails />} />
        <Route path="/fatture" element={<FormFatture />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

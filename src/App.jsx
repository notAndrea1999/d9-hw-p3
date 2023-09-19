import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Preferiti from "./components/Preferiti";
import { useSelector } from "react-redux";

function App() {
  const hasError = useSelector((state) => state.jobs.hasError);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:company" element={<CompanySearchResults />} />
        <Route path="/preferiti" element={<Preferiti />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import "./styles.css";
import FormPage from "./pages/FormPage/FormPage";
import LandingPage from "./pages/LandingPage/LandingPage";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={`/`} element={<LandingPage />} />
        <Route path={`/plans/:planType`} element={<FormPage />} />
      </Routes>
    </div>
  );
}

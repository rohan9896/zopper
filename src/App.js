import { Routes, Route } from "react-router-dom";
import ZopperPlanCard from "./components/ZopperPlanCard/ZopperPlanCard";
import "./styles.css";
import RewardsBanner from "./components/RewardsBanner/RewardsBanner";
import FormPage from "./pages/FormPage/FormPage"

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <>
            <RewardsBanner />
            <ZopperPlanCard />
          </>
        } />
      </Routes>
      <Route path={`/plans/:planName`} element={
        <>
          <FormPage />
        </>
      } />
    </div>
  );
}

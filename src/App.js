import HeadingComponent from "./components/HeadingComponent/HeadingComponent";
import ZopperPlanCard from "./components/ZopperPlanCard/ZopperPlanCard";
import FormComponent from "./components/FormComponent/FormComponent";
import "./styles.css";
import underlineimg1 from "./assets/underlineimg1.png";
import underlineimg2 from "./assets/underlineimg2.png";

export default function App() {
  return (
    <div className="App">
      {/* <HeadingComponent text="Basic ZRP Plan" img={underlineimg2} /> */}
      <ZopperPlanCard />
      <FormComponent />
    </div>
  );
}

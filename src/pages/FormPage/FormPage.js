import React from "react";
import "./FormPage.css";
import underlineimg2 from "../../assets/underlineimg2.png";
import HeadingComponent from "../../components/HeadingComponent/HeadingComponent";
import FormComponent from "../../components/FormComponent/FormComponent";
import {usePlanName} from "../../customHooks/getPlanName"

function FormPage() {

    const planname = usePlanName();

  return (
    <div className="FormPage">
      <HeadingComponent text={`${planname} ZRP Plan`} img={underlineimg2} alignment="start" />
      <FormComponent />
    </div>
  );
}

export default FormPage;

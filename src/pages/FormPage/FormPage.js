import React from "react";
import "./FormPage.css"
import underlineimg1 from "../../assets/underlineimg1.png";
import underlineimg2 from "../../assets/underlineimg2.png";
import HeadingComponent from "../../components/HeadingComponent/HeadingComponent";
import FormComponent from "../../components/FormComponent/FormComponent";

function FormPage() {
  return (
    <div className="FormPage">
        <HeadingComponent text="Basic ZRP Plan" img={underlineimg2} />
        <FormComponent />
    </div>
  );
}

export default FormPage;

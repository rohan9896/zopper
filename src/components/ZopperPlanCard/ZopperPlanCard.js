import React from "react";
import "./ZopperPlanCard.css"
import { Box, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import HeadingComponent from "../HeadingComponent/HeadingComponent";
import underlineimg1 from "../../assets/underlineimg1.png"

function ZopperPlanCard() {
  const cardProperties = {
    cardColor: "#60A5FA",
    heading: "basic",
    price: 249,
    numberOfCoupons: 5
  };

  const navigate = useNavigate();

  return (
    <div>
      <div className="ZopperPlanCard__Heading">
        <HeadingComponent text="Zopper Plans" img={underlineimg1} alignment="center" />
      </div>
        <Button onClick={() => navigate(`/plans/basic`)}>Basic</Button>
        <Button onClick={() => navigate(`/plans/standard`)}>Standard</Button>
        <Button onClick={() => navigate(`/plans/premium`)}>Premium</Button>
    </div>
  );
}

export default ZopperPlanCard;

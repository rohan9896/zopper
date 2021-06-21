import React from "react";
import { v4 as uuid } from "uuid";
import "./ZopperPlanCardGrid.css";
import clickastroImg from "../../assets/clickastro.png";
import zee5Img from "../../assets/ZEE5.png";
import ZopperPlanCard from "../ZopperPlanCard/ZopperPlanCard";

const cardsDetails = [
  {
    id: uuid(),
    cardColor: "#47c8fc",
    heading: "Basic",
    price: 249,
    numberOfCoupons: "",
    images: [],
    offerDesciption: "Including Group Personal Accident Policy"
  },
  {
    id: uuid(),
    cardColor: "#feb72c",
    heading: "Standard",
    price: 499,
    numberOfCoupons: 5,
    images: [clickastroImg],
    offerDesciption:
      "Including Group Personal Accident Policy, Group Terms Life"
  },
  {
    id: uuid(),
    cardColor: "#83c9be",
    heading: "Premium",
    price: 999,
    numberOfCoupons: 10,
    images: [clickastroImg, zee5Img],
    offerDesciption:
      "Including Group Personal Accident Policy, Group Terms Life & Hospicash"
  }
];

function ZopperPlanCardGrid() {
  return (
    <div className="ZopperPlanCardGrid">
      {cardsDetails.map((card) => {
        return (
          <div key={card.id} className="ZopperPlanCardGrid__Card">
            <ZopperPlanCard cardProperties={card} />
          </div>
        );
      })}
    </div>
  );
}

export default ZopperPlanCardGrid;

import React from "react";
import { v4 as uuid } from "uuid";
import "./ZopperPlanCard.css";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function ZopperPlanCard({ cardProperties }) {
  const navigate = useNavigate();

  return (
    <div
      style={{ borderColor: cardProperties.cardColor }}
      className="ZopperPlanCard"
    >
      <div className="ZopperPlanCard__HeadingContainer">
        <div
          style={{ backgroundColor: cardProperties.cardColor }}
          className="ZopperPlanCard__Heading"
        >
          {cardProperties.heading}
        </div>
      </div>
      <div className="ZopperPlanCard__PriceAndCoupon">
        <span
          style={{ color: cardProperties.cardColor }}
          className="ZopperPlanCard__Price"
        >
          ₹ {cardProperties.price}
        </span>
        &nbsp; +{" "}
        {cardProperties.numberOfCoupons
          ? cardProperties.numberOfCoupons + "X"
          : ""}{" "}
        coupons
      </div>
      <hr />
      <div className="ZopperPlanCard__Images">
        {cardProperties.images.length > 0 ? (
          cardProperties.images.map((image) => {
            return <img key={uuid()} alt="offerImage" src={image} />;
          })
        ) : (
          <div className="ZopperPlanCard__Images__NoImage"></div>
        )}
      </div>
      <p className="ZopperPlanCard__offerDescription">
        {cardProperties.offerDesciption}
      </p>
      <div className="ZopperPlanCard__buyNowBtn">
        <Button
          onClick={() =>
            navigate(`/plans/${cardProperties.heading.toLowerCase()}`)
          }
          variant="outline"
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
}

export default ZopperPlanCard;

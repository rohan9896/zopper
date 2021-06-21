import React from "react";
import "./RewardsBanner.css";
import { Box } from "@chakra-ui/react";
import TextImage from "../../assets/REWARDS_PLATFORM.png";
import HeroImage from "../../assets/HeroImage.png";

function RewardsBanner() {
  return (
    <div className="RewardsBanner">
      <div className="RewardsBanner_ImageContainer">
        <img alt="landingPage_heading" src={TextImage} />
      </div>
      <div className="RewardsBanner_ImageContainer">
        <img alt="landingPage_hero" src={HeroImage} />
      </div>
    </div>
  );
}

export default RewardsBanner;

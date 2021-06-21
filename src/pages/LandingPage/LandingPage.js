import React from "react";
import "./LandingPage.css";
import RewardsBanner from "../../components/RewardsBanner/RewardsBanner";
import HeadingComponent from "../../components/HeadingComponent/HeadingComponent";
import underlineimg1 from "../../assets/underlineimg1.png";
import ZopperPlanCardGrid from "../../components/ZopperPlanCardGrid/ZopperPlanCardGrid";

function LandingPage() {
  return (
    <>
      <RewardsBanner />
      <div className="LandingPage__Card__Heading">
        <HeadingComponent
          text="Zopper Plans"
          img={underlineimg1}
          alignment="center"
        />
      </div>
      <ZopperPlanCardGrid />
    </>
  );
}

export default LandingPage;

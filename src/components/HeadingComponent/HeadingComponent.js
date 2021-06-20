import React from "react";
import { Text } from "@chakra-ui/react";
import "./HeadingComponent.css";

function HeadingComponent({ text, img, alignment }) {
  return (
    <div style={{textAlign: alignment}} className="HeadingComponent">
      <Text className="HeadingComponent__Text">{text}</Text>
      <img className="HeadingComponent__Img" alt="underline-img" src={img} />
    </div>
  );
}

export default HeadingComponent;

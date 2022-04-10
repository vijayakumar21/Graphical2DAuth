import React, { useState } from "react";
import Swatches, { SwatchesPicker } from "react-color";
import "./SwatchColor.css";
const SwatchColor = (props) => {
  const [color, setColor] = useState("#fff");
  return (
    <SwatchesPicker
      
      onChangeComplete={(color) => {
        setColor(color.hex);
        // alert(color.hex);
        props.change(color.hex);
      }}
      height="12rem"
      width="11.2rem"
      border="0.1rem"
    />
  );
};
export default SwatchColor;

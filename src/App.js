import React, { useState } from "react";
import SwatchColor from "./Components/SwatchColor/SwatchColor";
import Button from "@mui/material/Button";
import Segments from "./Components/Segments/Segments";
import TextField from "@mui/material/TextField";
import Login from "./Pages/Login/Login";
// import "./styles.css";
const App = (props) => {
  const [numberOfSlice, setSlice] = useState(7);
  const [numberText, setText] = useState("0");
  const [color, setColor] = useState("#aef");
  const [colorArr, setColorArr] = useState([]);
  const onChangeText = (e) => {
    const val = e.target.value;
    setText(val);
  };

  const onPress = () => {
    setSlice(parseInt(numberText));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "2rem"
      }}
    >

          <Login colorArr={colorArr} setColorArr={setColorArr}  />
     
    </div>
  );
};
export default App;

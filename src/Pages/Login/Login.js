import React, { useState } from "react";
import { Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Segments from "../../Components/Segments/Segments";
import SwatchColor from "../../Components/SwatchColor/SwatchColor";
const Login = (props) => {
  const [numberOfSlice, setSlice] = useState(1);
  const [colorArr, setColorArr] = useState([]);
  const [numberText, setText] = useState("0");
  const [color, setColor] = useState("#fff");
  const onChangeText = (e) => {
    const val = e.target.value;
    setText(val);
  };
  const onPress = () => {
    setSlice(parseInt(numberText));
  };

  const reset=()=>{
    setSlice(1);
    setText("1");
    setSlice(1);
    setColorArr([]);
  }
  const paperStyle = {
    padding: "20px",
    height: "200hv",
    width: "",
    overflow: "visible"
  };
  return (
    <div>
        <Paper elevation={10} style={paperStyle} align="center">
            <h2>Sign In</h2>
          <TextField
            style={{ margin: "5px" }}
            id="outlined-basic"
            label="User Name"
            variant="outlined"
          />

          <div style={{ flexDirection: "row" }}>
            <TextField
              style={{ margin: "5px" }}
              onChange={onChangeText}
              value={numberText}
              placeholder={numberText}
              keyboardType="numeric"
              id="outlined-basic"
              label="Number of Segments"
              variant="outlined"
            />
            <Button
              style={{ margin: "15px" }}
              onClick={onPress}
              variant="contained"
            >
              Choose
            </Button>
            <div style={{ margin: "20px" }}>
              <SwatchColor style={{ innerWidth: "25px" }} change={setColor} />
            </div>
            <Segments number={numberOfSlice} color={color} colorArr={colorArr} setColorArr={setColorArr} />
            <Button style={{ margin: "15px" }} variant="containedSecondary" onClick={reset}>
              Reset
            </Button>
            <Button style={{ margin: "15px" }} variant="contained">
              Submit
            </Button>
            <p>Not registered? <a href="/signup">Create an account</a></p>
          </div>
        </Paper>
    </div>
  );
};
export default Login;

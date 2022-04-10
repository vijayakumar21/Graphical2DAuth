import React, { useState } from "react";
import { Grid, Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Segments from "../../Components/Segments/Segments";
import SwatchColor from "../../Components/SwatchColor/SwatchColor";
import { Link } from "react-router-dom";
const SignUp = (props) => {
  const [numberOfSlice, setSlice] = useState(1);
  const [colorArr, setColorArr] = useState([]);
  const onChangeText = (e) => {
    const val = e.target.value;
    setText(val);
  };
  const onPress = () => {
    setSlice(parseInt(numberText));
  };
  const [numberText, setText] = useState("0");
  const [color, setColor] = useState("#fff");
  const paperStyle = {
    padding: "20px",
    height: "200hv",
    width: "",
    overflow: "visible"
  };
  const reset = () => {
    setSlice(1);
    setText("1");
    setColor("#fff")
    setColorArr([]);
  };
  return (
    <div style={{ marginTop: "3rem" }}>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Button
            style={{ margin: "5px", padding: "0px" }}
            component={Link}
            to="/signup"
            variant="contained"
          >
            ←
          </Button>
          <div align="center">
            <Grid style={{ margin: "30px" }} align="center">
              <h2>Sign Up</h2>
            </Grid>

            <div style={{ flexDirection: "row" }}>
              <TextField
                style={{ margin: "5px" }}
                onChange={onChangeText}
                value={numberText}
                // placeholder={numberText}
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
              <Segments
                number={numberOfSlice}
                color={color}
                colorArr={colorArr}
                setColorArr={setColorArr}
              />
              <Button
                style={{ margin: "15px" }}
                variant="containedSecondary"
                onClick={reset}
              >
                Reset
              </Button>
              <Button style={{ margin: "15px" }} variant="contained">
                Submit
              </Button>
            </div>
          </div>
        </Paper>
      </Grid>
    </div>
  );
};
export default SignUp;

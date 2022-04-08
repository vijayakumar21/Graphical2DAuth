import React, { useState } from "react";
import { Grid, Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Segments from "../../Components/Segments/Segments";
import SwatchColor from "../../Components/SwatchColor/SwatchColor";
const SignUp = (props) => {
  const [numberOfSlice, setSlice] = useState(1);
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
  return (
    <div style={{ marginTop: "3rem" }}>
      <Grid>
        <Paper elevation={10} style={paperStyle} align="center">
          <Grid style={{ margin: "30px" }} align="center">
            <h2>Sign Up</h2>
          </Grid>

          <TextField
            style={{ margin: "5px" }}
            id="outlined-basic"
            label="User Name"
            variant="outlined"
          />
          {//date of birth
          }
          <TextField
            style={{ margin: "5px" }}
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
          />

          <div style={{ flexDirection: "row" }}>
            <TextField
              style={{ margin: "5px" }}
              onChange={onChangeText}
              // value={numberText}
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
            <Segments number={numberOfSlice} color={color} />
            <Button style={{ margin: "15px" }} variant="contained">
              Submit
            </Button>
          </div>
        </Paper>
      </Grid>
    </div>
  );
};
export default SignUp;

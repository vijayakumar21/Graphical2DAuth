import React, { useState } from "react";
import { Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoadingButton from '@mui/lab/LoadingButton';
import Segments from "../../Components/Segments/Segments";
import Link from "@mui/material/Link";
import { Link as LinkPath } from "react-router-dom";

import SwatchColor from "../../Components/SwatchColor/SwatchColor";
const Login = (props) => {
  const [numberOfSlice, setSlice] = useState(1);
  const [colorArr, setColorArr] = useState([]);
  const [numberText, setText] = useState("0");
  const [color, setColor] = useState("#fff");
  const [loading, setLoading] = React.useState(false);
  const onChangeText = (e) => {
    const val = e.target.value;
    setText(val);
  };
  const onPress = () => {
    setSlice(parseInt(numberText));
  };

  const reset = () => {
    setSlice(1);
    setText("1");
    setSlice(1);
    setColorArr([]);
  };
  const paperStyle = {
    padding: "20px",
    height: "200hv",
    width: "",
    overflow: "visible"
  };
  const handleSubmit=(e)=>{
    setLoading(true);
  }

  return (
    <div>
      <Paper elevation={10} style={paperStyle} align="center">
        <h2>Sign In</h2>
        <form onSubmit= {handleSubmit}>
          <TextField
            style={{ margin: "5px" }}
            id="outlined-basic"
            label="Email ID"
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
            
            <LoadingButton
          onClick={handleSubmit}
          loading={loading}
          loadingPosition="end"
          variant="contained"
        >
          Submit{"  "}
        </LoadingButton>

            <p>
              Not registered?{" "}
              <Link component={LinkPath} to="/signUp" variant="body2">
                Create an account{" "}
              </Link>
            </p>
          </div>
        </form>
      </Paper>
    </div>
  );
};
export default Login;

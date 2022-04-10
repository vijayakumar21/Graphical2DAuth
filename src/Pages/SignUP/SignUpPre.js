import React, { useState } from "react";
import { Grid, Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FadeIn from "react-fade-in";
import SignUp from "./SignUp";
import Link from "@mui/material/Link";
import { Link as LinkPath } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Segments from "../../Components/Segments/Segments";
// import SwatchColor from "../../Components/SwatchColor/SwatchColor";
const SignUpPre = (props) => {
  // const [numberOfSlice, setSlice] = useState(1);
  // const onChangeText = (e) => {
  //   const val = e.target.value;
  //   setText(val);
  // };
  // const onPress = () => {
  //   setSlice(parseInt(numberText));
  // };
  // const [numberText, setText] = useState("0");
  // const [color, setColor] = useState("#fff");
  const paperStyle = {
    padding: "20px",
    height: "200hv",
    width: "",
    overflow: "visible"
  };

  const nextPath = (path) => {};
  return (
    <div style={{ marginTop: "3rem" }}>
      <Grid>
        <Paper elevation={10} style={paperStyle} align="center">
          <Grid style={{ margin: "30px" }} align="center">
            <h2>Sign Up</h2>
          </Grid>
          <div>
            <TextField
              style={{ margin: "5px" }}
              id="outlined-basic"
              label="First Name"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              style={{ margin: "5px" }}
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              style={{ margin: "5px" }}
              id="outlined-basic"
              label="Email id"
              type="email"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              style={{ margin: "5px" }}
              id="outlined-basic"
              label="Phone Number"
              type="tel"
              variant="outlined"
            />
          </div>

          <div>
            <Button
              style={{ margin: "15px" }}
              variant="contained"
              component={LinkPath}
              to="/signUp/next"
            >
              Next
            </Button>
            <p>
              Already have an account?{" "}
              <Link component={LinkPath} to="/login" variant="body2">
                Sign In
              </Link>
            </p>
          </div>
        </Paper>
      </Grid>
    </div>
  );
};
export default SignUpPre;

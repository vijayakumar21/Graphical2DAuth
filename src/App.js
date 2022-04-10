import React, { useState } from "react";
import SwatchColor from "./Components/SwatchColor/SwatchColor";
import Button from "@mui/material/Button";
import Segments from "./Components/Segments/Segments";
import TextField from "@mui/material/TextField";
import Login from "./Pages/Login/Login";
import SignUpPre from "./Pages/SignUP/SignUpPre";
import SignUp from "./Pages/SignUP/SignUp";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FadeIn from "react-fade-in";
// import "./styles.css";
const App = (props) => {
  const [colorArr, setColorArr] = useState([]);

  return (
    <FadeIn>
      <Router>
        <main>
          <Switch>
            <Route path="/signup" exact>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "2rem"
                }}
              >
                <SignUpPre />
              </div>
            </Route>
            <Route path="/" exact>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "2rem"
                }}
              >
                <Login />
              </div>
            </Route>

            <Route path="/signup/next" exact>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "2rem"
                }}
              >
                <SignUp />
              </div>
            </Route>

            <Route path="/login" exact>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "2rem"
                }}
              >
                <Login colorArr={colorArr} setColorArr={setColorArr} />
              </div>
            </Route>
          </Switch>
        </main>
      </Router>
    </FadeIn>
  );
};
export default App;

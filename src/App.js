import React, { useState } from "react";
import SwatchColor from "./Components/SwatchColor/SwatchColor";
import Button from "@mui/material/Button";
import Segments from "./Components/Segments/Segments";
import TextField from "@mui/material/TextField";
import Login from "./Pages/Login/Login";
import SignUpPre from "./Pages/SignUP/SignUpPre";
import SignUp from "./Pages/SignUP/SignUp";
import Navigator from './Pages/SignUP/Navigator';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FadeIn from "react-fade-in";
// import "./styles.css";
const App = (props) => {

  const [name,setName]=useState("");
  const [address,setAddress]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");

  return (
    <FadeIn>
      <Router>
        <main>
          <Switch>
            <Route path="/signup" exact>
            <FadeIn>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "2rem"
                }}
              >
                <SignUpPre
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                address={address}
                setAddress={setAddress}
                phone={phone}
                setPhone={setPhone}
                />
              </div>
              </FadeIn>
            </Route>
            <Route path="/" exact>
            <FadeIn>
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
              </FadeIn>
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
                <SignUp 
                  name={name}
                  address={address}
                  email={email}
                  phone={phone}
                />
              </div>
            </Route>

            <Route path="/login" exact>
            <FadeIn>
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
              </FadeIn>
            </Route>
          </Switch>
        </main>
      </Router>
    </FadeIn>
  );
};
export default App;

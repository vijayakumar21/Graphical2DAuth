import React, { useState } from "react";
import { Grid, Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { Link as LinkPath} from "react-router-dom";
import { Snackbar,Alert  } from "@mui/material";
import isEmail from 'validator/lib/isEmail';
import isInt from 'validator/lib/isInt'
import { useHistory } from "react-router-dom";

const SignUpPre = (props) => {

  const history= useHistory();
  const [message,setMessage]=useState("");
  const [open,setOpen]=useState(false);
  const [severity,setSeverity]=useState("success");
  const [emailError,setEmailError]=useState(false)
  const [nameError,setNameError]=useState(false)
  const [phoneError,setPhoneError]=useState(false)
  const [addressError,setAddressError]=useState(false)

  const paperStyle = {
    padding: "20px",
    height: "200hv",
    width: "",
    overflow: "visible"
  };
  const handleName= (e) => {
    props.setName(e.target.value);

    if(props.name.length<3)
       setNameError(true);
    else
       setNameError(false);
   
  };

  const handleAddress = (e) => {
    props.setAddress(e.target.value);

    if(props.address.length<7)
      setAddressError(true);
    else
       setAddressError(false);
    
  };
  const handlePhone = (e) => {
    props.setPhone(e.target.value);
    if(isInt(props.phone) && props.phone.length==9)
      setPhoneError(false);
    else
       setPhoneError(true);
    
  };
  const handleEmail = (e) => {

    props.setEmail(e.target.value);

    if(isEmail(props.email))
      setEmailError(false);
    else
      setEmailError(true);
    
  };

  const handleClose = () => {
    setOpen(false)
  };

  const onNext= () => {

    if(emailError || nameError || addressError || phoneError ||
       props.name==="" || props.email==="" || props.phone==="" || props.address===""
      )
    {
      if(props.name==="") setNameError(true);
      if(props.address==="") setAddressError(true);
      if(props.phone==="") setPhoneError(true);
      if(props.email==="") setEmailError(true);
      setMessage("Enter proper user details");
      setSeverity("error")
      setOpen(true);
      return
    }
    else
    {
      history.push("/signup/next");
    }
  };

  const onSignIn=()=>{
    props.setAddress(""); setAddressError(false);
    props.setName("");   setNameError(false);
    props.setEmail("");   setEmailError(false);
    props.setPhone("");   setPhoneError(false);
  }

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
              onChange={handleName}
              value={props.name}
              placeholder={props.name}
              id="outlined-basic"
              label="Name"
              variant="outlined"
              error={nameError}
            />
          </div>
          <div>
            <TextField
              style={{ margin: "5px" }}
              id="outlined-basic"
              label="Address"
              variant="outlined"
              on
              onChange={handleAddress}
              value={props.address}
              placeholder={props.address}
              error={addressError}
            />
          </div>
          <div>
            <TextField
              style={{ margin: "5px" }}
              id="outlined-basic"
              label="Email ID"
              type="email"
              variant="outlined"
              onChange={handleEmail}
              value={props.email}
              placeholder={props.email}
              error={emailError}
            />
          </div>
          <div>
            <TextField
              style={{ margin: "5px" }}
              id="outlined-basic"
              label="Phone Number"
              type="tel"
              variant="outlined"
              onChange={handlePhone}
              value={props.phone}
              placeholder={props.phone}
              error={phoneError}
              
            />
          </div>

          <div>
            <Button
              style={{ margin: "15px" }}
              variant="contained"
              // component={LinkPath}
              onClick={onNext}
            >
              Next
            </Button>
            <p>
              Already have an account?{" "}
              <Link component={LinkPath} to="/login" onClick={onSignIn} variant="body2">
                Sign In
              </Link>
            </p>
          </div>
        </Paper>
      </Grid>
      <Snackbar
      autoHideDuration={4000}
        anchorOrigin={{ vertical:'top', horizontal:'center' }}
        open={open}
        onClose={handleClose}
        key={"signUp"}
        severity={severity}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};
export default SignUpPre;

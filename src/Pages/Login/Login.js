import React, { useState ,useEffect} from "react";
import { Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoadingButton from '@mui/lab/LoadingButton';
import Segments from "../../Components/Segments/Segments";
import { Snackbar,Alert  } from "@mui/material";
import Link from "@mui/material/Link";
import isEmail from 'validator/lib/isEmail';
import { Link as LinkPath } from "react-router-dom";


import SwatchColor from "../../Components/SwatchColor/SwatchColor";
const Login = (props) => {
  const [numberOfSlice, setSlice] = useState(1);
  const [colorArr, setColorArr] = useState([]);
  const [numberText, setText] = useState("0");
  const [color, setColor] = useState("#fff");
  const [loading, setLoading] = React.useState(false);
  const [open,setOpen]=useState(false);
  const [message,setMessage]=useState("");
  const [severity,setSeverity]=useState("success");
  const [email,setEmail]=useState("");
  const [emailError,setEmailError]=useState(false)
  const [pass,setPass]=useState("")

  const onChangeEmail=(e)=>{
    const mail=e.target.value;
    if(isEmail(mail))
      setEmailError(false);
    else
      setEmailError(true);
    setEmail(mail);
  }

  const onChangeText = (e) => {
    const val = e.target.value;
    setText(val);
  };
  const onPress = () => {
    if(numberText<5 || numberText>15)
    {
      setMessage("Enter values in range 5 to 15");
      setSeverity("error")
      setOpen(true);
    }
    else
    setSlice(parseInt(numberText));
  };

  const reset = () => {
    setSlice(1);
    setText("1");
    setSlice(1);
    setColorArr([]);
    setPass("");
  };
  const paperStyle = {
    padding: "20px",
    height: "200hv",
    width: "",
    overflow: "visible"
  };
  const handleSubmit=(e)=>{
    if(emailError|| email===""  && (numberText<5 || numberText>15))
    {
      setMessage("Enter valid Email ID and password");
      setSeverity("error");
      setOpen(true);
    }
    else if(emailError || email==="" )
    {
      setMessage("Enter a valid Email ID");
      setSeverity("error");
      setOpen(true);
    }
    else if((numberText<5 || numberText>15))
    {
      setMessage("Enter a valid password");
      setSeverity("error");
      setOpen(true);
    }
    else
    {
      
      setLoading(true);
      
      const requestOptions = {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' ,'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Credentials': 'true'
      },
        body:JSON.stringify({email:email,segments:numberText,password:pass })
    };
      fetch("http://localhost:4000/signin",requestOptions)
    .then(res=>{
      console.log(res);
      return res.json()
    })
    .then(data=>{
      setLoading(false);
      setMessage(data.message);
      if(message!="User authenticated")
      {
        setSeverity("error");
        setSeverity("error");
        setOpen(true);
      }
      else
      {
        setSeverity("success");
        setSeverity("success");
        setOpen(true);
      }
    }); 
    }
    
  }

  const handleClick = ()  => {
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false)
  };

  

  return (
    <div>
      <Paper elevation={10} style={paperStyle} align="center">
        <h2>Sign In</h2>
        <form onSubmit= {handleSubmit}>
          <TextField
            style={{ margin: "5px" }}
            onChange={onChangeEmail}
            error={emailError}
            value= {email}
            placeholder={email}
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
              pass={pass}
              setPass={setPass}
              setMessage={setMessage}
              setOpen={setOpen}
              setSeverity={setSeverity}
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
      <Snackbar
      autoHideDuration={4000}
        anchorOrigin={{ vertical:'top', horizontal:'center' }}
        open={open}
        onClose={handleClose}
        key={"signIn"}
        severity={severity}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};
export default Login;

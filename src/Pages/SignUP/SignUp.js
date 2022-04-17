import React, { useState } from "react";
import { Grid, Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/material/Button";
import Segments from "../../Components/Segments/Segments";
import SwatchColor from "../../Components/SwatchColor/SwatchColor";
import { Snackbar,Alert  } from "@mui/material";
import { Link ,useHistory} from "react-router-dom";
const SignUp = (props) => {
  const [numberOfSlice, setSlice] = useState(1);
  const [colorArr, setColorArr] = useState([]);
  const [message,setMessage]=useState("");
  const [open,setOpen]=useState(false);
  const [severity,setSeverity]=useState("success");
  const [loading, setLoading] = React.useState(false);
  const [pass,setPass]=React.useState("");
  const history=useHistory();
  const handleClose = () => {
    setOpen(false)
  };
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
    setPass("");
  };

  const onSubmit=(e)=>{

    if(numberText<5 || numberText>15)
    {
      setMessage("Enter values in range 5 to 15");
      setSeverity("error")
      setOpen(true);
    }
    else if(colorArr.length<numberText)
    {
      setMessage("Fill the all segments with color");
      setSeverity("error")
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
        body:JSON.stringify({email:props.email,segments:numberText,password:pass,name:props.name,phone:props.phone,address:props.address })
    };
      fetch("http://localhost:4000/signup",requestOptions)
    .then(res=>{
      console.log(res);
      return res.json()
    })
    .then(data=>{
      setLoading(false);
      setMessage(data.message);
      if(data.message!="Success")
      setSeverity("error");
       else
      {
      setSeverity("success");
      setMessage("Registered Sucessfully");
      
       }
       setOpen(true);
    })

   
      
      
      
      
    }
  }

  if(props.name==="" || props.email==="" || props.phone==="" || props.address==="")
   history.push('/signup');


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
                pass={pass}
                setPass={setPass}
              />
              <Button
                style={{ margin: "15px" }}
                variant="containedSecondary"
                onClick={reset}
              >
                Reset
              </Button>
              <LoadingButton style={{ margin: "15px" }} 
                variant="contained"
                loading={loading}
                onClick={onSubmit}
              >
                Submit
              </LoadingButton>
            </div>
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
export default SignUp;

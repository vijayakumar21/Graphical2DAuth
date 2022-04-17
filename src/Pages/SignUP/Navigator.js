import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SignUp from './SignUp';
import SignUpPre from './SignUpPre';

const Navigator=(props)=>{
    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }

    return (
        <div>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
    <Tab label="User Details" {...a11yProps(0)} />
    <Tab label="Set Password" {...a11yProps(1)} />
  </Tabs>
</Box>
<TabPanel value={value} index={0}>
  <SignUpPre/>
</TabPanel>
<TabPanel value={value} index={1}>
  <SignUp/>
</TabPanel>
<TabPanel value={value} index={2}>
  Item Three
</TabPanel>
</div>
);
}

export default Navigator;
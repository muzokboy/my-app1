import React from 'react'
import {Link }from 'react-router-dom'
import { Typography, Box, Grid, Container } from '@mui/material/'
import { Area, AreaChart, linearGradient, ResponsiveContainer, PieChart, Pie, BarChart, Bar, Tooltip, Legend, CartesianGrid, XAxis, YAxis } from 'recharts'
// import { Bar } from 'chart.js'
import Barr from '../BarChart'
import Linee from '../LineGraphy'
import Piee from '../PieChartt'
import Pie2 from '../PieChart2'

import Radarr from '../RadarChart'
import Polarr from '../PolarChart'


import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import Badge from '@mui/material/Badge';
import StorageIcon from '@mui/icons-material/Storage';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SdStorageIcon from '@mui/icons-material/SdStorage';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const StyledBadge = styled(Badge)(({ theme }) => ({
  
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));
  
  const drawerWidth = 240
export default (props) => {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
      
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
      
        setState({ ...state, [anchor]: open });
      };
      
      const [selectedIndex, setSelectedIndex] = React.useState(1);
    
      const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
      };
    
      const { window } = props;
      const [mobileOpen, setMobileOpen] = React.useState(false);
    
      const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
      };
   
    return (
        <>
            <Grid  container>
                <Grid xs={12} sm={12} md={2} lg={2} sx={{}}>
       
               </Grid>
                <Grid xs={12} sm={12} md={10} lg={10} sx={{marginTop:"70px"}}>

                    <Grid pl='2%' xs={12} lg={12}>
                        <Grid pl="2%" pb='3%' pt='1%' sx={{ width: '100%', height: '30px', backgroundColor: '#F2F2F2', display: 'flex', flexDirection: 'row' }}>
                            <Typography ><Link style={{ textDecoration: 'none' }} to='#'>Admin Panel/</Link> </Typography>
                            <Typography ml='1%'>  <Link to="#" style={{ textDecoration: 'none' }}> Data  Visualization /</Link>  </Typography>
                            <Typography ml='1%'>Charts</Typography>


                        </Grid>
                        <Grid mt='2%'>
                            <Typography sx={{ fontSize: '26px' }}>
                                Data Visualization
                            </Typography>
                        </Grid>

                        <Grid>
                            <Typography>
                                Credits goes to  chartjs.org
                            </Typography>
                        </Grid>

                        <Grid mt='1%' pl="2%" pb='3%' pt='1%' sx={{ border: '1px solid #BCE8F1', width: '100%', height: '30px', backgroundColor: '#D9EDF7' }}>
                            <Typography >Pie Chart & Doughnut Chart </Typography>


                        </Grid>



                    </Grid>


                    <Grid   container xs={12} sm={12} md={12} lg={12} >

                        <Grid xs={12} sm={4} md={3} lg={3}>
                            <Piee />
                        </Grid>

                        <Grid xs={12} sm={4} md={3} lg={3} >
                            <Pie2 />
                        </Grid>



                        <Grid xs={12} sm={4} md={3} lg={3}>
                            <Radarr />
                        </Grid>


                        <Grid xs={12} sm={4} md={3} lg={3}>
                            <Polarr />
                        </Grid>


                    </Grid>

                    <Grid mt='3%' container xs={12} sm={12} md={12} lg={12} >
                        <Grid pl='2%' xs={12} sm={6} md={6} lg={6}>
                            <Linee />

                        </Grid>
                        <Grid pl='2%' xs={12} sm={6} md={6} lg={6}>
                            <Barr />

                        </Grid>


                    </Grid>

                </Grid>
            </Grid>       
        </>
    )
}



        // <Grid container>
        //     <Grid xs={12} sm={2} md={2} lg={2} sx={{ width: '100%', height: '600px', border: '1px solid black' }}>
               


        //     </Grid>

        //     <Grid container xs={10} md={10} sm={10} lg={10}>

        //         <Grid xs={12} sm={12} md={5} lg={6} sx={{ width: '100%', border: '1px solid black' }}>

        //         <Piee/>
        //         </Grid>

        //         <Grid xs={12} sm={12} md={5} lg={6} sx={{ display:'flex',flexDirection:'row', width: '100%', border: '1px solid black' }} >
        //       <Radarr/>
        //       <Polarr/>

        //         </Grid>


        //         <Grid xs={12} sm={12} md={5} lg={6} sx={{ width: '100%', border: '1px solid black' }}>
        //       <Linee/>
        //         </Grid>

        //         <Grid pb='-2%' xs={12} sm={12} md={5} lg={6} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', border: '1px solid black' }} >
        //             <Barr/>

        //         </Grid>

        //     </Grid>

        // </Grid>






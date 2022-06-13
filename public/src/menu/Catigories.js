import React from 'react'

const Catigories = ({categiries, filterItems}) => {
    return (
        <div className='btn-container'>
            {categiries.map((category,index) =>{
                return(
                    <button type='button' className='filter-btn' key={index} onClick={()=> filterItems(category)}>{category}</button>
                )
            })}
        </div>
    )
}

export default Catigories














// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';

// const menu = [
//     {
//         id: 1,
//         title: "Fujifilm X100T 16 MP Digital Camera (Silver)",
//         categiries: "men",
//         price: 520.00,
//         img:
//             "https://preview.colorlib.com/theme/coloshop/images/xproduct_1.png.pagespeed.ic.DvPBG5vxas.webp",
//         desc: "Lorem ipsum color imet",
//     },
//     {
//         id: 2,
//         title: "Samsung CF591 Series Curved 27-Inch FHD Monitor",
//         categiries: "woman",
//         price: 610.00,
//         img:
//             "https://preview.colorlib.com/theme/coloshop/images/xproduct_2.png.pagespeed.ic.5v5cwO3kBP.webp",
//         desc: "Lorem ipsum color imet",
//     },
//     {
//         id: 3,
//         title: "Blue Yeti USB Microphone Blackout Edition",
//         categiries: "woman",
//         price: 120.00,
//         img:
//             "	https://preview.colorlib.com/theme/coloshop/images/xproduct_3.png.pagespeed.ic.jCfub0gA7s.webp",
//         desc: "Lorem ipsum color imet",
//     },
//     {
//         id: 4,
//         title: "DYMO LabelWriter 450 Turbo Thermal Label Printer",
//         categiries: "accessories",
//         price: 410.00,
//         img:
//             "https://preview.colorlib.com/theme/coloshop/images/xproduct_4.png.pagespeed.ic.WBUe9pni_n.webp",
//         desc: "Lorem ipsum color imet",
//     },
//     {
//         id: 5,
//         title: "Pryma Headphones, Rose Gold & Grey",
//         categiries: "woman",
//         price: 180.00,
//         img:
//             "https://preview.colorlib.com/theme/coloshop/images/xproduct_5.png.pagespeed.ic.qi-sJ2HPdI.webp",
//         desc: "Lorem ipsum color imet",
//     },
//     {
//         id: 6,
//         title: "Fujifilm X100T 16 MP Digital Camera (Silver)",
//         categiries: "accessories",
//         price: 520.00 ,
//         img:
//             "https://preview.colorlib.com/theme/coloshop/images/xproduct_6.png.pagespeed.ic.zZ9BU77Jfy.webp",
//         desc: "Lorem ipsum color imet",
//     },
//     {
//         id: 7,
//         title: "Samsung CF591 Series Curved 27-Inch FHD Monitor",
//         categiries: "men",
//         price: 610.00,
//         img:
//             "https://preview.colorlib.com/theme/coloshop/images/xproduct_7.png.pagespeed.ic.9nA45gs3KX.webp",
//         desc: "Lorem ipsum color imet",
//     },
//     {
//         id: 8,
//         title: "Blue Yeti USB Microphone Blackout Edition",
//         categiries: "accessories  ",
//         price: 120.00,
//         img:
//             "https://preview.colorlib.com/theme/coloshop/images/xproduct_8.png.pagespeed.ic.zX5uOkWPYV.webp",
//         desc: "Lorem ipsum color imet",
//     },
//     {
//         id: 9,
//         title: "DYMO LabelWriter 450 Turbo Thermal Label Printer",
//         categiries: "men",
//         price: 410.00,
//         img:
//             "https://preview.colorlib.com/theme/coloshop/images/xproduct_9.png.pagespeed.ic.I5FJ0ewNHX.webp",
//         desc: "Lorem ipsum color imet",
//     },
//     {
//         id: 10,
//         title: "Pryma Headphones, Rose Gold & Grey",
//         categiries: "men",
//         price: 180.00,
//         img:
//             "https://preview.colorlib.com/theme/coloshop/images/xproduct_10.png.pagespeed.ic.69mYA3FDZH.webp",
//         desc: "Lorem ipsum color imet",
//     },
// ];



// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

// export default function BasicGrid() {
//     return (
//         <Box sx={{ flexGrow: 1 }}>
//             <Grid container spacing={2}>
//                 {menu.map((menu, id) => (
//                     <Grid item xs={12} sm={3} md={2.4} key={id}>
//                         <Item>
//                             <Typography>
//                                 <img src={menu.img} />
//                                 {menu.title}
//                             </Typography>
//                             <Typography color='red'>${menu.price}.00 </Typography>
//                         </Item>
//                     </Grid>
//                 ))}
//             </Grid>
//         </Box>
//     );
// }






// import * as React from 'react';
// import PropTypes from 'prop-types';
// import { useTheme } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import Grid from "@mui/material/Grid";
// import { styled } from "@mui/material/styles";
// import Paper from "@mui/material/Paper";





// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
// }));


// const menu = [
//     {
//         id: 1,
//         title: "Fujifilm X100T 16 MP Digital Camera (Silver)",
//         categiries: "men",
//         price: '',
//         img:
//             "https://preview.colorlib.com/theme/coloshop/images/xproduct_1.png.pagespeed.ic.DvPBG5vxas.webp",
//         desc: "Lorem ipsum color imet",
//     },
//     {
//         id: 2,
//         title: "Samsung CF591 Series Curved 27-Inch FHD Monitor",
//         categiries: "woman",
//         price: '',
//         img:
//             "https://preview.colorlib.com/theme/coloshop/images/xproduct_2.png.pagespeed.ic.5v5cwO3kBP.webp",
//         desc: "Lorem ipsum color imet",
//     },
//     {
//         id: 3,
//         title: "Blue Yeti USB Microphone Blackout Edition",
//         categiries: "woman",
//         price: '',
//         img:
//             "	https://preview.colorlib.com/theme/coloshop/images/xproduct_3.png.pagespeed.ic.jCfub0gA7s.webp",
//         desc: "Lorem ipsum color imet",
//     },
//     {
//         id: 4,
//         title: "DYMO LabelWriter 450 Turbo Thermal Label Printer",
//         categiries: "accessories",
//         price: '',
//         img:
//             "https://preview.colorlib.com/theme/coloshop/images/xproduct_4.png.pagespeed.ic.WBUe9pni_n.webp",
//         desc: "Lorem ipsum color imet",
//     },
//     {
//         id: 5,
//         title: "Pryma Headphones, Rose Gold & Grey",
//         categiries: "woman",
//         price: '',
//         img:
//             "https://preview.colorlib.com/theme/coloshop/images/xproduct_5.png.pagespeed.ic.qi-sJ2HPdI.webp",
//         desc: "Lorem ipsum color imet",
//     },
//     {
//         id: 6,
//         title: "Fujifilm X100T 16 MP Digital Camera (Silver)",
//         categiries: "accessories",
//         price: '',
//         img:
//             "https://preview.colorlib.com/theme/coloshop/images/xproduct_6.png.pagespeed.ic.zZ9BU77Jfy.webp",
//         desc: "Lorem ipsum color imet",
//     },
//     {
//         id: 7,
//         title: "Samsung CF591 Series Curved 27-Inch FHD Monitor",
//         categiries: "men",
//         price: '',
//         img:
//             "https://preview.colorlib.com/theme/coloshop/images/xproduct_7.png.pagespeed.ic.9nA45gs3KX.webp",
//         desc: "Lorem ipsum color imet",
//     },
//     {
//         id: 8,
//         title: "Blue Yeti USB Microphone Blackout Edition",
//         categiries: "accessories  ",
//         price: '',
//         img:
//             "https://preview.colorlib.com/theme/coloshop/images/xproduct_8.png.pagespeed.ic.zX5uOkWPYV.webp",
//         desc: "Lorem ipsum color imet",
//     },
//     {
//         id: 9,
//         title: "DYMO LabelWriter 450 Turbo Thermal Label Printer",
//         categiries: "men",
//         price: '',
//         img:
//             "https://preview.colorlib.com/theme/coloshop/images/xproduct_9.png.pagespeed.ic.I5FJ0ewNHX.webp",
//         desc: "Lorem ipsum color imet",
//     },
//     {
//         id: 10,
//         title: "Pryma Headphones, Rose Gold & Grey",
//         categiries: "men",
//         price: '',
//         img:
//             "https://preview.colorlib.com/theme/coloshop/images/xproduct_10.png.pagespeed.ic.69mYA3FDZH.webp",
//         desc: "Lorem ipsum color imet",
//     },
// ];


// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <Typography
//       component="div"
//       role="tabpanel"
//       hidden={value !== index}
//       id={`action-tabpanel-${index}`}
//       aria-labelledby={`action-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
//     </Typography>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `action-tab-${index}`,
//     'aria-controls': `action-tabpanel-${index}`,
//   };
// }


// export default function FloatingActionButtonZoom() {
//   const theme = useTheme();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const handleChangeIndex = (index) => {
//     setValue(index);
//   };

//   const transitionDuration = {
//     enter: theme.transitions.duration.enteringScreen,
//     exit: theme.transitions.duration.leavingScreen,
//   };


//   return (
//     <Box
//       sx={{
//       }}
//     >
//       <AppBar position="static" color="default">
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           indicatorColor="primary"
//           textColor="primary"
//           variant="fullWidth"
//           aria-label="action tabs example"
//         >
//           <Tab label="All" {...a11yProps(0)} />
//           <Tab label="Woman" {...a11yProps(1)} />
//           <Tab label="Accessories" {...a11yProps(2)} />
//           <Tab label="Men" {...a11yProps(3)} />
//         </Tabs>
//       </AppBar>

//         <TabPanel value={value} index={0} dir={theme.direction}>
//                 <Grid container spacing={2}>
//                    {menu.map((menu, id) => {
//                        <Grid item xs={12} sm={3} md={2.4} key={id}>
//                            <Item>
//                                 <Typography>
//                                     <img src={menu.img} alt='photo' />
//                                     {menu.title}
//                                 </Typography>
//                            </Item>
//                         </Grid>
//                     })}
//                 </Grid>


//         </TabPanel>
//         <TabPanel value={value} index={1} dir={theme.direction}>
//           Woman
//         </TabPanel>
//         <TabPanel value={value} index={2} dir={theme.direction}>
//           Accessories
//         </TabPanel>
//         <TabPanel value={value} index={3} dir={theme.direction}>
//           Men
//         </TabPanel>
//     </Box>
//   );
// }





// import * as React from 'react';
// import PropTypes from 'prop-types';
// import { useTheme } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import { green } from '@mui/material/colors';
// import { styled } from "@mui/material/styles";
// import Paper from "@mui/material/Paper";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";

// function TabPanel(props) {
//     const { children, value, index, ...other } = props;

//     return (
//         <Typography
//             component="div"
//             role="tabpanel"
//             hidden={value !== index}
//             id={`action-tabpanel-${index}`}
//             aria-labelledby={`action-tab-${index}`}
//             {...other}
//         >
//             {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
//         </Typography>
//     );
// }


// const menu = [
//     {
//         id: 1,
//         title: "Fujifilm X100T 16 MP Digital Camera (Silver)",
//         categiries: "men",
//         price: '',
//         img:
//             "https://preview.colorlib.com/theme/coloshop/images/xproduct_1.png.pagespeed.ic.DvPBG5vxas.webp",
//         desc: "Lorem ipsum color imet",
//     },
//     {
//         id: 2,
//         title: "Samsung CF591 Series Curved 27-Inch FHD Monitor",
//         categiries: "woman",
//         price: '',
//         img:
//             "https://preview.colorlib.com/theme/coloshop/images/xproduct_2.png.pagespeed.ic.5v5cwO3kBP.webp",
//         desc: "Lorem ipsum color imet",
//     },
//     {
//         id: 3,
//         title: "Blue Yeti USB Microphone Blackout Edition",
//         categiries: "woman",
//         price: '',
//         img:
//             "	https://preview.colorlib.com/theme/coloshop/images/xproduct_3.png.pagespeed.ic.jCfub0gA7s.webp",
//         desc: "Lorem ipsum color imet",
//     },
//     {
//         id: 4,
//         title: "DYMO LabelWriter 450 Turbo Thermal Label Printer",
//         categiries: "accessories",
//         price: '',
//         img:
//             "https://preview.colorlib.com/theme/coloshop/images/xproduct_4.png.pagespeed.ic.WBUe9pni_n.webp",
//         desc: "Lorem ipsum color imet",
//     },
//     {
//         id: 5,
//         title: "Pryma Headphones, Rose Gold & Grey",
//         categiries: "woman",
//         price: '',
//         img:
//             "https://preview.colorlib.com/theme/coloshop/images/xproduct_5.png.pagespeed.ic.qi-sJ2HPdI.webp",
//         desc: "Lorem ipsum color imet",
//     },
//     {
//         id: 6,
//         title: "Fujifilm X100T 16 MP Digital Camera (Silver)",
//         categiries: "accessories",
//         price: '',
//         img:
//             "https://preview.colorlib.com/theme/coloshop/images/xproduct_6.png.pagespeed.ic.zZ9BU77Jfy.webp",
//         desc: "Lorem ipsum color imet",
//     },
//     {
//         id: 7,
//         title: "Samsung CF591 Series Curved 27-Inch FHD Monitor",
//         categiries: "men",
//         price: '',
//         img:
//             "https://preview.colorlib.com/theme/coloshop/images/xproduct_7.png.pagespeed.ic.9nA45gs3KX.webp",
//         desc: "Lorem ipsum color imet",
//     },
//     {
//         id: 8,
//         title: "Blue Yeti USB Microphone Blackout Edition",
//         categiries: "accessories  ",
//         price: '',
//         img:
//             "https://preview.colorlib.com/theme/coloshop/images/xproduct_8.png.pagespeed.ic.zX5uOkWPYV.webp",
//         desc: "Lorem ipsum color imet",
//     },
//     {
//         id: 9,
//         title: "DYMO LabelWriter 450 Turbo Thermal Label Printer",
//         categiries: "men",
//         price: '',
//         img:
//             "https://preview.colorlib.com/theme/coloshop/images/xproduct_9.png.pagespeed.ic.I5FJ0ewNHX.webp",
//         desc: "Lorem ipsum color imet",
//     },
//     {
//         id: 10,
//         title: "Pryma Headphones, Rose Gold & Grey",
//         categiries: "men",
//         price: '',
//         img:
//             "https://preview.colorlib.com/theme/coloshop/images/xproduct_10.png.pagespeed.ic.69mYA3FDZH.webp",
//         desc: "Lorem ipsum color imet",
//     },
// ];



// TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.number.isRequired,
//     value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//     return {
//         id: `action-tab-${index}`,
//         'aria-controls': `action-tabpanel-${index}`,
//     };
// }


// const fabGreenStyle = {
//     color: 'common.white',
//     bgcolor: green[500],
//     '&:hover': {
//         bgcolor: green[600],
//     },
// };


// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
// }));



// export default function FloatingActionButtonZoom() {
//     const theme = useTheme();
//     const [value, setValue] = React.useState(0);

//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };

//     const handleChangeIndex = (index) => {
//         setValue(index);
//     };

//     const transitionDuration = {
//         enter: theme.transitions.duration.enteringScreen,
//         exit: theme.transitions.duration.leavingScreen,
//     };

//     return (

//         <Box sx={{ flexGrow: 1, pt: 5, pb: 5 }}>
//             <Container>
//                 <Grid container spacing={2}>
//                     {menu.map((menu, id) => (
//                         <Grid item xs={12} sm={3} md={2.4} key={id}>
//                             <Item>
// <Box
//     sx={{
//         bgcolor: 'background.paper',
//     }}
// >
//     <AppBar position="static" color="default">
//         <Tabs
//             value={value}
//             onChange={handleChange}
//             indicatorColor="primary"
//             textColor="primary"
//             variant="fullWidth"
//             aria-label="action tabs example"
//         >
//             <Tab label="Item One" {...a11yProps(0)} />
//             <Tab label="Item Two" {...a11yProps(1)} />
//             <Tab label="Item Three" {...a11yProps(2)} />
//         </Tabs>
//     </AppBar>
//     <TabPanel value={value} index={0} dir={theme.direction}>
//         Item One
//   </TabPanel>
//     <TabPanel value={value} index={1} dir={theme.direction}>
//         Item Two
//   </TabPanel>
//     <TabPanel value={value} index={2} dir={theme.direction}>
//         Item Three
//   </TabPanel>

// </Box>
//                                 <Typography><img src={menu.img} alt={menu.title} /> </Typography>
//                                 <Typography>{menu.title} </Typography>
//                             </Item>
//                         </Grid>
//                     ))}
//                 </Grid>
//             </Container>
//         </Box>
//     );
// }






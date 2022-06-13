
import React from 'react'

const Menu = ({ items }) => {
    return (
        <div style={{width:'100%',height:'90vh',backgroundColor:'honeydew',paddingTop:'5%'}}>
            {items.map((menuItem) => {
                const {id, title, desc, img, price} = menuItem;
                return(
                    <article key={id} style={{display: 'flex'}}>
                        <img src={img} alt={title}/>
                        <div>
                            <header>
                                <h4>{title}</h4>
                                <h4>{price}</h4>
                            </header>
                            <p>{desc}</p>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}

export default Menu









// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";


// const menu = [
//   {
//     id: 1,
//     title: "Fujifilm X100T 16 MP Digital Camera (Silver)",
//     categiries: "men",
//     price: 15.99,
//     img:
//       "https://preview.colorlib.com/theme/coloshop/images/xproduct_1.png.pagespeed.ic.DvPBG5vxas.webp",
//     desc: "Lorem ipsum color imet",
//   },
//   {
//     id: 2,
//     title: "Samsung CF591 Series Curved 27-Inch FHD Monitor",
//     categiries: "woman",
//     price: 15.99,
//     img:
//       "https://preview.colorlib.com/theme/coloshop/images/xproduct_2.png.pagespeed.ic.5v5cwO3kBP.webp",
//     desc: "Lorem ipsum color imet",
//   },
//   {
//     id: 3,
//     title: "Blue Yeti USB Microphone Blackout Edition",
//     categiries: "woman",
//     price: 15.99,
//     img:
//       "	https://preview.colorlib.com/theme/coloshop/images/xproduct_3.png.pagespeed.ic.jCfub0gA7s.webp",
//     desc: "Lorem ipsum color imet",
//   },
//   {
//     id: 4,
//     title: "DYMO LabelWriter 450 Turbo Thermal Label Printer",
//     categiries: "accessories",
//     price: 15.99,
//     img:
//       "https://preview.colorlib.com/theme/coloshop/images/xproduct_4.png.pagespeed.ic.WBUe9pni_n.webp",
//     desc: "Lorem ipsum color imet",
//   },
//   {
//     id: 5,
//     title: "Pryma Headphones, Rose Gold & Grey",
//     categiries: "woman",
//     price: 15.99,
//     img:
//       "https://preview.colorlib.com/theme/coloshop/images/xproduct_5.png.pagespeed.ic.qi-sJ2HPdI.webp",
//     desc: "Lorem ipsum color imet",
//   },
//   {
//     id: 6,
//     title: "Fujifilm X100T 16 MP Digital Camera (Silver)",
//     categiries: "accessories",
//     price: 15.99,
//     img:
//       "https://preview.colorlib.com/theme/coloshop/images/xproduct_6.png.pagespeed.ic.zZ9BU77Jfy.webp",
//     desc: "Lorem ipsum color imet",
//   },
//   {
//     id: 7,
//     title: "Samsung CF591 Series Curved 27-Inch FHD Monitor",
//     categiries: "men",
//     price: 15.99,
//     img:
//       "https://preview.colorlib.com/theme/coloshop/images/xproduct_7.png.pagespeed.ic.9nA45gs3KX.webp",
//     desc: "Lorem ipsum color imet",
//   },
//   {
//     id: 8,
//     title: "Blue Yeti USB Microphone Blackout Edition",
//     categiries: "accessories  ",
//     price: 15.99,
//     img:
//       "https://preview.colorlib.com/theme/coloshop/images/xproduct_8.png.pagespeed.ic.zX5uOkWPYV.webp",
//     desc: "Lorem ipsum color imet",
//   },
//   {
//     id: 9,
//     title: "DYMO LabelWriter 450 Turbo Thermal Label Printer",
//     categiries: "men",
//     price: 15.99,
//     img:
//       "https://preview.colorlib.com/theme/coloshop/images/xproduct_9.png.pagespeed.ic.I5FJ0ewNHX.webp",
//     desc: "Lorem ipsum color imet",
//   },
//   {
//     id: 10,
//     title: "Pryma Headphones, Rose Gold & Grey",
//     categiries: "men",
//     price: 15.99,
//     img:
//       "https://preview.colorlib.com/theme/coloshop/images/xproduct_10.png.pagespeed.ic.69mYA3FDZH.webp",
//     desc: "Lorem ipsum color imet",
//   },
// ];

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

// export default function BasicGrid() {
//   return (
//     <Box sx={{ flexGrow: 1,pt:5,pb:5 }}>
//       <Container>
//         <Grid container spacing={2}>
//           {menu.map((menu, id) => (
//             <Grid item xs={12} sm={3} md={2.4} key={id}>
//               <Item>
//                   <Typography><img src={menu.img} alt={menu.title}/> </Typography>
//                   <Typography>{menu.title} </Typography>
//               </Item>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// }


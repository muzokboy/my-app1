// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// function FormRow() {
//   return (
//     <React.Fragment>
//       <Grid item xs={4}>
//         <Item><img src="/svg/1.jpg" alt=""/></Item>
//       </Grid>
//       <Grid item xs={4}>
//         <Item><img src="/svg/5.jpg" alt=""/></Item>
//       </Grid>
//       <Grid item xs={4}>
//         <Item>Item</Item>
//       </Grid>
//     </React.Fragment>
//   );
// }

// export default function NestedGrid() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={1}>
//         <Grid container item spacing={3}>
//           <FormRow />
//         </Grid>
//         <Grid container item spacing={3}>
//           <FormRow />
//         </Grid>
//         <Grid container item spacing={3}>
//           <FormRow />
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }




// import * as React from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import styled from 'styled-components'


// const Link = styled.a`
//   text-decoration: none;
// `;

// const List = styled.ul`
//   list-style: none;
// `;




// export default function SimpleAccordion() {
//   return (
//     <div>
//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1a-content"
//           id="panel1a-header"
//         >
//           <Typography>Accordion 1</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel2a-content"
//           id="panel2a-header"
//         >
//           <Typography>Accordion 2</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//           <div>
//                       <List>
//                         <li>
//                           <p>APPLICATIONS</p>
//                         </li>
//                         <li>
//                           <Link href='none'>Mobile App</Link>
//                         </li>
//                         <li>
//                           <Link href="none">Desktop App</Link>
//                         </li>
//                       </List>
//                       <List>
//                         <li><p>BUSINESS</p></li>
//                         <li><Link href="none">Multipurpose</Link></li>
//                         <li><Link href="none">Agancy</Link></li>
//                         <li><Link href="none">Press</Link></li>
//                         <li><Link href="none">Directory</Link></li>
//                         <li><Link href="none">Reantal</Link></li>
//                         <li><Link href="none">Real Estate</Link></li>
//                         <li><Link href="none">Classifieds</Link></li>
//                       </List>
//                       <List>
//                         <li><p>LEAD GENERATION</p></li>
//                         <li><Link href='none'>Lead Capture</Link></li>
//                       </List>
//                     </div>
//                     <div>
//                       <List>
//                         <li><p>PERSONAL</p></li>
//                         <li><Link href="none">Resume</Link></li>
//                         <li><Link href="none">Portfolio</Link></li>
//                       </List>
//                       <List>
//                         <li><p>HEADER STYLES</p></li>
//                         <li><Link href="one">Basic</Link></li>
//                         <li><Link href="none">Basic (Signup)</Link></li>
//                         <li><Link href="none">Graphics</Link></li>
//                         <li><Link href="none">Graphics (Sugnup)</Link></li>
//                         <li><Link href="none">Inner Page</Link></li>
//                         <li><Link href="none">Nav only</Link></li>
//                       </List>
//                     </div>
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion disabled>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel3a-content"
//           id="panel3a-header"
//         >
//           <Typography>Disabled Accordion</Typography>
//         </AccordionSummary>
//       </Accordion>
//     </div>
//   );
// }









import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App(){
  const notify = () => toast("Wow so easy!");

  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  );
}
export default App
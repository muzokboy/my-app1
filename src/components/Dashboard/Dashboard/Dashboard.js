import React from 'react';
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import { Stack,Box,Typography } from "@mui/material";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const Dashboard = () => {
  return (
    <>
             <Box role="presentation" onClick={handleClick}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="blue" href="/">
              Admin Panel
            </Link>
            <Link underline="hover" color="blue" href="/">
              DashBoard
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
            >
              Owerviev
            </Link>
            <Typography color="blue">Sign in form</Typography>
          </Breadcrumbs>
        </Box>
        <br />
        <Box> 
          <Typography variant="h6">Dashboard</Typography>
          <Typography>
            Dashboard is free admin template for everyone. Credits go to Chart
            JS, Bootstrap, and JQVMap. templatemo provides free website
            templates that can be used for any purpose. Morbi id nisi enim. Ut
            congue interdum pharetra facilisi. Aenean consectetur pellentesque
            mauris nec ornare. Nam tortor just, condimentum.
          </Typography>
          <Stack spacing={1} direction="row">
            <Button variant="contained">
              Home{" 42 "}
            </Button>
            <Button variant="contained">
              Profile{" 126 "}
            </Button>
            <Button variant="contained" >
              Messages{" 14 "}
            </Button>
          </Stack>
        </Box>
    </>
  );
}

export default Dashboard;

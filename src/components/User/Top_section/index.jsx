import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Badge from "@mui/material/Badge";
// import MailIcon from "@mui/icons-material/Mail";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
  boxShadow: "none",
  borderRadius: "0px",
}));

export default function AutoGrid() {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      {/*  */}
      <Grid container spacing={3}>
        {/*  */}
        <Grid container spacing={3}>
          <Grid item md={1.8}>
            <Item sx={{ fontSize: "26px", color: "black" }}>Manage Users</Item>
          </Grid>
        </Grid>
        {/*  */}
        <Grid container spacing={3}>
          <Grid item md="auto" sm="auto" sx="auto">
            <Item sx={{ fontSize: "15px", color: "black" }}>
              Here goes tables and users.
            </Item>
          </Grid>
        </Grid>
        {/*  */}
        <Grid item md="auto" sm="auto" sx="auto">
          <Item
            sx={{
              bgcolor: "#428BCA",
              color: "white",
              padding: "5px 5px 5px 17px",
              ":hover": {},
            }}
          >
            New Users
            <Badge
              sx={{ margin: "20px", padding: "0px 10px 0px 10px" }}
              badgeContent={42}
              color="primary"
            ></Badge>
          </Item>
        </Grid>
        {/*  */}
        <Grid item md="auto" sm="auto" sx="auto">
          <Item
            sx={{
              bgcolor: "white",
              color: "#428bca",
              padding: "5px 5px 5px 17px",
            }}
          >
            Profile
            <Badge
              sx={{ margin: "20px", padding: "0px 15px 0px 15px" }}
              badgeContent={126}
              color="primary"
            ></Badge>
          </Item>
        </Grid>
        {/*  */}
        <Grid item md="auto" sm="auto" sx="auto">
          <Item
            sx={{
              bgcolor: "white",
              color: "#428bca",
              padding: "5px 5px 5px 17px",
            }}
          >
            Messages
            <Badge
              sx={{ margin: "20px", padding: "0px 10px 0px 10px" }}
              badgeContent={14}
              color="primary"
            ></Badge>
          </Item>
        </Grid>
        {/*  */}
      </Grid>
      {/*  */}
    </Box>
  );
}

import "./index.css";
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import Dashboard from "./Dashboard/Dashboard";
import Counter from "./Counter/Counter";
import Chart from "./Chart/Chart";
import TabButton from "./TabButton/TabButton";
import Grid from "@mui/material/Grid"
const drawerWidth = 240;

export default (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

 

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
        <Grid container>
          <Grid item md={2}></Grid>
          <Grid item md={10}>
          <Toolbar />
          <Dashboard />
          <Counter />
          <Chart />
          <TabButton />
          </Grid>
          </Grid>
    </>
  );
};

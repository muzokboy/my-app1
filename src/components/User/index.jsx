import First from "./first_table/index";
import Second from "./second_table/index";
import Top from "./Top_section/index";
import Bottom from "./bottom_section/index";
import { Link } from "react-router-dom";
import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import Badge from "@mui/material/Badge";
import StorageIcon from "@mui/icons-material/Storage";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GroupIcon from "@mui/icons-material/Group";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SdStorageIcon from "@mui/icons-material/SdStorage";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const drawerWidth = 240;

export default (props) => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
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

  const drawer = (
    <div
      style={{ paddingTop: "15px", backgroundColor: "#EBEBEB", height: "100%" }}
    >
      <List>
        <ListItem>
          <ListItemIcon sx={{ fontSize: "15px", color: "black" }}>
            <input
              type="text"
              placeholder="Search..."
              style={{
                width: "150px",
                border: "1px solid #ccc",
                fontSize: "15px",
                height: "34px",
                paddingLeft: "10px",
              }}
            />
            <button
              style={{
                border: "1px solid #ccc",
                backgroundColor: "white",
                marginLeft: "5px",
              }}
            >
              Go
            </button>
          </ListItemIcon>
        </ListItem>
      </List>
      {/* {dashboard} */}
      <List className="SideBarItems">
        <ListItem>
          <HomeIcon sx={{ color: "black", fontSize: "18px" }} />
          <ListItemIcon sx={{ fontSize: "12px", color: "black" }}>
            <Link
              to="dashboard"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "12px",
              }}
            >
              {" "}
              DashBoard{" "}
            </Link>
          </ListItemIcon>
        </ListItem>
      </List>
      {/* Select  */}
      <List>
        <ListItem>
          {/* <HomeIcon sx={{ color: "black", fontSize: "18px"}} /> */}
          {/* <ListItemIcon sx={{ fontSize: "12px", color: "black" }}> */}
          <Accordion
            sx={{
              boxShadow: "none",
              background: "none",
              marginLeft: "-15px",
              width: "100%",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="SideBarItems"
            >
              <Typography sx={{ fontSize: "12px" }}>
                <SdStorageIcon sx={{ fontSize: "15px" }} /> Nested Menu
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {/* {["Aenean","Pellentesque","Congue","Intermadium","Facillisi"].map((val,id)=>{ */}
                <List
                  component="nav"
                  aria-label="secondary mailbox folder"
                  sx={{ width: "80%" }}
                >
                  <ListItemButton
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                    sx={{ fontSize: "12px", width: "130%" }}
                  >
                    Aenean
                    <ListItemText primary="" sx={{ fontSize: "12px" }} />
                  </ListItemButton>
                </List>
                <List
                  component="nav"
                  aria-label="secondary mailbox folder"
                  sx={{ width: "80%" }}
                >
                  <ListItemButton
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                    sx={{ fontSize: "12px", width: "130%" }}
                  >
                    Pellentesque
                    <ListItemText primary="" sx={{ fontSize: "12px" }} />
                  </ListItemButton>
                </List>
                <List
                  component="nav"
                  aria-label="secondary mailbox folder"
                  sx={{ width: "80%" }}
                >
                  <ListItemButton
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                    sx={{ fontSize: "12px", width: "130%" }}
                  >
                    Congue
                    <ListItemText primary="" sx={{ fontSize: "12px" }} />
                  </ListItemButton>
                </List>
                <List
                  component="nav"
                  aria-label="secondary mailbox folder"
                  sx={{ width: "80%" }}
                >
                  <ListItemButton
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                    sx={{ fontSize: "12px", width: "130%" }}
                  >
                    Intermadium
                    <ListItemText primary="" sx={{ fontSize: "12px" }} />
                  </ListItemButton>
                </List>
                <List
                  component="nav"
                  aria-label="secondary mailbox folder"
                  sx={{ width: "80%" }}
                >
                  <ListItemButton
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                    sx={{ fontSize: "12px", width: "130%" }}
                  >
                    Facillisi
                    <ListItemText primary="" sx={{ fontSize: "12px" }} />
                  </ListItemButton>
                </List>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </ListItem>
      </List>
      {/* Data  */}
      <List className="SideBarItems">
        <ListItem>
          <StorageIcon sx={{ color: "black", fontSize: "18px" }} />
          <ListItemIcon sx={{ fontSize: "15px", color: "black" }}>
            <Link
              to="/charts"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "12px",
              }}
            >
              {" "}
              Data Visualisation
            </Link>
            <IconButton aria-label="cart">
              <StyledBadge
                badgeContent={9}
                sx={{ marginTop: "-25px", marginLeft: "50px" }}
                color="secondary"
              >
                {/* <ShoppingCartIcon /> */}
              </StyledBadge>
            </IconButton>
          </ListItemIcon>
        </ListItem>
      </List>
      {/* Maps */}
      <List className="SideBarItems">
        <ListItem>
          <LocationOnIcon sx={{ color: "black", fontSize: "18px" }} />
          <ListItemIcon sx={{ fontSize: "15px", color: "black" }}>
            <Link
              to=""
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "12px",
              }}
            >
              {" "}
              Maps
            </Link>
            <IconButton aria-label="cart">
              <StyledBadge
                badgeContent={42}
                sx={{ marginTop: "-25px", marginLeft: "120px" }}
                color="secondary"
              ></StyledBadge>
            </IconButton>
          </ListItemIcon>
        </ListItem>
      </List>
      {/* Manager  */}
      <List className="SideBarItems">
        <ListItem>
          <GroupIcon sx={{ color: "black", fontSize: "18px" }} />
          <ListItemIcon sx={{ fontSize: "15px", color: "black" }}>
            <Link
              to=""
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "12px",
              }}
            >
              {" "}
              Manage Users
            </Link>
            <IconButton aria-label="cart">
              <StyledBadge
                badgeContent={"New"}
                sx={{ marginTop: "-25px", marginLeft: "70px" }}
                color="secondary"
              ></StyledBadge>
            </IconButton>
          </ListItemIcon>
        </ListItem>
      </List>
      {/* Perfoments  */}
      <List className="SideBarItems">
        <ListItem>
          <SettingsIcon sx={{ color: "black", fontSize: "18px" }} />
          <ListItemIcon sx={{ fontSize: "15px", color: "black" }}>
            <Link
              to="/inputs"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "12px",
              }}
            >
              Perfoments
            </Link>
            <IconButton aria-label="cart">
              {/* <StyledBadge badgeContent={"New"} sx={{marginTop:"-25px",marginLeft:"50px"}} color="secondary">
      </StyledBadge> */}
            </IconButton>
          </ListItemIcon>
        </ListItem>
      </List>
      {/* Sing Out */}
      <List className="SideBarItems">
        <ListItem>
          <LogoutIcon sx={{ color: "black", fontSize: "18px" }} />
          <ListItemIcon sx={{ fontSize: "15px", color: "black" }}>
            <Link
              to=""
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "12px",
              }}
            >
              Sign Out
            </Link>
            <IconButton aria-label="cart">
              {/* <StyledBadge badgeContent={"New"} sx={{marginTop:"-25px",marginLeft:"50px"}} color="secondary">
      </StyledBadge> */}
            </IconButton>
          </ListItemIcon>
        </ListItem>
      </List>
    </div>
  );
  return (
    <Box sx={{ display: { md: "flex", sm: "flex", xs: "block" } }}>
      <Grid container>
        <Grid xs={12} sm={12} md={2} lg={2} sx={{}}>
         
        </Grid>
        <Grid xs={12} sm={12} md={10} lg={10} sx={{}}>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: { sm: `calc(100% - ${drawerWidth}px)` },
            }}
          >
            <Toolbar />
            <div>
              <Top />
              <First />
              <Second />
              <Bottom />
            </div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

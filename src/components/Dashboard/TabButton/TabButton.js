import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material/";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
};

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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabButton() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Home" {...a11yProps(0)} />
              <Tab label="Profile" {...a11yProps(1)} />
              <Tab label="Messages" {...a11yProps(2)} />
              <Tab label="Settings" {...a11yProps(3)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label=" Suspendisse dapibus sodales"
              />
              <FormControlLabel
                control={<Checkbox />}
                label=" Proin mattis ex vitae
                "
              />
              <FormControlLabel
                control={<Checkbox />}
                label=" Aenean euismod dui vel
                "
              />
              <FormControlLabel
                control={<Checkbox />}
                label=" Vivamus dictum posuere odio
                "
              />
              <FormControlLabel
                control={<Checkbox />}
                label=" Morbi convallis sed nisi suscipit
                "
              />
            </FormGroup>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <List sx={style} component="nav" aria-label="mailbox folders">
              <ListItem button>
                <ListItemText
                  primary="Vivamus dictum posuere odio"
                  textAlign="right"
                />
                33
              </ListItem>
              <Divider />
              <ListItem button divider>
                <ListItemText
                  primary="Dapibus ac facilisis in"
                  textAlign="right"
                />
                9
              </ListItem>
              <ListItem button>
                <ListItemText
                  primary="Morbi convallis sed nisi suscipit"
                  textAlign="right"
                />
                0
              </ListItem>
              <Divider light />
              <ListItem button>
                <ListItemText
                  primary="Morbi convallis sed nisi suscipit"
                  textAlign="right"
                />
                14
              </ListItem>
              <Divider light />
              <ListItem button>
                <ListItemText primary="Vestibulum at eros" textAlign="right" />2
              </ListItem>
            </List>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <List >
              <ListItem
                button
                sx={{ backgroundColor: "#2196f3", color: "white", width: "100%" }}
              >
                <ListItemText
                  primary="Vivamus dictum posuere odio"
                />
              </ListItem>
              <Divider />
              <ListItem button divider>
                <ListItemText primary="Dapibus ac facilisis in" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Morbi convallis sed nisi suscipit" />
              </ListItem>
              <Divider light />
              <ListItem button>
                <ListItemText primary="Morbi convallis sed nisi suscipit" />
              </ListItem>
              <Divider light />
              <ListItem button>
                <ListItemText primary="Vestibulum at eros" />
              </ListItem>
            </List>
          </TabPanel>
          <TabPanel value={value} index={3}>
          <List >
              <ListItem
                button
                sx={{ width: "100%",backgroundColor:"#f3e5f5" }}
              >
                <ListItemText
                  primary="Vivamus dictum posuere odio"
                />
              </ListItem>
              <Divider />
              <ListItem button divider>
                <ListItemText primary="Dapibus ac facilisis in" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Morbi convallis sed nisi suscipit" />
              </ListItem>
              <Divider light />
              <ListItem button>
                <ListItemText primary="Morbi convallis sed nisi suscipit" />
              </ListItem>
              <Divider light />
              <ListItem button>
                <ListItemText primary="Vestibulum at eros" />
              </ListItem>
            </List>

          </TabPanel>
        </Box>
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12}>
      <div>
      <Accordion>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
            malesuada lacus ex, sit amet blandit leo lobortis eget.
            malesuada lacus ex, sit amet blandit leo lobortis eget.
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>

      </Accordion>
    </div>

      </Grid>
    </Grid>
  );
}

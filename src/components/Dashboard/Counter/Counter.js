import * as React from "react";
import Typography from "@mui/material/Typography";
import { Grid, Box, Stack } from "@mui/material";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";

// import { LinearProgress } from '@mui/material';
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20,
}));

export default function Counter() {
  const [open, setOpen] = React.useState(true);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Box sx={{ width: "100%" }}>
            <Collapse in={open}>
              <Alert
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}
              >
                Success! Maecenas non lorem sed elit molestie tincidunt.
              </Alert>
            </Collapse>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Collapse in={open}>
              <Alert
                severity="info"
                action={
                  <IconButton
                    aria-label="close"
                    //   color="inherit"
                    size="small"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}
              >
                Sed in molestie lectus. Curabitur non est neque. Maecenas id
                luctus ligula.
              </Alert>
            </Collapse>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Collapse in={open}>
              <Alert
                severity="warning"
                action={
                  <IconButton
                    aria-label="close"
                    size="small"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}
              >
                Vestibulum tincidunt libero urna, ut dignissim purus accumsan
                nec.
              </Alert>
            </Collapse>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Collapse in={open}>
              <Alert
                severity="error"
                action={
                  <IconButton
                    aria-label="close"
                    size="small"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}
              >
                Mauris dignissim ante eu arcu ultricies, at sodales orci
                aliquet.
              </Alert>
            </Collapse>
            <Button
              disabled={open}
              variant="outlined"
              onClick={() => {
                setOpen(true);
              }}
            >
              Re-open
            </Button>
          </Box>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Box>
            <Typography variant="h6">Latest Data</Typography>
            <Typography style={{ backgroundColor: "blue", color: "white" }}>
              Bootstrap and JQVMap. templatemo provides free website templates
              that can be used for any purpose. Morbi id nisi enim. Ut congue
              interdum pharetra facilisi. Aenean consectetur pellentesque mauris
              nec ornare. Nam tortor just, condimentum.
            </Typography>
            <Typography variant="h6">Order Data</Typography>
            <Typography>
              Bootstrap and JQVMap. templatemo provides free website templates
              that can be used for any purpose. Morbi id nisi enim. Ut congue
              interdum pharetra facilisi. Aenean consectetur pellentesque mauris
              nec ornare. Nam tortor just, condimentum.
            </Typography>
            <Stack spacing={0}>
                <Box direction="row"sx={{height: "10px" , width:"100%", display:'flex'}}>
              <BorderLinearProgress
                variant="indeterminate"
                color="success"

                value={100}
                sx={{width:'40%', }}
               
              />
              <BorderLinearProgress
                variant="determinate"
                color="secondary"
                value={100}
                sx={{width:'20%'}}
              />
              <BorderLinearProgress
                variant="determinate"
                color="error"
                value={100}
                sx={{width:'10%'}}
              />
              </Box>
            </Stack>
            <Stack spacing={0}>
            <BorderLinearProgress
               variant="indeterminate"
                color="primary"
                value={100}
                sx={{width:'50%',marginTop:"3%" }}
                
              />
            </Stack>

          </Box>
        </Grid>
      </Grid>
    </>
  );
}

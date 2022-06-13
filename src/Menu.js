import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography'



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Menu = ({ items }) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Container>
          <Grid container spacing={1}>
            {items.map((menuItem) => {
              const { id, title, img, desc, price } = menuItem;
              return(
              <Grid item xs={12} sm={3} md={2.4} key={id}>
                <Item>
                  <Typography ><img src={img} alt='photo' style={{marginLeft:0}} /></Typography>
                  <Typography> <a style={{color:'black'}} href="#">{title}</a> </Typography>
                  <Typography color='red' sx={{fontWeight:'bold'}}>${price}.00</Typography>
                </Item>
              </Grid>
              )
            })}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Menu;

import React from 'react';
import Sidebar from "../../components/Sidebar"
import { useRoutes } from 'react-router-dom';
import { routes } from '../../routes/routes';
import Grid from "@mui/material/Grid"
export default () => {
  const content = useRoutes(routes);
  return <>
  <Grid container>
<Grid item md={2}>
<Sidebar/>
</Grid>
  </Grid>
  {content}
  </>;
};

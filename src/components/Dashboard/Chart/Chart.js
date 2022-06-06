import * as React from 'react';

import "./Chart.scss";
import {
  
  XAxis,
//   YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area
} from "recharts";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const data = [
    {name: "January", Total:1200},
    {name: "February", Total:200},
    {name: "March", Total:1100},
    {name: "April", Total:100},
    {name: "May", Total:300},
    {name: "June", Total:1100},
    {name: "July", Total:1000},
];


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(FirstName,LastName,UserName) {
  return { FirstName,LastName,UserName };
}

const rows = [
  createData('John', 'Smith', '@js', ),
  createData('Bill', 'Jones', '@bj', ),
  createData('Murry', 'James', '@mj', ),
];



const Chart = () => {
  return (
    <>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item lg={6}md={6}sm={12}xs={12}>
  <div className="chart"sx={{marginBottom:"5%"}}>
        <div className="title">Data Visualization</div>
      <ResponsiveContainer width="95%" aspect={2 / 1}
      sx={{marginBottom:"5%"}}
      >
        <AreaChart
          data={data}
          margin={{ top: 1, right: 0, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="15%" stopColor="#8884d8" stopOpacity={0.3} />
              <stop offset="85%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="grey" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={0}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
      <Button variant="contained"color="primary"
      sx={{marginTop:"5%"}}
      >More Charts</Button>
    </div>


  </Grid>
  <Grid item lg={6}md={6}sm={12}xs={12}>
  <TableContainer component={Paper}
  >
      <Table sx={{ maxWidth: 700,marginTop:"10px" }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>FirstName</StyledTableCell>
            <StyledTableCell align="right">,LastName</StyledTableCell>
            <StyledTableCell align="right">UserName</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.FirstName}>
              <StyledTableCell component="th" scope="row">
                {row.FirstName}
              </StyledTableCell>
              <StyledTableCell align="right">{row.LastName}</StyledTableCell>
              <StyledTableCell align="right">{row.UserName}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Button variant="contained"sx={{marginTop:"5%",marginBottom:"5%"}}>See Tables</Button>

  </Grid>
</Grid>


    </>
  )
}

export default Chart

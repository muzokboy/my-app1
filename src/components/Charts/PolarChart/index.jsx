import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { Pie, ResponsiveContainer, PieChart } from 'recharts'

const data03 = [
  {
    "name": "Group A",
    "value": 2400
  },
  {
    "name": "Group B",
    "value": 4567
  },
  {
    "name": "Group C",
    "value": 1398
  },
  {
    "name": "Group D",
    "value": 9800
  },
  {
    "name": "Group E",
    "value": 3908
  },
  {
    "name": "Group F",
    "value": 4800
  }
];

export default () => {
  return (
    <>




      <Grid  sx={{display:'flex',flexDirection:'column',alignItems:'center'}}><ResponsiveContainer width='100%' aspect={1}>

        <PieChart >
          <Pie data={data03} dataKey="value" nameKey="name" cx="50%" innerRadius={40} outerRadius={70} fill="#82ca9d" label />
        </PieChart>
      </ResponsiveContainer>
      <Typography sx={{fontFamily:'arial black'}} mt='-15%'>Polar Area  Chart </Typography>
                    <Typography>Curabitur </Typography>
          
      </Grid>

    </>
  )
}





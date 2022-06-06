import React from 'react'
import Grid from '@mui/material/Grid'
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from 'recharts'
import { Typography } from '@mui/material';
const data = [
  {
    "subject": "Eating",
    "A": 120,
    "B": 110,
    "fullMark": 150
  },
  {
    "subject": "Drinking",
    "A": 98,
    "B": 130,
    "fullMark": 150
  },
  {
    "subject": "Sleeping",
    "A": 86,
    "B": 130,
    "fullMark": 150
  },
  {
    "subject": "Designing",
    "A": 99,
    "B": 100,
    "fullMark": 150
  },
  {
    "subject": "Coding",
    "A": 85,
    "B": 90,
    "fullMark": 150
  },
  {
    "subject": "Cycling",
    "A": 65,
    "B": 85,
    "fullMark": 150
  },
  {
    "subject": "Running",
    "A": 65,
    "B": 85,
    "fullMark": 150
  },



]
const data1 = {
  type: 'polarArea',

  data: {


  }
};


export default () => {
  return (
    <>
      <Grid sx={{ display:'flex',flexDirection:'column',alignItems:'center' }}>
        <ResponsiveContainer width='100%' aspect={1}>

          <RadarChart outerRadius={70} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>

        <Typography sx={{ fontFamily: 'arial black' }} mt='-15%'>Radar Chart </Typography>
        <Typography>Lorem sed </Typography>


      </Grid>


    </>
  )
}


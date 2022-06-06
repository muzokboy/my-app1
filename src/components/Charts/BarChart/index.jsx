import React from 'react'
import { Typography, Box, Grid, Container } from '@mui/material/'
import { Area, AreaChart, linearGradient, ResponsiveContainer, PieChart, Pie, BarChart, Bar, Tooltip, Legend, CartesianGrid, XAxis, YAxis } from 'recharts'



const data = [
    {
        "name": "January",
        "value": 33,
        "value1": 2
    },
    {
        "name": "February",
        "value": 63,
        "value1": 31
    },
    {
        "name": "March",
        "value": 99,
        "value1": 7
    },
    {
        "name": "April",
        "value": 63,
        "value1": 90
    },
    {
        "name": "May",
        "value": 87,
        "value1": 96
    },
    {
        "name": "June",
        "value": 14,
        "value1": 59
    },
    {
        "name": "July",
        "value": 13,
        "value1": 30
    }
]


export default () => {
    return (
       
          <Grid>
                <Box sx={{ border: '1px solid #428BCA' }}>
                <Box sx={{ width: '100%', height: '50px', backgroundColor: '#428BCA' }}><Typography ml='8%' sx={{ fontSize: '30px' }}>Bar Chart</Typography></Box>
                <ResponsiveContainer width='100%' aspect={2}>
                    <BarChart sx={{ marginRight: '5%' }} data={data} >
                        <CartesianGrid strokeDasharray="20 0" />
                        <XAxis dataKey="name" />
                        <YAxis type="number" />
                        <Tooltip />
                        <Bar dataKey="value" fill="#F8F8F8"  />
                        <Bar dataKey="value1" fill="#EAF1F5" />
                    </BarChart>
                </ResponsiveContainer>
            </Box>
        
          </Grid>
    )
}
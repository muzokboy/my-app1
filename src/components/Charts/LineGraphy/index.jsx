import React from 'react'
import { Typography, Box, Grid, Container } from '@mui/material/'
import { Area, AreaChart, linearGradient, ResponsiveContainer, PieChart, Pie, BarChart, Bar, Tooltip, Legend, CartesianGrid, XAxis, YAxis } from 'recharts'



const data = [
    {
        "name": "January ",
        "uv": 50,
        "pv": 40,
        "amt": 40
    },
    {
        "name": "February",
        "uv": 67,
        "pv": 19,
        "amt": 20
    },
    {
        "name": "March",
        "uv": 75,
        "pv": 86,
        "amt": 80
    },
    {
        "name": "April",
        "uv": 63,
        "pv": 54,
        "amt": 50
    },
    {
        "name": "May",
        "uv": 30,
        "pv": 90,
        "amt": 90
    },
    {
        "name": "June",
        "uv": 59,
        "pv": 79,
        "amt": 80
    },
    {
        "name": "July",
        "uv": 60,
        "pv": 44,
        "amt": 50
    }
]

export default () => {
    return (
           <Grid>
                <Box  pl='-2%' sx={{ width: '100%', height: '100%', border: '1px solid #DFF0D8' }}>
                <Box pl='11%' sx={{ width: '89%', backgroundColor: '#DFF0D8', height: '50px' }}><Typography sx={{ fontSize: '30px' }}>Line Chart</Typography></Box>
                <ResponsiveContainer width='100%' aspect={2} >
                    <AreaChart data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#F8F8F8" />
                                <stop offset="95%" stopColor="#F8F8F8" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#E4ECEF" stopOpacity={0.5} />
                                <stop offset="95%" stopColor="#E4ECEF" stopOpacity={0.5} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stroke="#DCDCDC" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey="pv" stroke="#97BBCD" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                </ResponsiveContainer>
            </Box>
           </Grid>
    )
}
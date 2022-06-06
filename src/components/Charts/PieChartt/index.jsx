import React from 'react'
import { Typography, Box, Grid, Container } from '@mui/material/'

import { Pie, PieChart, ResponsiveContainer } from 'recharts'

const data01 = [
   
    {
        "name": "Red",
        "value": 300
    },
    {
        "name": "Green",
        "value": 50
    },
   
    {
        "name": "Yellow",
        "value": 100
    }
     
    
   
];
export default () => {

    return (
        <>
         <Grid sx={{display:'flex',flexDirection:'column',alignItems:'center'}} >

         
                <ResponsiveContainer width='100%' aspect={1}>
                    <PieChart >
                        <Pie data={data01} dataKey="value" cx="50%" cy="50%" innerRadius={1} outerRadius={70} fill="#F7464A" />
                    </PieChart>

                </ResponsiveContainer>
                    <Typography sx={{fontFamily:'arial black'}} mt='-15%'>Pie Chart </Typography>
                    <Typography>Maecenas non </Typography>
          
        
              
            </Grid>
      </>
    )
}

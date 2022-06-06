import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { MapContainer,TileLayer,Polygon } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import {statesData} from './Data/Data'

const Item1 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));
const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "Left",
  color: theme.palette.text.secondary,
  background: "none",
  boxShadow: "none",
  color: "black",
}));

const center=[38.894739269323246, 69.7789894375783]
const center2=[39.3626348249154, -101.50383673073797]
const center3=[38.894739269323246, 69.7789894375783]
const center4=[53.52286119912086, 13.283871526451815]
const center5=[-25.45835613509192, 134.77415503601623]
const center6=[7.318729355288265, 24.026687113688762]
const center7=[52.62904336390109, -106.28784263506329]
const center8=[-11.394029651127715, -57.53581110637384]

export default  () => {
  return (
    <Box sx={{ width: "90%", marginLeft: "5%", marginTop: "3%" }}>
      <Item2 sx={{ color: "black", fontSize: "140%" }}>Maps</Item2>
      <Item2 sx={{ margin: "0px", paddingTop: "0px" }}>
        Credit goes to JQVMap
      </Item2>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ marginTop: "1%" }}
      >
        <Grid item xs={12} sm={6}>
          <Item1
            sx={{
              border: "1px solid #ddd",
              padding: "0px",
              borderRadius: "0px",
            }}
          >
            <Item2
              sx={{
                fontSize: "140%",
                borderBottom: "1px solid #ddd",
                margin: "0px",
                borderRadius: "0px",
                backgroundColor: "#f5f5f5",
              }}
            >
              World
            </Item2>
            <Item2>
                <MapContainer
                center={center}
                zoom={1.2}
                minZoom={1.2}
                maxZoom={5}
                style={{height:"70vh"}}
                >
                    <TileLayer
                    url="https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=pR8jxK2HRDMxHyU51xVk"
                    attribution=''
                    />
                    {
                        statesData.features.map((state)=>{
                            const coordinates=state.geometry.coordinates[0].map((item)=>[item[1],item[0]])

                            return(<Polygon
                            pathOptions={{
                                strokeWidth:"1px" ,
                                fillColor:"#006491",
                                fillOpacity:0.7,
                                weight:2,
                                opacity:1,
                                dashArray:3,
                                color:"white"
                            }}
                            positions={coordinates}
                            eventHandlers={{
                                mouseover: (e)=>{
                                    const layer = e.target;
                                    layer.setStyle({
                                        fillOpacity:0.7,
                                        weight:5,
                                        dashArray:"",
                                        color:"#006499",
                                        fillColor:"#509BBD"
                                    })
                                },
                                mouseout:(e)=>{
                                    const layer = e.target;
                                    layer.setStyle({
                                        fillOpacity:0.7,
                                        weight:2,
                                        dashArray:"3",
                                        color:"white",
                                        fillColor:"#006491"
                                    })    
                                }
                            }}
                            />)
                        })
                    }
                </MapContainer>
            </Item2>
          </Item1>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Item1
            sx={{
              border: "1px solid #ddd",
              padding: "0px",
              borderRadius: "0px",
            }}
          >
            <Item2
              sx={{
                fontSize: "140%",
                borderBottom: "1px solid #ddd",
                margin: "0px",
                borderRadius: "0px",
                backgroundColor: "#f5f5f5",
              }}
            >
              United States of America
            </Item2>
            <Item2>
            <MapContainer
                center={center2}
                zoom={4}
                minZoom={4}
                maxZoom={5}
                style={{width:"100%",height:"70vh"}}
                >
                    <TileLayer
                    url="https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=pR8jxK2HRDMxHyU51xVk"
                    attribution=''
                    />
                    {
                        statesData.features.map((state)=>{
                            const coordinates=state.geometry.coordinates[0].map((item)=>[item[1],item[0]])

                            return(<Polygon
                            pathOptions={{
                                strokeWidth:"1px" ,
                                fillColor:"#006491",
                                fillOpacity:0.7,
                                weight:2,
                                opacity:1,
                                dashArray:3,
                                color:"white"
                            }}
                            positions={coordinates}
                            eventHandlers={{
                                mouseover: (e)=>{
                                    const layer = e.target;
                                    layer.setStyle({
                                        fillOpacity:0.7,
                                        weight:5,
                                        dashArray:"",
                                        color:"#006499",
                                        fillColor:"#509BBD"
                                    })
                                },
                                mouseout:(e)=>{
                                    const layer = e.target;
                                    layer.setStyle({
                                        fillOpacity:0.7,
                                        weight:2,
                                        dashArray:"3",
                                        color:"white",
                                        fillColor:"#006491"
                                    })    
                                }
                            }}
                            />)
                        })
                    }
                </MapContainer>
            </Item2>
          </Item1>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Item1
            sx={{
              border: "1px solid #ddd",
              padding: "0px",
              borderRadius: "0px",
            }}
          >
            <Item2
              sx={{
                fontSize: "140%",
                borderBottom: "1px solid #ddd",
                margin: "0px",
                borderRadius: "0px",
                backgroundColor: "#f5f5f5",
              }}
            >
              Asia
            </Item2>
            <Item2>
            <MapContainer
                center={center3}
                zoom={2}
                minZoom={3}
                maxZoom={5}
                style={{width:"100%",height:"70vh"}}
                >
                    <TileLayer
                    url="https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=pR8jxK2HRDMxHyU51xVk"
                    attribution=''
                    />
                    {
                        statesData.features.map((state)=>{
                            const coordinates=state.geometry.coordinates[0].map((item)=>[item[1],item[0]])

                            return(<Polygon
                            pathOptions={{
                                strokeWidth:"1px" ,
                                fillColor:"#006491",
                                fillOpacity:0.7,
                                weight:2,
                                opacity:1,
                                dashArray:3,
                                color:"white"
                            }}
                            positions={coordinates}
                            eventHandlers={{
                                mouseover: (e)=>{
                                    const layer = e.target;
                                    layer.setStyle({
                                        fillOpacity:0.7,
                                        weight:5,
                                        dashArray:"",
                                        color:"#006499",
                                        fillColor:"#509BBD"
                                    })
                                },
                                mouseout:(e)=>{
                                    const layer = e.target;
                                    layer.setStyle({
                                        fillOpacity:0.7,
                                        weight:2,
                                        dashArray:"3",
                                        color:"white",
                                        fillColor:"#006491"
                                    })    
                                }
                            }}
                            />)
                        })
                    }
                </MapContainer>
            </Item2>
          </Item1>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Item1
            sx={{
              border: "1px solid #ddd",
              padding: "0px",
              borderRadius: "0px",
            }}
          >
            <Item2
              sx={{
                fontSize: "140%",
                borderBottom: "1px solid #ddd",
                margin: "0px",
                borderRadius: "0px",
                backgroundColor: "#f5f5f5",
              }}
            >
              Europe
            </Item2>
            <Item2>
            <MapContainer
                center={center4}
                zoom={4}
                minZoom={4}
                maxZoom={5}
                style={{height:"70vh"}}
                >
                    <TileLayer
                    url="https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=pR8jxK2HRDMxHyU51xVk"
                    attribution=''
                    />
                    {
                        statesData.features.map((state)=>{
                            const coordinates=state.geometry.coordinates[0].map((item)=>[item[1],item[0]])

                            return(<Polygon
                            pathOptions={{
                                strokeWidth:"1px" ,
                                fillColor:"#006491",
                                fillOpacity:0.7,
                                weight:2,
                                opacity:1,
                                dashArray:3,
                                color:"white"
                            }}
                            positions={coordinates}
                            eventHandlers={{
                                mouseover: (e)=>{
                                    const layer = e.target;
                                    layer.setStyle({
                                        fillOpacity:0.7,
                                        weight:5,
                                        dashArray:"",
                                        color:"#006499",
                                        fillColor:"#509BBD"
                                    })
                                },
                                mouseout:(e)=>{
                                    const layer = e.target;
                                    layer.setStyle({
                                        fillOpacity:0.7,
                                        weight:2,
                                        dashArray:"3",
                                        color:"white",
                                        fillColor:"#006491"
                                    })    
                                }
                            }}
                            />)
                        })
                    }
                </MapContainer>
            </Item2>
          </Item1>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Item1
            sx={{
              border: "1px solid #ddd",
              padding: "0px",
              borderRadius: "0px",
            }}
          >
            <Item2
              sx={{
                fontSize: "140%",
                borderBottom: "1px solid #ddd",
                margin: "0px",
                borderRadius: "0px",
                backgroundColor: "#f5f5f5",
              }}
            >
              Australia
            </Item2>
            <Item2>
            <MapContainer
                center={center5}
                zoom={4}
                minZoom={4}
                maxZoom={5}
                style={{height:"70vh"}}
                >
                    <TileLayer
                    url="https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=pR8jxK2HRDMxHyU51xVk"
                    attribution=''
                    />
                    {
                        statesData.features.map((state)=>{
                            const coordinates=state.geometry.coordinates[0].map((item)=>[item[1],item[0]])

                            return(<Polygon
                            pathOptions={{
                                strokeWidth:"1px" ,
                                fillColor:"#006491",
                                fillOpacity:0.7,
                                weight:2,
                                opacity:1,
                                dashArray:3,
                                color:"white"
                            }}
                            positions={coordinates}
                            eventHandlers={{
                                mouseover: (e)=>{
                                    const layer = e.target;
                                    layer.setStyle({
                                        fillOpacity:0.7,
                                        weight:5,
                                        dashArray:"",
                                        color:"#006499",
                                        fillColor:"#509BBD"
                                    })
                                },
                                mouseout:(e)=>{
                                    const layer = e.target;
                                    layer.setStyle({
                                        fillOpacity:0.7,
                                        weight:2,
                                        dashArray:"3",
                                        color:"white",
                                        fillColor:"#006491"
                                    })    
                                }
                            }}
                            />)
                        })
                    }
                </MapContainer>
            </Item2>
          </Item1>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Item1
            sx={{
              border: "1px solid #ddd",
              padding: "0px",
              borderRadius: "0px",
            }}
          >
            <Item2
              sx={{
                fontSize: "140%",
                borderBottom: "1px solid #ddd",
                margin: "0px",
                borderRadius: "0px",
                backgroundColor: "#f5f5f5",
              }}
            >
              Africa
            </Item2>
            <Item2>
            <MapContainer
                center={center6}
                zoom={3}
                minZoom={3}
                maxZoom={5}
                style={{height:"70vh"}}
                >
                    <TileLayer
                    url="https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=pR8jxK2HRDMxHyU51xVk"
                    attribution=''
                    />
                    {
                        statesData.features.map((state)=>{
                            const coordinates=state.geometry.coordinates[0].map((item)=>[item[1],item[0]])

                            return(<Polygon
                            pathOptions={{
                                strokeWidth:"1px" ,
                                fillColor:"#006491",
                                fillOpacity:0.7,
                                weight:2,
                                opacity:1,
                                dashArray:3,
                                color:"white"
                            }}
                            positions={coordinates}
                            eventHandlers={{
                                mouseover: (e)=>{
                                    const layer = e.target;
                                    layer.setStyle({
                                        fillOpacity:0.7,
                                        weight:5,
                                        dashArray:"",
                                        color:"#006499",
                                        fillColor:"#509BBD"
                                    })
                                },
                                mouseout:(e)=>{
                                    const layer = e.target;
                                    layer.setStyle({
                                        fillOpacity:0.7,
                                        weight:2,
                                        dashArray:"3",
                                        color:"white",
                                        fillColor:"#006491"
                                    })    
                                }
                            }}
                            />)
                        })
                    }
                </MapContainer>
            </Item2>
          </Item1>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Item1
            sx={{
              border: "1px solid #ddd",
              padding: "0px",
              borderRadius: "0px",
            }}
          >
            <Item2
              sx={{
                fontSize: "140%",
                borderBottom: "1px solid #ddd",
                margin: "0px",
                borderRadius: "0px",
                backgroundColor: "#f5f5f5",
              }}
            >
              North America
            </Item2>
            <Item2>
            <MapContainer
                center={center7}
                zoom={2}
                minZoom={2}
                maxZoom={5}
                style={{height:"70vh"}}
                >
                    <TileLayer
                    url="https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=pR8jxK2HRDMxHyU51xVk"
                    attribution=''
                    />
                    {
                        statesData.features.map((state)=>{
                            const coordinates=state.geometry.coordinates[0].map((item)=>[item[1],item[0]])

                            return(<Polygon
                            pathOptions={{
                                strokeWidth:"1px" ,
                                fillColor:"#006491",
                                fillOpacity:0.7,
                                weight:2,
                                opacity:1,
                                dashArray:3,
                                color:"white"
                            }}
                            positions={coordinates}
                            eventHandlers={{
                                mouseover: (e)=>{
                                    const layer = e.target;
                                    layer.setStyle({
                                        fillOpacity:0.7,
                                        weight:5,
                                        dashArray:"",
                                        color:"#006499",
                                        fillColor:"#509BBD"
                                    })
                                },
                                mouseout:(e)=>{
                                    const layer = e.target;
                                    layer.setStyle({
                                        fillOpacity:0.7,
                                        weight:2,
                                        dashArray:"3",
                                        color:"white",
                                        fillColor:"#006491"
                                    })    
                                }
                            }}
                            />)
                        })
                    }
                </MapContainer>
            </Item2>
          </Item1>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Item1
            sx={{
              border: "1px solid #ddd",
              padding: "0px",
              borderRadius: "0px",
            }}
          >
            <Item2
              sx={{
                fontSize: "140%",
                borderBottom: "1px solid #ddd",
                margin: "0px",
                borderRadius: "0px",
                backgroundColor: "#f5f5f5",
              }}
            >
              South America
            </Item2>
            <Item2>
            <MapContainer
                center={center8}
                zoom={2}
                minZoom={2}
                maxZoom={5}
                style={{height:"70vh"}}
                >
                    <TileLayer
                    url="https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=pR8jxK2HRDMxHyU51xVk"
                    attribution=''
                    />
                    {
                        statesData.features.map((state)=>{
                            const coordinates=state.geometry.coordinates[0].map((item)=>[item[1],item[0]])

                            return(<Polygon
                            pathOptions={{
                                strokeWidth:"1px" ,
                                fillColor:"#006491",
                                fillOpacity:0.7,
                                weight:2,
                                opacity:1,
                                dashArray:3,
                                color:"white"
                            }}
                            positions={coordinates}
                            eventHandlers={{
                                mouseover: (e)=>{
                                    const layer = e.target;
                                    layer.setStyle({
                                        fillOpacity:0.7,
                                        weight:5,
                                        dashArray:"",
                                        color:"#006499",
                                        fillColor:"#509BBD"
                                    })
                                },
                                mouseout:(e)=>{
                                    const layer = e.target;
                                    layer.setStyle({
                                        fillOpacity:0.7,
                                        weight:2,
                                        dashArray:"3",
                                        color:"white",
                                        fillColor:"#006491"
                                    })    
                                }
                            }}
                            />)
                        })
                    }
                </MapContainer>
            </Item2>
          </Item1>
        </Grid>
      </Grid>
    </Box>
  );
};

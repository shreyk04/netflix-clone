import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { IMG_CDN_URL } from "../utils/constants";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";
import axios from "axios";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

function ImageHoverCard({ posterPath,genresArr }) {

    const [genres,setGenres]=useState([])
    const fetchGenres=async()=>{
        try{
            const response=await axios.get('https://api.themoviedb.org/3/genre/movie/list?language=en', API_OPTIONS);
            const data=response.data.genres;
          
            const genreNames=genresArr.map((genreId)=>data.find((genre)=>genre.id===genreId)?.name);
            setGenres(genreNames)
        }catch(error){
            console.log(error);
        }

    }
    useEffect(()=>{
     fetchGenres();
    },[genresArr])
    
  return (
    <>
      <Card sx={{width:"100%", maxWidth: 345,bgcolor:"black",color:'white',borderRadius:"5px"}} >
        <CardMedia
          
          image={IMG_CDN_URL + posterPath}
          title="green iguana"
          className="w-full h-[12vw] object-cover transition duration cursor-pointer"
        />
        
        <CardActions className="flex justify-between" sx={{padding:"1rem"}}>

           
          <div className="flex gap-2">
            <Avatar sx={{ border: "2px solid gray",bgcolor:"black" }}>
              <PlayArrowIcon />
            </Avatar>
            <Avatar sx={{ border: "2px solid gray",bgcolor:"black" }}>
              <ControlPointIcon />
            </Avatar>
            <Avatar sx={{ border: "2px solid gray",bgcolor:"black" }}>
              <ThumbUpOffAltIcon />
            </Avatar>
          </div>
          <div>
            <Avatar sx={{ border: "2px solid gray",bgcolor:"black" }}>
              <ExpandMoreIcon />
            </Avatar>
          </div>
         
        </CardActions>
        <CardActions>
             {genres.map((genre,index)=>(
                <span key={index} className="font-semibold">{genre}</span>
             ))}
        </CardActions>
      </Card>
    </>
  );
}

export default ImageHoverCard;

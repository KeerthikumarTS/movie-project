import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useEffect, useState } from "react";

export function Moviedetails() {
  const { id } = useParams();
  const [moviedetails, setmoviedetails] = useState([]);

  useEffect(()=>{
    fetch(`https://65422421f0b8287df1ff9a43.mockapi.io/movies/${id}`)
    .then((res)=>res.json())
    .then((data)=>setmoviedetails(data));
  },);
  // const movie = moviedata[id];
  const styles = {
    color: moviedetails.rating > 8.5 ? "teal" : "red"
  };
  const navigate = useNavigate();
  return (
    <div>
      <iframe width="100%" height="500" src={moviedetails.trailer} title={moviedetails.name} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <div className="moviedetails-container">
        <div className="movie-specs">
          <h2 className="movie-name">{moviedetails.name}</h2>
          <p style={styles} className="movie-rating">⭐{moviedetails.rating}</p>

        </div>
      </div>

      <p className="movie-summary">{moviedetails.summary}</p>
      <Button variant="contained" onClick={() => navigate(-1)}><ArrowBackIosIcon fontSize=""/>Back</Button>
    </div>
  );
}

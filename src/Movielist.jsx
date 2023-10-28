import { useState } from "react";
import { Counter } from "./Counter";
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from "react-router-dom";


export function Movielist({ movie,id }) {
  //conditional Styling, ? : -> Ternary Operator
  const styles = {
    color: movie.rating > 8.5 ? "teal" : "red"
  };
  //managed state => show, Example:appying the brake in car
  const [show, setShow] = useState(true);
  //derived state => parastyles, its the reflection of managed state. Example : Speedometer decreses after applying the brake.
  // const parastyles = {
  //   display: show ? "block" : "none"
  // };
  const Navigate=useNavigate();
  return (
    <Card sx={{height:"min-content"}}className="movie-container">
      <img src={movie.poster} alt={movie.name} className="movie-poster" />
      <CardContent className="movie-specs">
        <h2 className="movie-name">{movie.name} 
        <IconButton onClick={() => setShow(!show)} color="primary" aria-label="Toggle summary">
        {show?<ExpandMoreIcon/>:<ExpandLessIcon/>}
        </IconButton>
        <IconButton onClick={()=>Navigate(`/movie/${id}`)} color="primary" aria-label="Information">
        <InfoIcon/>
        </IconButton></h2>
        <p style={styles} className="movie-rating">⭐{movie.rating}</p>
      </CardContent>
      
      
      {/* conditional Styling */}
      {/* <p style={parastyles} className="movie-summary">{movie.summary}</p> */}
      {/* Conditional Rendering -> Removes from DOM */}
      {show ? <p className="movie-summary">{movie.summary}</p> : null}
      <CardActions>
      <Counter />
      </CardActions>
    </Card>

  );
}

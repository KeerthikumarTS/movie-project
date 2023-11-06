import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Addmovie({moviedata,setmoviedata}) {
  const navigate=useNavigate()
  const addMovie = ()=>{
    const newmovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
      trailer: trailer,
    };
    fetch("https://65422421f0b8287df1ff9a43.mockapi.io/movies",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(newmovie),
    }).then(()=>navigate("/movie"));
  }


  const [name, setname] = useState("");
  const [poster, setposter] = useState("");
  const [rating, setrating] = useState("");
  const [summary, setsummary] = useState("");
  const [trailer, settrailer] = useState("");
  return (
    <div className="movie-form-area">
      <TextField onChange={(event) => setname(event.target.value)} variant="standard" label="Name" />
      <TextField onChange={(event) => setposter(event.target.value)} variant="standard" label="Poster" />
      <TextField onChange={(event) => setrating(event.target.value)} variant="standard" label="Rating" />
      <TextField onChange={(event) => setsummary(event.target.value)} variant="standard" label="Summary" />
      <TextField onChange={(event) => settrailer(event.target.value)} variant="standard" label="Trailer" />
      <Button
        variant="contained"
        onClick={() => 
          addMovie()
          // setmoviedata([...moviedata, newmovie]);
        }>Add Movie</Button>
    </div>
  );
}

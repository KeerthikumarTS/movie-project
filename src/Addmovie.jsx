import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export function Addmovie({moviedata,setmoviedata}) {
  const [name, setname] = useState("");
  const [poster, setposter] = useState("");
  const [rating, setrating] = useState("");
  const [summary, setsummary] = useState("");
  return (
    <div className="movie-form-area">
      <TextField onChange={(event) => setname(event.target.value)} variant="standard" label="Name" />
      <TextField onChange={(event) => setposter(event.target.value)} variant="standard" label="Poster" />
      <TextField onChange={(event) => setrating(event.target.value)} variant="standard" label="Rating" />
      <TextField onChange={(event) => setsummary(event.target.value)} variant="standard" label="Summary" />
      <Button
        variant="contained"
        onClick={() => {
          const newmovie = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
          };
          setmoviedata([...moviedata, newmovie]);
        }}>Add Movie</Button>
    </div>
  );
}

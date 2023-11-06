import { Movielist } from "./Movielist";
import { useState,useEffect } from "react";



export function Movierender() {
  const [moviedata, setmoviedata] = useState([]);

  const getMovie =()=>{
    fetch("https://65422421f0b8287df1ff9a43.mockapi.io/movies")
    .then((res)=>res.json())
    .then((data)=>setmoviedata(data));
  }
  useEffect(()=>getMovie(),[]);

  const deleteMovie = (id)=>{
    fetch(`https://65422421f0b8287df1ff9a43.mockapi.io/movies/${id}`, {method:"DELETE"})
    .then((res)=>res.json())
    .then(()=>getMovie());
  } 
    
  return (
    
      <div className="movie-render">
        {moviedata.map((mv) => (
          <Movielist movie={mv} key={mv.id} id={mv.id}
          deleteButton = {<button onClick={()=>deleteMovie(mv.id)}>Delete</button>}
          />
        ))}
      </div>
  );
}


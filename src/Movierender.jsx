import { Movielist } from "./Movielist";



export function Movierender({moviedata}) {
  

  
  return (
    
      <div className="movie-render">
        {moviedata.map((mv, index) => (
          <Movielist movie={mv} key={index} id={index} />
        ))}
      </div>
  );
}


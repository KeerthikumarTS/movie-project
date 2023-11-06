import "./App.css";
import { Movierender } from "./Movierender";
import {Basicform} from "./Basicform";
import { Routes, Route, useNavigate } from "react-router-dom";
import {Addcolor} from "./Addcolor";
import { Addmovie } from "./Addmovie";
import { useState } from "react";
import { Moviedetails } from "./Moviedetails";
import { Notfound } from "./Notfound";
import { Home } from "./Home";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function App() {
  const [moviedata, setmoviedata] = useState();
  const navigate = useNavigate()
  const [mode,setmode]=useState("dark")
  const Theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={Theme}>
    <Paper sx={{minHeight:"100vh", borderRadius:"0px"}} elevation={10} >
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Button onClick={()=>navigate("/")} color="inherit">Home</Button>
          <Button onClick={()=>navigate("/movie")} color="inherit">Movies</Button>
          <Button onClick={()=>navigate("/color-game")} color="inherit">Add-color</Button>
          <Button onClick={()=>navigate("/add-movie")} color="inherit">Add-movie</Button>
          <Button startIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />} 
          onClick={()=>setmode(mode=== "light"?"dark":"light")}color="inherit">
            {mode==="light"?"dark":"light"}-mode
          </Button>

        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movierender/>} />
        <Route path="/color-game" element={<Addcolor/>} />
        <Route path="/movie/:id" element={<Moviedetails moviedata={moviedata} />} />
        <Route path="/add-movie" element={<Addmovie moviedata={moviedata} setmoviedata={setmoviedata}/>} />
        <Route path="/basic-form" element={<Basicform/>}/>
        <Route path="*" element={<Notfound/>} />
      </Routes>
    </div>
    </Paper>
    </ThemeProvider>
  );
}



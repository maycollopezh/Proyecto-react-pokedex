import { useState, useEffect } from 'react';
import './App.css';
import PokemonCardComponent from './components/PokemonCardComponent';
//IMPORTAR SI O SI LO DE ABAJO 
import{BrowserRouter} from 'react-router-dom'
import Routerindex from './routes/Routerindex';
import { Link } from 'react-router-dom';

function App() {
  return(
    <>
    
   

    <BrowserRouter>
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

   
    <Link to="/"><p>Home</p></Link>
    
    <Link to="/about"><p>Abouts us</p></Link>
   
    
  </div>
</nav>

      <Routerindex/>

    </BrowserRouter>
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-bottom" data-bs-theme="dark">
  <div className="container-fluid">
  <span className="navbar-text">
      Esta web fue desarrollada por Maycol Lopez
    </span>

  </div>
</nav>
    </>
  )
}

export default App;

import {Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import PokemonDetail from '../pages/PokemonDetail';



const Routerindex = () => {
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}></Route>

                                    {/* atraves de este sintaxis resiviremos un ID y un NAME */}
            <Route path='/pokemonDetail/:id/:name' element={<PokemonDetail/>}></Route>

        </Routes>
    )
}


export default Routerindex;
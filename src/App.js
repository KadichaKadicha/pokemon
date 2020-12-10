import React,{useState, useEffect} from 'react';
import {BrowserRouter , Route, Switch} from 'react-router-dom'
import Header from "./comp/header";
import Home from "./comp/home";
import HeroDetails from "./comp/hero-details";
import axios from "axios";
import   './App.css'


const App = () => {
    const [pika, setPika] = useState([])
    useEffect(() => {
        axios(`https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`)
            .then(({data}) => {
                setPika(data.pokemon)
            })
    }, [])
    return (
        <BrowserRouter className="myMain" >
         <Header />
         <Switch>
             <Route exact path="/" component={()=> <Home pika={pika}/>}/>
             <Route exact path="/pokemon/:id" component={()=> <HeroDetails  pika={pika}/>}/>
         </Switch>
        </BrowserRouter>
    )
}
export default App;
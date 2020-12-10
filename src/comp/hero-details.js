import React from 'react';
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
const HeroDetails = ({pika}) => {
    const{id}=useParams()
    const pokemon = pika.find(el=>el.id===+id)
    if(pika.length===0){
        return 'Loading'
    }
    return (
  <div className=" hero bg-dark ">
      <div className="container">
          <div className="row">
              <div className="col-md-4 text-center myText" >
                  <img src={pokemon?.img} alt="" className="w-100"/>

                  <h2 className="textColor"> Name: {pokemon.name}</h2>
                  <div> Height: {pokemon?.height}</div>
                  <div>Weight: {pokemon?.weight}</div>
                  <div>Candy: {pokemon?.candy}</div>
                  <div className="mb-3">Candy: {pokemon?.spawn_time}</div>
                  <Link className="backBtn " to={"/"} > Back</Link>
              </div>
          </div>


      </div>
  </div>
    );
};

export default HeroDetails;
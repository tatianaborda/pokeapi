import * as React from 'react';
import Spinner from './Spinner';
import './PokeCard.css';

function PokeCard({pokemon, loading}) {
  return (
    <>
    {
      loading ? <Spinner/> :
      pokemon.map((item)=>{
        return(
          <>
            <div className="card">
              <div className="block moving-glow">
                  <img src={item.sprites.front_default} alt="pokemon"/>
                  </div>
                  <div>
                    <h1 style={{textTransform: 'capitalize'}}>
                      {item.name}
                    </h1>
                    <div className="group">
                      <h4>Movements</h4>
                        <p>{item.moves[0].move.name}</p>
                        <p>{item.moves[1].move.name}</p>
                        <p>{item.moves[2].move.name}</p>
                    </div>
                  </div>
             
            </div>
          </>
        )
      })
    }
      </>    
  );
}

export default PokeCard;
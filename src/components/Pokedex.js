import React, { Component } from "react";
import Pokecard from "./Pokecard";

class Pokedex extends Component {
  render() {
    return (
      <div>
        <h5 className="my-2">
          Team {this.props.team} Score:{this.props.exp}
          <span className="text-info">
            {this.props.isWinner ? " Winner" : " Loser"}
          </span>
        </h5>

        <div className="row text-center">
          {this.props.pokemons.map((pokemon, index) => {
            return (
              <div className="col-3" key={`${pokemon.name}${index}`}>
                <Pokecard
                  id={pokemon.id}
                  name={pokemon.name}
                  type={pokemon.type}
                  exp={pokemon.base_experience}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Pokedex;

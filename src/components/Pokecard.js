import React, { Component } from "react";
import "./Pokecard.css";
class Pokecard extends Component {
  render() {
    const { id, name, type, exp } = this.props;
    const modifyId = id.toString().padStart(3, "0");
    return (
      <div className="card m-0">
        <h5 className="card-title mt-1"> {name} </h5>

        <div className="card-body m-0 p-0">
          <img
            className="card-img-top m-0 p-0 Pokecard-zoom"
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${modifyId}.png`}
            alt={`pokemon-${name}`}
          />
          <p className="card-text p-0 m-0">Type : {type}</p>
          <p className="card-textp-0 m-0">EXP : {exp}</p>
        </div>
      </div>
    );
  }
}

export default Pokecard;

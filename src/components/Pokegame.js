import React, { Component } from "react";
import Pokedex from "./Pokedex";

class Pokegame extends Component {
  state = {
    pokemons: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 }
    ],
    teamAScore: 0,
    teamBScore: 0,
    winnerA: "",
    winnerB: ""
  };
  randomNum(teamName) {
    let teamScore = 0;
    //generating random number for pokemons array
    let numbers = Array.from({ length: this.state.pokemons.length / 2 }, () =>
      Math.floor(Math.random() * this.state.pokemons.length)
    );

    //using random numbers to generate 4 length array for each function call
    //in this case 2 call each recive array of random with lenght 4
    let randomPokemons = numbers.map(pokeIndex => {
      teamScore += this.state.pokemons[pokeIndex].base_experience;
      return this.state.pokemons[pokeIndex];
    });

    // teamscore calculating and assign to state properties for each team
    teamName === "A"
      ? (this.state.teamAScore = teamScore)
      : (this.state.teamBScore = teamScore);
    // check the winner team

    return randomPokemons;
  }

  render() {
    console.log(this.state.winnerA);
    return (
      <div className="container text-center">
        <h1> PokeReact </h1>

        <Pokedex
          pokemons={this.randomNum("A")}
          team="A"
          teamScore={this.state.teamAScore}
        />

        <Pokedex
          pokemons={this.randomNum("B")}
          team="B"
          teamScore={this.state.teamBScore}
        />
      </div>
    );
  }
}

export default Pokegame;

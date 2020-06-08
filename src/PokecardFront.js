import React, { Component } from "react";
import "./PokecardFront.css";

const POKE_IMG = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class PokecardFront extends Component {

  render() {
    const imgUrl = `${POKE_IMG}${padToThree(this.props.id)}.png`;
    return (
      <div
        className="PokecardFront"
        key={this.props.id}
      >
        <h1>{this.props.name}</h1>
        <img src={imgUrl} alt={this.props.name}></img>
        <p>Pokemon Type: {this.props.type}</p>
        <p>Base Experience: {this.props.exp}</p>
        <button onClick={this.props.handleClick}>More Info</button>
      </div>
    );
  }
}

export default PokecardFront;

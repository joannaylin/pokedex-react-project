import React, { Component } from "react";
import "./PokecardBack.css";
const shortid = require("shortid");

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

class PokecardBack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      abilities: [],
      stats: [],
    };
  }

  componentDidMount() {
    fetch(`${BASE_URL}${this.props.id}`)
      .then((resp) => resp.json())
      .then((pokeData) =>
        this.setState({
          abilities: pokeData.abilities,
          stats: pokeData.stats,
        })
      );
  }

  getAbilities = () => {
    return this.state.abilities
      .map((ability) => ability.ability.name)
      .join(", ");
  };

  getStats = () => {
    return this.state.stats.map((stat) => {
      return (
        <p>
          <span>{stat.stat.name}: </span>Base - {stat.base_stat} | EV -{" "}
          {stat.effort}
        </p>
      );
    });
  };

  render() {
    return (
      <div className="PokecardBack" key={this.props.id}>
        <h1>{this.props.name}</h1>
        <h4>Abilities: </h4>
        <p>{this.getAbilities()}</p>
        <h4>Stats: </h4>
        <div className="PokecardBack-Stats">{this.getStats()}</div>
        <button onClick={this.props.handleBackClick}>Back</button>
      </div>
    );
  }
}

export default PokecardBack;

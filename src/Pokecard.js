import React, { Component } from "react";
import PokecardFront from "./PokecardFront.js";
import PokecardBack from "./PokecardBack.js";


class Pokecard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFront: true,
    };
  }

  handleClick = () => {
    this.setState({
      showFront: false,
    });
  };

  handleBackClick = () => {
    this.setState({
      showFront: true,
    });
  };

  render() {
    const { id, name, type, base_experience } = this.props.pokemon;

    return (
      <div>
        {this.state.showFront ? (
          <PokecardFront
            id={id}
            name={name}
            type={type}
            exp={base_experience}
            handleClick={this.handleClick}
          />
        ) : (
          <PokecardBack
            id={id}
            name={name}
            handleBackClick={this.handleBackClick}
          />
        )}
      </div>
    );
  }
}

export default Pokecard;

import React, {useState, useEffect} from 'react';

class GameList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      games: [],
    };

    this.getGames = this.getGames.bind(this);
  }

  async getGames() {
    const response = await fetch('');
    const jsonData = await response.json();
    return jsonData.results;
  }

  async componentDidMount() {
    const games = await this.getGames();
    this.setState({ games });
  }

  render() {
    return (
      <div>
        {this.state.games.map((game) => (
          <p>{game.name}</p>
        ))}
      </div>
    );
  }

}

export default GameList;
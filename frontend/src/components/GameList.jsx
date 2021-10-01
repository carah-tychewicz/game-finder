import React, {useState, useEffect} from 'react';

// class GameList extends React.Component {

//   async getApi() {
//     const [data, setData] = React.useState(null);

//     React.useEffect(() => {
//       fetch("/api")
//         .then((res) => res.json())
//         .then((data) => setData(data.apiKey));
//     }, []);
    
//     this.getApi = data;
//   }

//   constructor(props) {
//     super(props);

//     this.state = {
//       games: [],
//     };

//     this.getGames = this.getGames.bind(this);
//   }

//   async getGames() {
    
//     const response = await fetch(`https://api.rawg.io/api/games?key=${this.getApi}`);
//     const jsonData = await response.json();
//     return jsonData.results;
//   }

//   async componentDidMount() {
//     const games = await this.getGames();
//     this.setState({ games });
//   }

//   render() {
//     return (
//       <div>
//         {this.state.games.map((game) => (
//           <p>{game.name}</p>
//         ))}
//       </div>
//     );
//   }
// }

function GameList() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.apiKey));
  }, []);

  

    return (<div>{data}</div>);
}


export default GameList;
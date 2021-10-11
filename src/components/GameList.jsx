import React, { useState, useEffect } from 'react';

const GameList = () => {
  
  const [gameList, setGameList] = React.useState(null);

  React.useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((gameList) => setGameList(gameList.games));
  }, []);

  console.log(gameList);

  return (<p>{gameList}</p>);
}


export default GameList;
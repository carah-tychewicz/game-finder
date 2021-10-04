import React, { useState, useEffect } from 'react';

const GameList = () => {
  
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.apiKey));
  }, []);

  return (<div>{data}</div>);
}


export default GameList;
import React, {useState, useEffect} from 'react';

function GetKey() {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.apiKey));
  }, []);  

  return (data);

}

export { data };
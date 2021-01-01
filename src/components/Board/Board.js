import React, { useEffect, useState } from 'react';
import './board.scss';

function Board({board}) {
  const { brand, item, id } = board;
  const { ourData, setOurData} = useState(42)

  useEffect((() => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/"; // this gets around cors errors
    const url = "https://pacific-atoll-67065.herokuapp.com/";
    fetch(proxyurl + url)
      .then(x => x.text()) // this is needed until we change response to json
      .then((x) => {
        console.log('here is our stuff', ourData)
      })
      .catch(x => console.log('!!! x failed',x))
  }) ,[])

  useEffect(() => {
    console.log('!!! current data is ---   ', ourData)
  },[ourData])

  return (
    <div className="board">
      <span>{brand}</span>
      <span>{item}</span>
      <span>{id}</span>
      <button>delete button</button>
    </div>
  )
}

export default Board;

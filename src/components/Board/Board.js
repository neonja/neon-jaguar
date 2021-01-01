import React, { useEffect, useState } from 'react';
import './board.scss';

function Board({board}) {
  const { brand, item, id } = board;
  const { ourData, setOurData} = useState(42)

  useEffect((() => {
    // this pre-pend gets around cors errors
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    // our internal enpoint
    const url = "https://arcane-meadow-19297.herokuapp.com/skateboards";
    fetch(proxyurl + url)
      .then(x => x.text())
      .then(x => {
        console.log('middleware 1');
        console.table(x)
      })
      .catch(x => console.log('!!! x failed-----',x))
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

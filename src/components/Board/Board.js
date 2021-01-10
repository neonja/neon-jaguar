import React from 'react';
import './board.scss';

function Board({board, setOurData}) { // TODO: setOurData move to Global Store
  const {
    brand,
    item,
    id,
    type,
  } = board;

  function handleDelete() {
    // Delete item
    // this pre-pend gets around cors errors
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    // our internal enpoint
    let url = `${proxyurl}https://arcane-meadow-19297.herokuapp.com/skateboard/${id}`;
    fetch(url, {
      method: 'DELETE'
    })
    .then(x => {
      // console.log(`DELETE PERFORMED ON /skateboard/${id}`);
      return x;
    })
    // then retreive the updated boards
    .then(x => {
      let updatedProxyurl = "https://cors-anywhere.herokuapp.com/";
      let updatedurl = "https://arcane-meadow-19297.herokuapp.com/skateboards";

      fetch(updatedProxyurl + updatedurl)
      .then(res => res.json())
      .then(res => {
        console.log(`UPDATED BOARDSLIST RETREIVED OF...`)
        console.table(res)
        setOurData(res)
      })
      .catch(err => {
        console.log(`UPDATED BOARDLIST RETRIEVAL FAILED___${err}`);
      })
    })
    .catch(err => console.log(`DELETE OF ITEM ${id} FAILED___${err}`))
  }

  return (
    <div className="board">
      <span>{brand}</span>
      <span>{type}</span>
      <span>{item}</span>
      <span>{id}</span>
      <button onClick={handleDelete}className="delete">delete button</button>
    </div>
  )
}

export default Board;

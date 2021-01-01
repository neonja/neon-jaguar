import React from 'react';
import './board.scss';

function Board({board}) {
  const { brand, item, id, type } = board;

  function handleDelete() {
    console.log('here is the delete', id);
      // this pre-pend gets around cors errors
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      // our internal enpoint
      const url = `${proxyurl}https://arcane-meadow-19297.herokuapp.com/skateboard/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
        .then(x => {
          console.log('middleware for DELETE');
          console.table(x)
        })
        .catch(err => console.log('your fetchPOST has failed-----',err))

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

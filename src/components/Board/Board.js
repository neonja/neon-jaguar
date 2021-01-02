import React from 'react';
import './board.scss';

function Board({board, setOurData}) {
  const {
    brand,
    item,
    id,
    type,
  } = board;

  function handleDelete() {
    console.log('here is the delete', id);
      // this pre-pend gets around cors errors
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      // our internal enpoint
      let url = `${proxyurl}https://arcane-meadow-19297.herokuapp.com/skateboard/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
        .then(x => {
          console.log('middleware for DELETE');
          console.table(x)
          return x;
        })
        .then(x => {
          let updatedBoards;
          let updatedProxyurl = "https://cors-anywhere.herokuapp.com/";
          let updatedurl = "https://arcane-meadow-19297.herokuapp.com/skateboards";

          fetch(updatedProxyurl + updatedurl)
            .then(x => {
              console.log('are we getting an updated url call?', x);
              return x;
            })
            .then(res => res.json())
            .then(res => {
              console.log('did the .json() work??', res)
              updatedBoards = res;
              setOurData(updatedBoards)
            })
            .catch(x => {
              console.log('the update didnt work', x);
            })

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

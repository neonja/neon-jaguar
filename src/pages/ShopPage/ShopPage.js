import React, { useState, useEffect } from 'react';
import Board from '../../components/Board/Board.js';
import './shop-page.scss';

// tempData
const boards = [
  {"brand": "zero", "item":"skateboard", "id": 1},
  {"brand": "birdhouse", "item":"skateboard", "id": 2},
  {"brand": "girl", "item":"skateboard", "id": 3}
];

function ShopPage() {
  const [ ourData, setOurData ] = useState(undefined)

  useEffect((() => {
    // this pre-pend gets around cors errors
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    // our internal enpoint
    const url = "https://arcane-meadow-19297.herokuapp.com/skateboards";
    fetch(proxyurl + url)
      .then(x => x.json())
      .then(x => {
        console.table(x)
        setOurData(x)
      })
      .catch(err => console.log('your fetch has failed-----',err))
  }) ,[])

  return (
    <div className="shop-page">
      <span className="shop-page-title">Here are the current boards we offer...</span>
      <div className="board-categories">
        <span>Brand</span>
        <span>Item</span>
        <span>Id</span>
        <span>Delete Item</span>
      </div>
      { ourData &&
        ourData.map(board => {
          return (
          <Board
            setOurData={setOurData}
            key={board.id}
            board={board}
          />
          )
        })
      }
    </div>
  )
}

export default ShopPage;

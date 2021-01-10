import React, { useState, useEffect } from 'react';
import Board from '../../components/Board/Board.js';
import './shop-page.scss';

// tempData
const boards = [
  {"brand": "zero", "item":"skateboard", "id": 1},
  {"brand": "birdhouse", "item":"skateboard", "id": 2},
  {"brand": "girl", "item":"skateboard", "id": 3}
];

const testBoard = {
  "brand": "zero",
  "type":"skateboard",
  "id": 4,
};

function ShopPage() {
  const [ ourData, setOurData ] = useState(undefined);
  const proxyurl = "https://cors-anywhere.herokuapp.com/"; // this pre-pend gets around cors errors

  // get Boards
  useEffect((() => {
    // our internal enpoint
    const url = "https://arcane-meadow-19297.herokuapp.com/skateboards";
    fetch(proxyurl + url)
      .then(x => {
        return x;
      })
      .then(x => x.json())
      .then(x => {
        setOurData(x)
      })
      .catch(err => console.log('your fetch has failed-----',err))
  }) ,[])

  function handleAddBoard() {
    const url = "https://arcane-meadow-19297.herokuapp.com/skateboard";
    const getUrl = "https://arcane-meadow-19297.herokuapp.com/skateboards";

    const addBoard = fetch(
      (proxyurl + url),
      {"method": "POST",
        "body": JSON.stringify(testBoard)
      }
    )
    .then(res => res.json())
    .catch(err => {
      console.table({
        "addBoard__error": err,
      })
    })

    const updateBoards = fetch(proxyurl + getUrl)
    .then(res => res.json())
    .then(x => {
      console.log('are we in updateBoards???', x)
      return x;

    })
    .then(res => setOurData(res))
    .catch(e => {
      console.table({
        "trouble_updating_boards": e,
      })
    })

    Promise.all([addBoard, updateBoards]).then(res => {
      console.log({'we are through the promise.all': res})
    })
  }

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
        ourData.sort((a,b) => b.id < a.id)
        .map(board => {
          return (
          <Board
            setOurData={setOurData}
            key={board.id}
            board={board}
          />
          )
        })
      }
      <button onClick={handleAddBoard}className="add-board">ADD NEW ITEM</button>
      <form onSubmit={() => console.log(42)}>
        <input value={42}/>
        <input value={42}/>
        <input value={42}/>
        <button>ADD NEW CUSTOM ITEM</button>
      </form>
    </div>
  )
}

export default ShopPage;

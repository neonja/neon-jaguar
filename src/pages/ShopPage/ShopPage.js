import React from 'react';
import Board from '../../components/Board/Board.js';
import './shop-page.scss';

const boards = [
  {"brand": "zero", "item":"skateboard", "id": 1},
  {"brand": "birdhouse", "item":"skateboard", "id": 2},
  {"brand": "girl", "item":"skateboard", "id": 3}
];

function ShopPage() {
  return (
    <div className="shop-page">
      <span className="shop-page-title">Here are the current boards we offer...</span>
      <div className="board-categories">
        <span>Brand</span>
        <span>Item</span>
        <span>Id</span>
      </div>
      {
        boards.map(board => {
          return (
          <Board key={board.id}board={board} />
          )
        })
      }

    </div>
  )
}

export default ShopPage;

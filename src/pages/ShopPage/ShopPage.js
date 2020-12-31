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
      <span>Here are the current boards we offer...</span>
      {
        boards.map(board => {
          return (
          <Board board={board} />
          )
        })
      }
    </div>
  )
}

export default ShopPage;

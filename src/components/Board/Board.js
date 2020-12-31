import React, { useEffect } from 'react';

function Board({board}) {
  const { brand, item, id } = board;
  
  useEffect(() => {
    console.log('!!!', board);
  },[])

  return (
    <div className="board">
      <span>{brand}</span>
      <span>{item}</span>
      <span>{id}</span>
    </div>
  )
}

export default Board;

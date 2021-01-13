import React from 'react';
// import { TouchBackend } from 'react-dnd-touch-backend';
// import { DndProvider, DragSource } from 'react-dnd';
import "./drag-page.scss";
import logo from '../../logo.svg';
import { useDrag } from 'react-dnd';
import ItemTypes from '../../enums.js';

const SomethingToDrag = (props) => {
  return (
    <div className="something-to-drag">
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  )
}

const DragPage = () => {

  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.DRAG_ICON},
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  })
  return (
      <div className="drag-page">
        <div
          ref={drag}
          className="drag-start-area"
          style={{
            opacity: isDragging ? 0.5 : 1,
            fontSize: 25,
            cursor: 'move',
          }}>
          <SomethingToDrag />
        </div>
        <div className="drag-end-area">
          <span>&nbsp;</span>
        </div>
      </div>
  )
}

export default DragPage;

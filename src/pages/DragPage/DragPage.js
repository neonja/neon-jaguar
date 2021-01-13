import React from 'react';
// import { TouchBackend } from 'react-dnd-touch-backend';
// import { DndProvider, DragSource } from 'react-dnd';
import "./drag-page.scss";
import logo from '../../logo.svg';
import { DragSource } from 'react-dnd';


const SomethingToDrag = (props) => {
  return (
    <div className="something-to-drag">
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  )
}

const DragPage = () => {

  return (
      <div className="drag-page">
        <div className="drag-start-area">
          <SomethingToDrag />
        </div>
        <div className="drag-end-area">
          <span>&nbsp;</span>
        </div>
      </div>
  )
}

export default DragPage;

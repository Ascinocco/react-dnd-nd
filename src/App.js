import React from 'react';
import './App.css';

// @TODO: research which drag effects to use. | https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#drageffects
// @TODO: Firefox support
// @TODO: Safari support - already supported
// @TODO: IE support
// @TODO: Edge support

function generateKey() {
  return Math.random().toString().replace('0.', '');
}

export function Draggable(props) {
  const {
    key = generateKey(),
    className = '',
    style = {}, 
    disabled = false,
    onDragStart = () => {},
    onDragEnd = () => {},
    onDragEnter = () => {},
    onDragExit = () => {},
    onDragLeave = () => {},
    onDragOver = () => {},
    onDrop = () => {},
    ref = undefined,
    children = '',
  } = props;

  const withRef = ref ? { ref } : {}; 

  return (
    <div
      id={`draggable-container-${key}`}
      className={className}
      style={style}
      draggable={!disabled}
      onDragStart={(e) => {
        // e.preventDefault();
        // e.stopPropagation();
        onDragStart(e);
        return;
      }}
      onDragEnd={(e) => {
        // e.preventDefault();
        // e.stopPropagation();
        onDragEnd(e);
        return;
      }}
      onDragEnter={(e) => {
        // e.preventDefault();
        // e.stopPropagation();
        onDragEnter(e);
        return;
      }}
      onDragExit={(e) => {
        // e.preventDefault();
        // e.stopPropagation();
        onDragExit(e);
        return;
      }}
      onDragLeave={(e) => {
        // e.preventDefault();
        // e.stopPropagation();
        onDragLeave(e);
        return;
      }}
      onDragOver={(e) => {
        // e.preventDefault();
        // e.stopPropagation();
        onDragOver(e);
        return;
      }}
      onDrop={(e) => {
        // e.preventDefault();
        // e.stopPropagation();
        onDrop(e);
        return;
      }}
      {...withRef}
    >
      {children}
    </div>
  );
}

export function DropZone(props) {
  const {
    key = generateKey(),
    className = '',
    style = {}, 
    onDragStart = () => {},
    onDragEnd = () => {},
    onDragEnter = () => {},
    onDragExit = () => {},
    onDragLeave = () => {},
    onDragOver = () => {},
    onDrop = () => {},
    ref = undefined,
    children = '',
  } = props;

  const withRef = ref ? { ref } : {}; 

  return (
    <div
      key={key}
      style={style}
      id={`dropzone-container-${key}`}
      className={className}
      onDragStart={(e) => {
        // e.preventDefault();
        // e.stopPropagation();
        // onDragStart(e);
        // return;
      }}
      onDragEnd={(e) => {
        // e.preventDefault();
        // e.stopPropagation();
        // onDragEnd(e);
        // return;
      }}
      onDragEnter={(e) => {
        // e.preventDefault();
        // e.stopPropagation();
        // onDragEnter(e);
        // return;
      }}
      onDragExit={(e) => {
        // e.preventDefault();
        // e.stopPropagation();
        // onDragExit(e);
        // return;
      }}
      onDragLeave={(e) => {
        // e.preventDefault();
        // e.stopPropagation();
        // onDragLeave(e);
        // return;
      }}
      onDragOver={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onDragOver(e);
        return;
      }}
      onDrop={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onDrop(e);
        return;
      }}
      {...withRef}
    >
      {children}
    </div>
  );
}

function App() {
  const handleDragStart = (e) => {
    console.log('HANDLE_DRAG_START - DRAGGABLE');
  };

  const handleDrop = (e) => {
    console.log('HANDLE_DROP - DROPZONE');
  };

  const handleDragOver = (e) => {
    console.log('HANDLE_DRAG_OVER - DROPZONE');
  };

  return (
    <div>
      <Draggable onDragStart={handleDragStart}>
        Hi, Im draggable!
      </Draggable>
      <DropZone
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        Drop something here friend!
      </DropZone>
    </div>
  );
}

export default App;

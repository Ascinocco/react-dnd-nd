import React from 'react';
import './App.css';

// @TODO: research which drag effects to use. | https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#drageffects
// @TODO: Firefox support
// @TODO: Safari support - already supported
// @TODO: IE support
// @TODO: Edge support

function generateKey() {
  return `${Math.random().toString().replace('0.', '')}-${Date.now()}`;
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
    onDragLeave = () => {},
    onDragOver = () => {},
    setRef = node => node,
    children = '',
  } = props;

  return (
    <div
      key={`draggable-container-${key}`}
      className={className}
      style={style}
      draggable={!disabled}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      ref={setRef}
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
    onDragEnter = () => {},
    onDragLeave = () => {},
    onDragOver = () => {},
    onDrop = () => {},
    setRef = node => node,
    children = '',
  } = props;

  return (
    <div
      key={`dropzone-container-${key}`}
      className={className}
      style={style}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      onDragOver={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onDragOver(e);
        return;
      }}
      ref={setRef}
    >
      {children}
    </div>
  );
}

function App() {
  const handleDragStart = (e) => {
    console.log('HANDLE_DRAG_START - DRAGGABLE');
    // e.dataTransfer.setData('id', 'I shot the sherrif!');
  };

  const handleDrop = (e) => {
    console.log('HANDLE_DROP - DROPZONE');
    // console.log('e.dataTransfer', e.dataTransfer);
    // console.log('data', e.dataTransfer.getData('id'))
  };

  const handleDragOver = (e) => {
    console.log('HANDLE_DRAG_OVER - DROPZONE');
    // console.log('e.dataTransfer', e.dataTransfer);
  };

  return (
    <div>
      <Draggable
        // onDragEnd={(e) => {
        //   console.log('onDragEnd');
        // }}
        // onDragEnter={() => console.log('onDragEnter')}
        // onDragLeave={() => console.log('onDragLeave')}
        // onDragStart={handleDragStart}
        // onDragOver={(e) => {
        //   e.preventDefault();
        //   e.stopPropagation();
        //   handleDragOver(e);
        // }}
        >
        Hi, Im draggable!
      </Draggable>
      <DropZone
        // onDrop={handleDrop}
        // onDragEnter={() => console.log('onDragEnter')}
        // onDragLeave={() => console.log('onDragLeave')}
        // onDragOver={(e) => {
        //   // e.preventDefault();
        //   // e.stopPropagation();
        //   handleDragOver(e);
        // }}
      >
        Drop something here friend!
      </DropZone>
    </div>
  );
}

export default App;

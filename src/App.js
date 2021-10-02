import './App.css';
// import VideoSandbox from "./components/html_components/VideoSandbox"
import mouseState from './mouseState';
import React, { useEffect } from 'react';

function App() {
  const onDocumentPointerMove = (e) => {
    mouseState.x = e.clientX
    mouseState.y = e.clientY
  }

  useEffect(() => {
    document.addEventListener('mousemove', onDocumentPointerMove, false);
  }, []);

  return (
    <>
      <div className="html-content-container">
        <p>here</p>
      </div>
    </>
  );
}

export default App;

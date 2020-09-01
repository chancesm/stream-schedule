import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log("test");
  }, [])
  return (
    <div className="App">
      <div className="top">
        <img src="logo.png" alt=""></img>
        <div className="separator"></div>
        <div className="title">
          Stream Schedule
        </div>
      </div>
      <div className="schedule">

      </div>
    </div>
  );
}

export default App;

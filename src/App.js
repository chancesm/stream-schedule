import React, { useEffect, useState } from 'react';

function App() {
  const [schedule, setSchedule] = useState([]);
  useEffect(() => {
    fetch('/.netlify/functions/getSchedule').then(response => response.json()).then(data => setSchedule(data));
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
      <div className="bottom">
        <div className="schedule">
          <div className="days">
            <div className="day">MONDAY</div>
            <div className="day">TUESDAY</div>
            <div className="day">WEDNESDAY</div>
            <div className="day">THURSDAY</div>
            <div className="day">FRIDAY</div>
          </div>
          <div className="content">
            {schedule.map(item => (
              <div key={item.id} className="scheduleItem" style={{width: `${224 * (item.fields.Size ?? 1)}px`}}>
                <div className="eventTitle">{item.fields.Title}</div>
                <div className="description">{item.fields.Description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

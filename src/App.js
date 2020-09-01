import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';

function App() {
  const now = dayjs();
  const day = now.format('dddd').toLowerCase();
  const [schedule, setSchedule] = useState([]);
  const [images, setImages] = useState({});
  useEffect(() => {
    fetch('/.netlify/functions/getSchedule').then(response => response.json()).then(data => setSchedule(data));
    fetch('/.netlify/functions/getImages').then(response => response.json()).then(data => setImages(data));
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
            <div className={day === "monday" ? "day active" :  "day"}>MONDAY</div>
            <div className={day === "tuesday" ? "day active" :  "day"}>TUESDAY</div>
            <div className={day === "wednesday" ? "day active" :  "day"}>WEDNESDAY</div>
            <div className={day === "thursday" ? "day active" :  "day"}>THURSDAY</div>
            <div className={day === "friday" ? "day active" :  "day"}>FRIDAY</div>
          </div>
          <div className="content">
            {schedule.map(item => (
              <div key={item.id} className="scheduleItem" style={{width: `${224 * (item.fields.Size ?? 1)}px`}}>
                <div className="itemContent">
                  <div className="eventTitle">{item.fields.Title}</div>
                  <div className="description">{item.fields.Description}</div>
                </div>
                <div className="images">
                  {item.fields.Images.map(image => {
                    const foundImage = images[image];
                    return foundImage ? (
                      <div key={image}>
                        <img src={foundImage.Link} alt={foundImage.Name} width="80" height="80"/>
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

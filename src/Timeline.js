import React from "react";
import "./Timeline.css";

const Timeline = ({ events }) => {
  return (
    <div className="timeline">
      {events.map((event, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-content">
            <h3>{event.name}</h3>
            <p>{event.description}</p>
          </div>
          <div className="timeline-circle"></div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;

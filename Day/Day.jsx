import React from "react";

export const Day = ({ day, onClick, status }) => {
  const className = `day`;
  const className1 = `day1`;
  const className2 = `day2`;
  const className3 = `day3`;
  const className4 = `day4`;
  const id = `div${day.id}`;
  // console.log(status);

  if (status != undefined) {
    if (status == "2") {
      return (
        <div onClick={onClick} className={className1} id={id}>
          {day.event && <div className="event1">{day.event}</div>}
          {day.spe && <div className="spe1">{day.spe}</div>}
          {day.time && <div className="time">{day.time}</div>}
        </div>
      );
    }
    if (status == "3") {
      return (
        <div onClick={onClick} className={className2} id={id}>
          {day.event && <div className="event2">{day.event}</div>}
          {day.spe && <div className="spe2">{day.spe}</div>}
          {day.time && <div className="time2">{day.time}</div>}
        </div>
      );
    }
    if (status == "4") {
      return (
        <div onClick={onClick} className={className3} id={id}>
          {day.event && <div className="event3">{day.event}</div>}
          {day.spe && <div className="spe3">{day.spe}</div>}
          {day.time && <div className="time3">{day.time}</div>}
        </div>
      );
    }
    if (status == "5") {
      return (
        <div onClick={onClick} className={className4} id={id}>
          {day.event && <div className="event4">{day.event}</div>}
          {day.spe && <div className="spe4">{day.spe}</div>}
          {day.time && <div className="time4">{day.time}</div>}
        </div>
      );
    } else {
      return (
        <div onClick={onClick} className={className} id={id}>
          {day.event && <div className="event">{day.event}</div>}
          {day.spe && <div className="spe">{day.spe}</div>}
          {day.time && <div className="time">{day.time}</div>}
        </div>
      );
    }
  } else {
    return (
      <div onClick={onClick} className={className} id={id}>
        {day.event && <div className="event">{day.event}</div>}
        {day.spe && <div className="spe">{day.spe}</div>}
        {day.time && <div className="time">{day.time}</div>}
      </div>
    );
  }
};

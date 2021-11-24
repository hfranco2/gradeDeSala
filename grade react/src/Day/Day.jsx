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
    if (status.vstatus == "2") {
      return (
        <div onClick={onClick} className={className1} id={id}>
          {day.event && <div className="event1">{day.event.title}</div>}
          {day.spe && <div className="spe1">{day.spe.vspe}</div>}
          {day.time && <div className="time">{day.time.vtime}</div>}
        </div>
      );
    }
    if (status.vstatus == "3") {
      return (
        <div onClick={onClick} className={className2} id={id}>
          {day.event && <div className="event2">{day.event.title}</div>}
          {day.spe && <div className="spe2">{day.spe.vspe}</div>}
          {day.time && <div className="time2">{day.time.vtime}</div>}
        </div>
      );
    }
    if (status.vstatus == "4") {
      return (
        <div onClick={onClick} className={className3} id={id}>
          {day.event && <div className="event3">{day.event.title}</div>}
          {day.spe && <div className="spe3">{day.spe.vspe}</div>}
          {day.time && <div className="time3">{day.time.vtime}</div>}
        </div>
      );
    }
    if (status.vstatus == "5") {
      return (
        <div onClick={onClick} className={className4} id={id}>
          {day.event && <div className="event4">{day.event.title}</div>}
          {day.spe && <div className="spe4">{day.spe.vspe}</div>}
          {day.time && <div className="time4">{day.time.vtime}</div>}
        </div>
      );
    } else {
      return (
        <div onClick={onClick} className={className} id={id}>
          {day.event && <div className="event">{day.event.title}</div>}
          {day.spe && <div className="spe">{day.spe.vspe}</div>}
          {day.time && <div className="time">{day.time.vtime}</div>}
        </div>
      );
    }
  } else {
    return (
      <div onClick={onClick} className={className} id={id}>
        {day.event && <div className="event">{day.event.title}</div>}
        {day.spe && <div className="spe">{day.spe.vspe}</div>}
        {day.time && <div className="time">{day.time.vtime}</div>}
      </div>
    );
  }
};

import React from "react";

export const Day = ({ day, onClick, status }) => {
  const className = `day`;
  const className1 = `day1`;
  const className2 = `day2`;
  const className3 = `day3`;
  const id = `div${day.id}`;
  // console.log(day)

  // if (status == "1") {
  //   return (
  //     <div onClick={onClick} className={className} id={id}>
  //       {day.id}

  //       {day.event && <div className="event">{day.event.title}</div>}
  //       {day.spe && <div className="event">{day.spe.vspe}</div>}
  //       {day.time && <div className="event">{day.time.vtime}</div>}
  //     </div>
  //   );
  // }
  if (status == "2") {
    return (
      <div onClick={onClick} className={className1} id={id}>
        {day.event && <div className="event1">{day.event.title}</div>}
        {day.spe && <div className="event1">{day.spe.vspe}</div>}
        {day.time && <div className="event1">{day.time.vtime}</div>}
      </div>
    );
  }
  if (status == "3") {
    return (
      <div onClick={onClick} className={className2} id={id}>
        {day.event && <div className="event2">{day.event.title}</div>}
        {day.spe && <div className="event2">{day.spe.vspe}</div>}
        {day.time && <div className="event2">{day.time.vtime}</div>}
      </div>
    );
  }
  if (status == "4") {
    return (
      <div onClick={onClick} className={className3} id={id}>
        {day.event && <div className="event3">{day.event.title}</div>}
        {day.spe && <div className="event3">{day.spe.vspe}</div>}
        {day.time && <div className="event3">{day.time.vtime}</div>}
      </div>
    );
  }
  if (status == "5") {
    return (
      <div onClick={onClick} className={className3} id={id}>
        {day.event && <div className="event4">{day.event.title}</div>}
        {day.spe && <div className="event4">{day.spe.vspe}</div>}
        {day.time && <div className="event4">{day.time.vtime}</div>}
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
};


import React from 'react';

export const Day1 = ({ day, onClick }) => {
  const className = `day1`;
  const id = `${day.id}`
  return (
        <div onClick={onClick} className={className} id={id}>
      {day.id}

      {day.event1 && <div className='event'>{day.event1.title}</div>}
    </div>
  );
};
 
 
 
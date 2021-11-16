// import React from 'react';

// export const Day = ({ day, onClick }) => {
//   const className = `div${day.id}`;
//   return (
//     <div onClick={onClick} className={className}>
//       {day.value === 'padding' ? '' : day.value}

//       {day.event && <div className='event'>{day.event.title}</div>}
//     </div>
//   );
// };
// import React from 'react';

// export const Day = ({ day, onClick }) => {
    

//   const className = `div${day.id}`;
//   return (
//     <div onClick={onClick} className={className}>
//       {<div className='event'>{day.event}</div>}

     
//     </div>
//   );
// };
import React from 'react';

export const Day = ({ day, onClick }) => {
  const className = `day ${day.value}`;
  const id = `div${day.id}`
  return (
        <div onClick={onClick} className={className} id={id}>
      {day.id}

      {day.event && <div className='event'>{day.event.title}</div>}
    </div>
  );
};
 
 
 
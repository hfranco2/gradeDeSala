import React, {useEffect, useState} from 'react';
import { CalendarHeader } from '../CalendarHeader/CalendarHeader';
import { Day } from '../Day/Day';
import { NewEventModal } from '../NewEventModal';
import { DeleteEventModal } from '../DeleteEventModal';

export const App = () => {
    
    
    const[days, setDays] = useState([]);
    const[dateDisplay, setDateDisplay] = useState('');
    const [clicked, setClicked] = useState();

    const [events,setEvents] = useState(
        localStorage.getItem('events') ?
         JSON.parse(localStorage.getItem('events')) : []
    );

    const eventForDate = id => events.find(e => e.id === id)
    useEffect(() =>{
        localStorage.setItem('events', JSON.stringify(events));
    },[events]);

    useEffect(() => {
      const dt = new Date();
      const year = dt.getFullYear();
      
     setDateDisplay( `${dt.toLocaleDateString('en-us', { month: 'long' })} ${year}`);
     const daysArr =[];
     for(let i = 1; i<325;i++){
      daysArr.push({
        value: 'div'+i,
        event: eventForDate(i),
        id: i,
        
      });
     }
     setDays(daysArr)
    },[events]);


    return(
      <>
    <div id="container">
    

    <div id="weekdays">
      
      <div>Segunda</div>
      <div>Terça</div>
      <div>Quarta</div>
      <div>Quinta</div>
      <div>Sexta</div>
      
    </div>

    <div id="calendar">
        {days.map((d, index) =>(
            <Day
            key = {index}
            day = {d}
            onClick={() =>{                
              setClicked(d.id);
                
            }
            }
            />
        ))}
    </div>
  </div>
  {
    clicked && !eventForDate(clicked) &&
    <NewEventModal 
    onClose={() => setClicked(null)}
    onSave={
      title =>{
        setEvents([...events, {title, id:clicked}]);
        
        setClicked(null);
      }
    }
    />
  }

{
        clicked && eventForDate(clicked) &&
        <DeleteEventModal 
          eventText={eventForDate(clicked).title}
          onClose={() => setClicked(null)}
          onDelete={() => {
            setEvents(events.filter(e => e.id !== clicked));
            setClicked(null);
          }}
        />
      }
  </>
  );
};
import React, {useEffect, useState} from 'react';
import { CalendarHeader } from '../CalendarHeader/CalendarHeader';
import { Day } from '../Day';
import { Day1} from '../Day/Day1';
import { NewEventModal } from '../NewEventModal';
import { DeleteEventModal } from '../DeleteEventModal';

export const App = () => {


    const[days, setDays] = useState([]);
    const[days1, setDays1] = useState([]);
    const[days2, setDays2] = useState([]);
    const[days3, setDays3] = useState([]);
    const[days4, setDays4] = useState([]);
    const[days5, setDays5] = useState([]);
    const[dateDisplay, setDateDisplay] = useState('');
    const [clicked, setClicked] = useState();

    const [events,setEvents] = useState(
        localStorage.getItem('events') ?
         JSON.parse(localStorage.getItem('events')) : []
    );
    const [events1,setEvents1] = useState(
      localStorage.getItem('events1') ?
       JSON.parse(localStorage.getItem('events1')) : []
  );
    const eventForDate = id => events.find(e => e.id === id)
    useEffect(() =>{
        localStorage.setItem('events', JSON.stringify(events));
    },[events]);
    
    


    useEffect(() => {
    //   const dt = new Date();
    //   const year = dt.getFullYear();
      
    //  setDateDisplay( `${dt.toLocaleDateString('en-us', { month: 'long' })} ${year}`);
     const daysArr =[];
     const days1Arr= [];
     for(let i = 1; i<45;i++){
      daysArr.push({
        value: 'div'+i,
        event: eventForDate(i),
        id: i,
        
      });
     }
     setDays(daysArr)
    },[events]);

    const eventForDate1 = id => events1.find(e => e.id === id)
    useEffect(() =>{
        localStorage.setItem('events1', JSON.stringify(events1));
    },[events1]);

    useEffect(() => {
       const days1Arr =[];
       for(let i = 1; i<45;i++){
        days1Arr.push({
          value: 'div'+i,
          event: eventForDate1(i),
          id: i,
          
        });
       }
       setDays1(days1Arr)
      },[events1]);
    //   useEffect(() => {
    //     const daysArr2 =[];
    //     for(let i = 1; i<45;i++){
    //      daysArr2.push({
    //        value: 'div'+i,
    //        event: eventForDate(i),
    //        id: i,
           
    //      });
    //     }
    //     setDays(daysArr2)
    //    },[events]);
    //    useEffect(() => {
    //     const daysArr3 =[];
    //     for(let i = 1; i<45;i++){
    //      daysArr3.push({
    //        value: 'div'+i,
    //        event: eventForDate(i),
    //        id: i,
           
    //      });
    //     }
    //     setDays(daysArr3)
    //    },[events]);
    //    useEffect(() => {
    //     const daysArr4 =[];
    //     for(let i = 1; i<45;i++){
    //      daysArr4.push({
    //        value: 'div'+i,
    //        event: eventForDate(i),
    //        id: i,
           
    //      });
    //     }
    //     setDays(daysArr4)
    //    },[events]);
    //    useEffect(() => {
    //     const daysArr5 =[];
    //     for(let i = 1; i<45;i++){
    //      daysArr5.push({
    //        value: 'div'+i,
    //        event: eventForDate(i),
    //        id: i,
           
    //      });
    //     }
    //     setDays(daysArr5)
    //    },[events]);


    return(
      <>
    <div id="container">
    <h1>Grade de Salas</h1>

    {/* <div id="weekdays">
      
      <div>Segunda</div>
      <div>Terça</div>
      <div>Quarta</div>
      <div>Quinta</div>
      <div>Sexta</div>
      
    </div> */}
    <div id="box">
    <div id="calendar">
      <div className="weekdays">Salas</div>
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
    <div id="calendar1">  
    <div className="weekdays">Segunda-Feira</div>    
        {days1.map((d, index) =>(
            <Day1
            key = {index}
            day = {d}
            onClick={() =>{                
              setClicked(d.id);
                
            }
            }
            />
        ))}
    </div>
    <div id="calendar2"> 
    <div className="weekdays">Terça-Feira</div>    
        {days.map((d, index) =>(
            <Day
            key = {index}
            day = {d}
            onClick={() =>{                
              setClicked(d);
                
            }
            }
            />
        ))}
    </div>
    <div id="calendar3">   
    <div className="weekdays">Quarta-Feira</div>      
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
    <div id="calendar4">  
    <div className="weekdays">Quinta-Feira</div>       
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
    <div id="calendar5">    
    <div className="weekdays">Sexta-Feira</div>    
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
  </div>
  {
    clicked && !eventForDate(clicked) && 
    <NewEventModal 
    onClose={() => setClicked(null)}
    onSave={
      title =>{
        setEvents([...events, {title, id:clicked}]);
        // setEvents1([...events1, {title, id:clicked}]);
        
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
            // setEvents1(events1.filter(e => e.id !== clicked));
            setClicked(null);
          }}
        />
      }
       {
    clicked && !eventForDate1(clicked) &&
    <NewEventModal 
    onClose={() => setClicked(null)}
    onSave={
      title =>{
        
        setEvents1([...events1, {title, id:clicked}]);
        
        setClicked(null);
      }
    }
    />
  }
  {
        clicked && eventForDate1(clicked) &&
        <DeleteEventModal 
          eventText={eventForDate1(clicked).title}
          onClose={() => setClicked(null)}
          onDelete={() => {
            
            setEvents1(events1.filter(e => e.id !== clicked));
            setClicked(null);
          }}
        />
      }
  </>
  );
};
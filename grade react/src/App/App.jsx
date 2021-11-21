import React, {useEffect, useState} from 'react';
// import { CalendarHeader } from '../CalendarHeader/CalendarHeader';
import { Day } from '../Day/Day';
import { NewEventModal } from '../NewEventModal';
import { DeleteEventModal } from '../DeleteEventModal';

export const App = () => {
    
    
    const[days, setDays] = useState([]);
    
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
    
     const daysArr =[];
     for(let i = 1; i<=390;i++){
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
      <div id="cabecalho">
      <div id="logo"></div>
      <div id="titulo">
      <h1>Grade de Salas</h1>
      </div>
      <div id="lista">
      <ul>
        <li>Anotações em vermelho indicam a ausência do profissional</li>
        <li>Anotações em azul indicam a reposição de horas do profissional </li>
        <li>Anotações em verde indicam a atendimento em salas alternadas</li>
        <li>Anotações em laranja indicam férias do profissional</li>
      </ul>
      </div>
      </div>
    <div id="weekdays">
    
      {/* <h1 id="blank"></h1> */}
      <div id="weekdays2">
        
      <div className="nome">Segunda</div>
      <div className="nome">Terça</div>
      <div className="nome">Quarta</div>
      <div className="nome">Quinta</div>
      <div className="nome">Sexta</div>
      </div>
      <div id="periodo">
      <div id="blank">    </div>
        <div className="pp">Manhã</div><div className="pp">Tarde</div>
        <div className="pp">Manhã</div><div className="pp">Tarde</div>
        <div className="pp">Manhã</div><div className="pp">Tarde</div>
        <div className="pp">Manhã</div><div className="pp">Tarde</div>
        <div className="pp">Manhã</div><div className="pp">Tarde</div>
      </div> 
      
    </div>
    <div id="localizacao">
      <div className="salas">Salas<div className="nome"></div></div>
      <div className="salas">01(b)<div className="nome">USG 1</div></div>
      <div className="salas">01(c)<div className="nome">USG 2</div></div>
      <div className="salas">01(f)<div className="nome">USG 3</div></div> 
      <div className="salas">01(d)<div className="nome">Mamografia</div></div>
      <div className="salas">01(e)<div className="nome">Raio X</div></div>
      <div className="salas">02<div className="nome">Fisioterapia</div></div>
      <div className="salas">07<div className="nome">ECG / Mapa / Holter</div></div>
      <div className="salas">08<div className="nome"></div></div> 
      <div className="salas">09<div className="nome">Curativo</div></div>
      <div className="salas">10<div className="nome"></div></div>
      <div className="salas">11<div className="nome">Cons. / EEG</div></div>
      <div className="salas">12<div className="nome"></div></div>
      <div className="salas">13<div className="nome"></div></div> 
      <div className="salas">14<div className="nome">Teste Ergométrico</div></div>
      <div className="salas">15<div className="nome"></div></div>
      <div className="salas">16<div className="nome"></div></div>
      <div className="salas">17<div className="nome">Nutrição</div></div>
      <div className="salas">18<div className="nome">Psicologia</div></div> 
      <div className="salas">19<div className="nome">Cons. / ENMG</div></div>
      <div className="salas">20<div className="nome">Urologia</div></div>
      <div className="salas">21<div className="nome">Campimetria</div></div>
      <div className="salas">22(a)<div className="nome">Oftalmo 1</div></div>
      <div className="salas">22(b)<div className="nome">Oftalmo 2</div></div> 
      <div className="salas">23<div className="nome">Cons. / Espiro.</div></div>
      <div className="salas">25<div className="nome">Enfermagem</div></div>
      <div className="salas">26<div className="nome">Fono / Audio</div></div>
      <div className="salas">27<div className="nome"></div></div>
      <div className="salas">28<div className="nome"></div></div> 
      <div className="salas">29<div className="nome"></div></div>
      <div className="salas">30<div className="nome"></div></div>
      <div className="salas">31<div className="nome"></div></div>
      <div className="salas">32<div className="nome"></div></div>
      <div className="salas">33<div className="nome"></div></div> 
      <div className="salas">34<div className="nome">Acupuntura</div></div>
      <div className="salas">35<div className="nome">Otorrino</div></div>
      <div className="salas">36(a)<div className="nome">Bronco / Naso / Endoscopia</div></div>
      <div className="salas">36(c)<div className="nome">Colono / Endoscopia</div></div>
      <div className="salas">36(e)<div className="nome">Procedimentos</div></div>      
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
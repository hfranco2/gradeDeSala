import React, { useEffect, useState } from "react";
import { Day } from "../Day/Day";
import { NewEventModal } from "../NewEventModal";
import { DeleteEventModal } from "../DeleteEventModal";
import PagesLogin from "../pages/Login/Login";
import { Route, useHistory } from "react-router";
import { Link } from "react-router-dom";
import Login from "../pages/Login/Login";

export const App = () => {
  const [days, setDays] = useState([]);
  const history = useHistory();
  const [clicked, setClicked] = useState();

  let [events, setEvents] = useState(
    localStorage.getItem("events")
      ? JSON.parse(localStorage.getItem("events"))
      : []
  );
  let [spe, setSpe] = useState(
    localStorage.getItem("spe") ? JSON.parse(localStorage.getItem("spe")) : []
  );
  let [time, setTime] = useState(
    localStorage.getItem("time") ? JSON.parse(localStorage.getItem("time")) : []
  );
  let [status, setStatus] = useState(
    localStorage.getItem("status")
      ? JSON.parse(localStorage.getItem("status"))
      : []
  );
  let eventForDate = (id) => events.find((e) => e.id === id);
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);
  let eventForDate1 = (id) => spe.find((s) => s.id === id);
  useEffect(() => {
    localStorage.setItem("spe", JSON.stringify(spe));
  }, [spe]);
  let eventForDate2 = (id) => time.find((t) => t.id === id);
  useEffect(() => {
    localStorage.setItem("time", JSON.stringify(time));
  }, [time]);
  let eventForDate3 = (id) => status.find((a) => a.id === id);
  useEffect(() => {
    localStorage.setItem("status", JSON.stringify(status));
  }, [status]);

  useEffect(
    () => {
      const daysArr = [];
      for (let i = 1; i <= 380; i++) {
        daysArr.push({
          value: "div" + i,
          event: eventForDate(i),
          id: i,
          spe: eventForDate1(i),
          time: eventForDate2(i),
          status: eventForDate3(i),
        });
      }
      setDays(daysArr);
    },
    [events],
    [spe],
    [time],
    [status]
  );

  function isAut() {
    let tk = null;
    tk = JSON.parse(sessionStorage.getItem("token"));
    if (tk == 1234) {
      return true;
    } else {
      return false;
    }
  }
  console.log(isAut());
  return (
    <>
      <div id="container">
        <div id="cabecalho">
          <div id="logo"></div>
          <Link to="/login">Login</Link>
          <div id="titulo">
            <h1>Grade de Salas</h1>
          </div>

          <div id="lista">
            <ul>
              <li>Anotações em vermelho indicam a ausência do profissional</li>
              <li>
                Anotações em azul indicam a reposição de horas do profissional{" "}
              </li>
              <li>
                Anotações em verde indicam a atendimento em salas alternadas
              </li>
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
            <div id="blank"> </div>
            <div className="pp">Manhã</div>
            <div className="pp">Tarde</div>
            <div className="pp">Manhã</div>
            <div className="pp">Tarde</div>
            <div className="pp">Manhã</div>
            <div className="pp">Tarde</div>
            <div className="pp">Manhã</div>
            <div className="pp">Tarde</div>
            <div className="pp">Manhã</div>
            <div className="pp">Tarde</div>
          </div>
        </div>
        <div id="localizacao">
          <div className="salas">
            01(b)<div className="nome">USG 1</div>
          </div>
          <div className="salas">
            01(c)<div className="nome">USG 2</div>
          </div>
          <div className="salas">
            01(f)<div className="nome">USG 3</div>
          </div>
          <div className="salas">
            01(d)<div className="nome">Mamografia</div>
          </div>
          <div className="salas">
            01(e)<div className="nome">Raio X</div>
          </div>
          <div className="salas">
            02<div className="nome">Fisioterapia</div>
          </div>
          <div className="salas">
            07<div className="nome">ECG / Mapa / Holter</div>
          </div>
          <div className="salas">
            08<div className="nome"></div>
          </div>
          <div className="salas">
            09<div className="nome">Curativo</div>
          </div>
          <div className="salas">
            10<div className="nome"></div>
          </div>
          <div className="salas">
            11<div className="nome">Cons. / EEG</div>
          </div>
          <div className="salas">
            12<div className="nome"></div>
          </div>
          <div className="salas">
            13<div className="nome"></div>
          </div>
          <div className="salas">
            14<div className="nome">Teste Ergométrico</div>
          </div>
          <div className="salas">
            15<div className="nome"></div>
          </div>
          <div className="salas">
            16<div className="nome"></div>
          </div>
          <div className="salas">
            17<div className="nome">Nutrição</div>
          </div>
          <div className="salas">
            18<div className="nome">Psicologia</div>
          </div>
          <div className="salas">
            19<div className="nome">Cons. / ENMG</div>
          </div>
          <div className="salas">
            20<div className="nome">Urologia</div>
          </div>
          <div className="salas">
            21<div className="nome">Campimetria</div>
          </div>
          <div className="salas">
            22(a)<div className="nome">Oftalmo 1</div>
          </div>
          <div className="salas">
            22(b)<div className="nome">Oftalmo 2</div>
          </div>
          <div className="salas">
            23<div className="nome">Cons. / Espiro.</div>
          </div>
          <div className="salas">
            25<div className="nome">Enfermagem</div>
          </div>
          <div className="salas">
            26<div className="nome">Fono / Audio</div>
          </div>
          <div className="salas">
            27<div className="nome"></div>
          </div>
          <div className="salas">
            28<div className="nome"></div>
          </div>
          <div className="salas">
            29<div className="nome"></div>
          </div>
          <div className="salas">
            30<div className="nome"></div>
          </div>
          <div className="salas">
            31<div className="nome"></div>
          </div>
          <div className="salas">
            32<div className="nome"></div>
          </div>
          <div className="salas">
            33<div className="nome"></div>
          </div>
          <div className="salas">
            34<div className="nome">Acupuntura</div>
          </div>
          <div className="salas">
            35<div className="nome">Otorrino</div>
          </div>
          <div className="salas">
            36(a)<div className="nome">Bronco / Naso / Endoscopia</div>
          </div>
          <div className="salas">
            36(c)<div className="nome">Colono / Endoscopia</div>
          </div>
          <div className="salas">
            36(e)<div className="nome">Procedimentos</div>
          </div>
        </div>

        <div id="calendar">
          {days.map((d, index) => (
            <Day
              key={index}
              day={d}
              onClick={() => {
                setClicked(d.id);
              }}
            />
          ))}
        </div>
      </div>
      {clicked && !eventForDate(clicked) && isAut(true) && (
        <NewEventModal
          onClose={() => setClicked(null)}
          onSave={(title) => {
            setEvents([...events, { title, id: clicked }]);
            setClicked(null);
          }}
          onSave1={(vspe) => {
            setSpe([...spe, { vspe, id: clicked }]);
            setClicked(null);
          }}
          onSave2={(vtime) => {
            setTime([...time, { vtime, id: clicked }]);
            setClicked(null);
          }}
          onSave3={(vstatus) => {
            setStatus([...status, { vstatus, id: clicked }]);
            setClicked(null);
          }}
        />
      )}
      {clicked && eventForDate(clicked) && isAut(true) && (
        <DeleteEventModal
          eventText={
            eventForDate(clicked).title +
            eventForDate1(clicked).vspe +
            eventForDate2(clicked).vtime +
            eventForDate3(clicked).vstatus
          }
          onClose={() => setClicked(null)}
          onDelete={() => {
            setEvents(events.filter((e) => e.id !== clicked));
            setSpe(spe.filter((e) => e.id !== clicked));
            setTime(time.filter((e) => e.id !== clicked));
            setStatus(status.filter((e) => e.id !== clicked));
            setClicked(null);
          }}
        />
      )}
    </>
  );
};

export default App;

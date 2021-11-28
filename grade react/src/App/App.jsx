import React, { useEffect, useState } from "react";
import { Day } from "../Day/Day";
import { NewEventModal } from "../NewEventModal";
import { DeleteEventModal } from "../DeleteEventModal";
import PagesLogin from "../pages/Login/Login";
import { Route, useHistory } from "react-router";
import { Link } from "react-router-dom";
import Login from "../pages/Login/Login";

// import api from "../api/axios";
import axios from "axios";

export const App = () => {
  const uri = "http://localhost:4001";

  //Exemplo para chamar a api
  const fetchAgendamentos = async () => {
    // Send GET request to 'books/all' endpoint

    let retorno = await axios.get(`${uri}/agendamento/all`);
    return await retorno.data;
  };

  const agendamentoCreate = async (nome, especialidade, horario, status) => {
    // Send POST request to 'books/create' endpoint
    await axios
      .post(`${uri}/agendamento/create`, {
        nome: nome,
        especialidade: especialidade,
        horario: horario,
        status: 1,
      })
      .catch((error) =>
        console.error(`There was an error creating the ${nome} book: ${error}`)
      );
  };

  const agendamentoUpdate = async (
    id,
    nome,
    especialidade,
    horario,
    status
  ) => {
    // Send POST request to 'books/create' endpoint
    await axios
      .put(`${uri}/agendamento/update`, {
        id: id,
        nome: nome,
        especialidade: especialidade,
        horario: horario,
        status: status,
      })
      .catch((error) =>
        console.error(`There was an error creating the ${nome} book: ${error}`)
      );
  };
  const agendamentoDelete = async (id) => {
    console.log(id);
    await axios
      .put(`${uri}/agendamento/clear`, {
        id: id,
      })
      .catch((error) =>
        console.error(`There was an error creating the ${nome} book: ${error}`)
      );
  };
  let retorno = [];

  const [testes, setTestes] = useState([]);

  const [days, setDays] = useState([]);
  const history = useHistory();
  const [clicked, setClicked] = useState();

  // useEffect(() => {
  //   fetchAgendamentos()
  //     .then((response) => {
  //       setTestes(response.map((n) => n.nome));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // let [events, setEvents] = useState([]);
  // let [spe, setSpe] = useState([]);
  // let [time, setTime] = useState([]);
  // let [status, setStatus] = useState([]);
  let eventForDate = (id) => days.find((e) => e.id === id);
  // useEffect(() => {
  //   fetchAgendamentos()
  //     .then((response) => {
  //       setEvents(response.map((n) => n.nome));
  //       setSpe(response.map((n) => n.especialidade));
  //       setTime(response.map((n) => n.horario));
  //       setStatus(response.map((n) => n.status));
  //       // console.log(response)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // console.log(testes)
  // }, []);
  // let eventForDate1 = (id) => spe.find((s) => s.id === id);
  // useEffect(() => {
  //   fetchAgendamentos()
  //     .then((response) => {
  //       setSpe(response.map((n) => n.especialidade));
  //       // console.log(response)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   // console.log(testes)
  // }, [spe]);
  // let eventForDate2 = (id) => time.find((t) => t.id === id);
  // useEffect(() => {
  //   fetchAgendamentos()
  //     .then((response) => {
  //       setTime(response.map((n) => n.horario));
  //       // console.log(response)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   // console.log(testes)
  // }, [time]);
  // let eventForDate3 = (id) => status.find((a) => a.id === id);
  // useEffect(() => {
  //   fetchAgendamentos()
  //     .then((response) => {
  //       setStatus(response.map((n) => n.status));
  //       // console.log(response)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   // console.log(testes)
  // }, [status]);

  useEffect(() => {
    fetchAgendamentos()
      .then((response) => {
        const daysArr = [];
        // console.log(response)
        for (let i = 0; i < 380; i++) {
          daysArr.push({
            value: "div" + i,
            event: response[i].nome,
            id: response[i].id,
            spe: response[i].especialidade,
            time: response[i].horario,
            status: response[i].status,
          });
        }
        setDays(daysArr);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  function isAut() {
    let tk = null;
    tk = JSON.parse(sessionStorage.getItem("token"));
    if (tk == 1234) {
      return true;
    } else {
      return false;
    }
  }
  // console.log(isAut());
  return (
    <>
      <div id="container">
        <div id="cabecalho">
          <div id="logo"></div>

          <div id="titulo">
            <h1>Grade de Salas</h1>
          </div>

          <div id="lista">
            <ul>
              <li>
                Anotações em <span id="red">vermelho</span> indicam a ausência
                do profissional
              </li>
              <li>
                Anotações em <span id="blue">azul </span>indicam a reposição de
                horas do profissional
              </li>
              <li>
                Anotações em <span id="green">verde</span> indicam a atendimento
                em salas alternadas
              </li>
              <li>
                Anotações em <span id="orange">laranja</span> indicam férias do
                profissional
              </li>
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
            <div className="pp"> Manhã </div>
            <div className="pp"> Tarde </div>
            <div className="pp"> Manhã </div>
            <div className="pp"> Tarde </div>
            <div className="pp"> Manhã </div>
            <div className="pp"> Tarde </div>
            <div className="pp"> Manhã </div>
            <div className="pp"> Tarde </div>
            <div className="pp"> Manhã </div>
            <div className="pp"> Tarde </div>
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
              status={d.status}
              onClick={() => {
                setClicked(d.id);
                console.log(d);
              }}
            />
          ))}
        </div>
        <Link to="/login">Login</Link>
      </div>
      {clicked && isAut(true) && (
        <NewEventModal
          onClose={() => setClicked(null)}
          onSave={(title, vspe, vtime, vstatus) => {
            setDays([...days, { title, vspe, vtime, vstatus, id: clicked }]);
            agendamentoUpdate(clicked, title, vspe, vtime, vstatus);
            console.log(vstatus);
            setClicked(null);
          }}
          onDelete={() => {
            agendamentoDelete(clicked)
              .then((res) => {
                // console.log(res);
                // fetchAgendamentos().then((res) => {
                //   console.log(res);
                // });
                // console.log(res);
                // console.log(clicked);
              })
              .catch((erro) => {
                console.log(erro);
              });
            setDays(days.filter((e) => e.id !== clicked));
            setClicked(null);
          }}
          atitle={() => {
            return eventForDate(clicked).event;
          }}
          avspe={() => {
            return eventForDate(clicked).spe;
          }}
          avtime={() => {
            return eventForDate(clicked).time;
          }}
          astatus={() => {
            return eventForDate(clicked).status;
          }}
        />
      )}
      {/* {clicked && eventForDate(clicked) && isAut(true) && (
        <DeleteEventModal
          eventText={
            eventForDate(clicked).title +
            " " +
            eventForDate(clicked).vspe +
            " " +
            eventForDate(clicked).vtime
          }
          onClose={() => setClicked(null)}
          onDelete={() => {
            agendamentoDelete(clicked).then(() => {
              setDays(days.filter((e) => e.id !== clicked));
              setClicked(null);
            });
          }}
        />
      )} */}
    </>
  );
};

export default App;

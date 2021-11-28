import React, { useState } from "react";

export const NewEventModal = ({
  onSave,
  onClose,
  onDelete,
  atitle,
  avspe,
  avtime,
  avstatus,
}) => {
  let [title, setTitle] = useState(atitle);
  let [vspe, setSpe] = useState(avspe);
  let [vtime, setTime] = useState(avtime);
  let [vstatus, setStatus] = useState(avstatus);
  let [error, setError] = useState(false);
  // vstatus = "1";
  render: return (
    <>
      <div id="newEventModal">
        <h2>Evento</h2>

        <input
          className={error ? "error" : ""}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="eventTitleInput"
          placeholder="Profisional"
        />
        <input
          className={error ? "error" : ""}
          value={vspe}
          onChange={(e) => setSpe(e.target.value)}
          id="eventTitleInput1"
          placeholder="Especialidade"
        />
        <input
          className={error ? "error" : ""}
          value={vtime}
          onChange={(e) => setTime(e.target.value)}
          id="eventTitleInput2"
          placeholder="Horario"
        />
        <select
          name="status"
          className={error ? "error" : ""}
          value={vstatus}
          onChange={(e) => setStatus(e.target.value)}
          id="eventTitleInput2"
        >
          <option value="1">Normal</option>
          <option value="2">Ausênsia</option>
          <option value="3">Reposição</option>
          <option value="4">Alternado</option>
          <option value="5">Férias</option>
        </select>
        <button
          onClick={() => {
            onSave(title, vspe, vtime, vstatus);
          }}
          id="saveButton"
        >
          Salvar
        </button>

        <button onClick={onClose} id="cancelButton">
          Cancelar
        </button>
        <button onClick={onDelete} id="deleteButton">
          Deletar
        </button>
      </div>

      <div id="modalBackDrop"></div>
    </>
  );
};

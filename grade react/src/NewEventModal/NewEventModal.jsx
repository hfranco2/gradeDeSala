
import React, { useState } from 'react';

export const NewEventModal = ({ onSave, onClose }) => {
  const [title, setTitle] = useState('');
  const [spe, setSpe] = useState('');
  const [time, setTime] = useState('');
  const [error, setError] = useState(false);

  return(
    <>
      <div id="newEventModal">
        <h2>Novo Evento</h2>

        <input 
          className={error ? 'error' : ''}
          value={title} 
          onChange={e => setTitle(e.target.value)} 
          id="eventTitleInput" 
          placeholder="Profisional" 
        />
         <input 
          className={error ? 'error' : ''}
          value={spe} 
          onChange={e => setSpe(e.target.value)} 
          id="eventTitleInput1" 
          placeholder="Especialidade" 
        />
         <input 
          className={error ? 'error' : ''}
          value={time} 
          onChange={e => setTime(e.target.value)} 
          id="eventTitleInput2" 
          placeholder="Horario" 
        />
        <select name="status" >
          <option value="1">Normal</option>
          <option value="2">Ausênsia</option>
          <option value="3">Reposição</option>
          <option value="4">Alternado</option>
          <option value="5">Férias</option>
          </select>
        <button 
          onClick={() => {
            if (title) {
              setError(false);
              onSave(title,spe,time);
            } else {
              setError(true);
            }
          }} 
          id="saveButton">Salvar</button>


        <button 
          onClick={onClose}
          id="cancelButton">Cancelar</button>

         
      </div>

      <div id="modalBackDrop"></div>
    </>
  );
};
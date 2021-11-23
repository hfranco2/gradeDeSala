
import React, { useState } from 'react';

export const NewEventModal = ({ onSave, onClose, onSave1, onSave2, onSave3  }) => {
  const [title, setTitle] = useState('');
  const [vspe, setSpe] = useState('');
  const [vtime, setTime] = useState('');
  const [vstatus, setStatus] = useState('1');
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
          value={vspe} 
          onChange={e => setSpe(e.target.value)} 
          id="eventTitleInput1" 
          placeholder="Especialidade" 
        />
         <input 
          className={error ? 'error' : ''}
          value={vtime} 
          onChange={e => setTime(e.target.value)} 
          id="eventTitleInput2" 
          placeholder="Horario" 
        />
        <select name="status"
        className={error ? 'error' : ''}
          value={vstatus} 
          onChange={e => setStatus(e.target.value)} 
          id="eventTitleInput2" 
          placeholder="Horario" >
          <option value="1">Normal</option>
          <option value="2">Ausênsia</option>
          <option value="3">Reposição</option>
          <option value="4">Alternado</option>
          <option value="5">Férias</option>
          </select>
        <button 
          onClick={() => {
           
              onSave(title);        
              onSave1(vspe);
              onSave2(vtime);
              onSave3(vstatus);      
              // onSave(spe);
              // onSave(time);
              // onSave(status);

            
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
import React from 'react';

export const DeleteEventModal = ({ onDelete, eventText, onClose }) => {
  return(
    <>
      <div id="deleteEventModal">
        <h2>Evento</h2>

        <p id="eventText">{eventText}</p>

        <button onClick={onDelete} id="deleteButton">Excluir</button>
        <button onClick={onClose} id="closeButton">Fechar</button>
        <button onClick={onClose} id="closeButton">Alterar Status</button>
      </div>

      <div id="modalBackDrop"></div>
    </>
  );
};

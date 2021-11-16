// variaveis 

let cont = document.getElementById("container");
let clicked = null;
let events = localStorage.getItem('events') ?JSON.parse(localStorage.getItem('events')) : [];



//constantes
const calendar = document.getElementById('container');
const newEventModal = document.getElementById('newEventModal');
const deleteEventModal = document.getElementById('deleteEventModal');
const backDrop = document.getElementById('modalBackDrop');
const eventTitleInput = document.getElementById('eventTitleInput');
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
function openModal(x){
  clicked = x;

  const eventForDay = events.find(e => e.id == clicked);

  if (eventForDay){
    document.getElementById('eventText').innerHTML = eventForDay.title;
    deleteEventModal.style.display = 'block';
  }else{
    newEventModal.style.display = 'block';
  }
  backDrop.style.display = 'block';
}



calendar.innerHTML="";




 
for(var i = 1; i <456; ++i){
 var div = document.createElement("div");
 div.setAttribute("class", "square");
 div.setAttribute("id", "div" + i);


calendar.appendChild(div);
div.textContent = i;
let x = div.id;
const eventForDay = events.find(e => e.id == x);
  if (eventForDay){
    const eventDiv = document.createElement('div');
    eventDiv.classList.add('event')
    eventDiv.innerText = eventForDay.title;
    div.appendChild(eventDiv)
  }
div.addEventListener("click", () => openModal(x))
}
function closeModal() {
  eventTitleInput.classList.remove('error');
  newEventModal.style.display = 'none';
  deleteEventModal.style.display = 'none';
  backDrop.style.display = 'none';
  eventTitleInput.value = '';
  clicked = null;
  load();
}
function saveEvent(){
  if (eventTitleInput.value){
    eventTitleInput.classList.remove('erro');
    events.push({
      id: clicked,
      title:eventTitleInput.value,
    });
    localStorage.setItem('events', JSON.stringify(events));
    closeModal();
    
  }else{
    eventTitleInput.classList.add('erro');
  }
}
function deleteEvent() {
  events = events.filter(e => e.id !== clicked);
  localStorage.setItem('events', JSON.stringify(events));
  closeModal();
}
function initButtons(){
  document.getElementById('saveButton').addEventListener('click', saveEvent);
  document.getElementById('cancelButton').addEventListener('click', closeModal);
  document.getElementById('deleteButton').addEventListener('click', deleteEvent);
  document.getElementById('closeButton').addEventListener('click', closeModal);
}

initButtons();
load();


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
// const dt = new Date();
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

//função que  atualiza os status quando é salvo um evento
// function load(){
//   const dt = new Date();
//   const day = dt.getDate();
// const month = dt.getMonth();
// const year = dt.getFullYear();
// }

//funcção que cria os quadrados que vao ser as salas
// document.getElementById('monthDisplay').innerText = `${dt.toLocaleDateString('en-us',{month:'long'})} ${year}`

// document.getElementById('monthDisplay').innerText = 
//     `${dt.toLocaleDateString('en-us', { month: 'long' })} ${year}`;

calendar.innerHTML="";

// function pegarId(){
//   document.querySelector(function(){
//     document.querySelector('div').click(function(){
//         var id = document.querySelector(this).attr('id');
//         return id;
//     });
// });


 
for(var i = 1; i <456; ++i){
 var div = document.createElement("div");
 div.setAttribute("class", "square");
 div.setAttribute("id", "div" + i);

//  if ( i=1,i+11){
  
//  }else{
//   div.classList.add("sala")
//  }
//  var h1 = document.createElement("h1");
//    h1.textContent = i;
//    div.appendChild(h1);
//    cont.appendChild(div);
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


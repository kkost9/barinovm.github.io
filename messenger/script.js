
let chatContainer = document.querySelector('.chat__contentWrapper');

let items = chatContainer.children;

let newMessageForm = document.querySelector('.chat__form');
let newMessageInput = newMessageForm.querySelector('.chat__input');

let messageTemplate = document.querySelector('#message-template').content;
let newMessageTemplate = messageTemplate.querySelector('.chat__message');



let deleteMessageHandler = function(item) {
  let closeButton = item.querySelector('.chat__messageButton');
  closeButton.addEventListener('click', function() {
    item.remove();
  });
}

for (let i = 0; i < items.length; i++) {
  deleteMessageHandler(items[i]);
}

newMessageForm.addEventListener('submit', function(evt) {
  evt.preventDefault();

  let messageText = newMessageInput.value;

  let newMessage = newMessageTemplate.cloneNode(true);
  
  newMessage.querySelector('.chat__messageText').textContent = messageText;

  chatContainer.appendChild(newMessage);
  
  deleteMessageHandler(newMessage);
  
  newMessageInput.value = '';
});

let addMenuButton = document.querySelector('.chat__clip');
let removeMenuLink = document.querySelector('.cancel');
let addMenu = document.querySelector('.addfile');
let chat = document.querySelector('.chat');

addMenuButton.addEventListener('click', function(){
  addMenu.classList.add('active'); 
  chat.classList.add('active');
});

removeMenuLink.addEventListener('click', function(){
  addMenu.classList.remove('active'); 
  chat.classList.remove('active');
});










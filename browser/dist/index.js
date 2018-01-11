// // TODO Convert this file to a React UI for easier state/functionality management

// let io = require('socket.io-client');
// let socket = io();

// let Messages = [];

// function emitMessage(message) {
//     socket.emit('chat message', message);
// }

// function updateMessageDisplay() {
//     let chat = document.getElementById('chatItems');

//     while(chat.hasChildNodes()) {
//         chat.removeChild(chat.firstChild);
//     }

//     // Rebuild all child nodes
//     // TODO Replace this functionality with React's state
//     Messages.forEach((message) => {
//         let newMessage = document.createElement('li');
//         newMessage.textContent = message.date + ': ' + message.message;
//         newMessage.classList.add('message');
//         chat.appendChild(newMessage);
//     });

//     chat.scrollTop = chat.scrollHeight;
// }

// function displayNewMessage(message) {
//     document.getElementById('text').value = null

//     let now = new Date()
//         .toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
    
//     Messages.push({
//         date: now,
//         message
//     });

//     updateMessageDisplay();
// }

// function submitMessage(text, callback) {
//     fetch('/api/message', {
//         method: 'post',
//         headers: {
//             'Accept': 'application/json, text/plain, */*',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             message: text
//         })
//     })
//     .then(res => res.json())
//     .then(res => {
//         console.log(res);
//         callback(null, res.message);
//         emitMessage(res.message)
//     })
//     .catch(callback)
// }


// function createMessage(text) {
//     submitMessage(text, (err, res) => {
//         if(err) {
//             console.log(err.status + ': ' + err.statusCode);
//         } else {
//             displayNewMessage(res);
//         }
//     });
// }

// function validInput(input) {
//     if(!input || input === '') {
//         return 'Input is empty or non existent!';
//     }
//     return true;
// }

// function handleSubmit(e) {
//     e.preventDefault();
//     var text = document.getElementById('text').value;
//     if(validInput(text) === true) {
//         createMessage(text);
//     } else {
//         console.log(validInput(text));
//     }
// }

// window.onload = () => {
//     document.getElementById('sendMessage').onclick = handleSubmit;
// }

let Messages = [];

function updateMessageDisplay() {
    let chat = document.getElementById('chatItems');

    // Clear all child nodes
    while(chat.hasChildNodes()) {
        chat.removeChild(chat.firstChild);
    }

    // Rebuild all child nodes
    Messages.forEach((message) => {
        let newMessage = document.createElement('li');
        newMessage.textContent = message.date + ': ' + message.message;
        chat.appendChild(newMessage);
    });
}

function displayNewMessage(message) {
    let now = new Date();
    now = now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
    Messages.push({
        date: now,
        message
    });
    updateMessageDisplay();
}

function submitMessage(message, callback) {
    fetch('http://localhost:8080/api/message', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: message
        })
    })
    .then(res => res.json())
    .then(res => {
        callback(null, res);
    })
    .catch(callback)
}

function createMessage(e) {
    e.preventDefault();
    var text = document.getElementById('text').value;
    if(!text || text === '') {
        // TODO Handle empty message (Maybe just do nothing)
        console.log('Textarea is empty!');
    } else {
        document.getElementById('text').value = null;
        submitMessage(text, (err, res) => {
            if(err || res.status !== 201) {
                console.log(err);
            } else {
                displayNewMessage(res.text);
            }
        });
    }
}

window.onload = () => {
    document.getElementById('sendMessage').onclick = createMessage;
}
let messages = [];
        
window.onload = function() {
    loadMessages();
    displayMessages();
};

function sendMessage() {
    const username = document.getElementById('username').value || 'User';
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value;
    
    if (!messageText) return;
    
    messages.push({
        username: username,
        text: messageText,
        time: new Date().toLocaleTimeString()
    });
    
    saveMessages();
    displayMessages();
    messageInput.value = '';
}

function displayMessages() {
    const container = document.getElementById('messages');
    container.innerHTML = '';
    
    for (let i = 0; i < messages.length; i++) {
        const message = messages[i];
        const div = document.createElement('div');
        div.className = 'message';
        div.innerHTML = message.time + ' <strong>' + message.username + ':</strong> ' + message.text;
        container.appendChild(div);
    }
    
    container.scrollTop = container.scrollHeight;
}

function saveMessages() {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
}
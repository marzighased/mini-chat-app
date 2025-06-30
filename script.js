let messages = [];
        
window.onload = function() {
    loadMessages();
    displayMessages();
};

function sendMessage() {
    const username = document.getElementById('username').value || 'User';
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value.trim();
    
    if (!messageText) {
        showError('Please write a message!');
        messageInput.focus();
        return;
    }
    
    hideError();
    
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

function loadMessages() {
    const saved = localStorage.getItem('chatMessages');
    if (saved) {
        messages = JSON.parse(saved);
    }
}

function clearChat() {
    if (confirm('Clear all messages?')) {
        messages = [];
        localStorage.removeItem('chatMessages');
        displayMessages();
    }
}

function showError(message) {
    const errorDiv = document.getElementById('errorMessage');
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
    
    setTimeout(function() {
        hideError();
    }, 3000);
}

function hideError() {
    document.getElementById('errorMessage').style.display = 'none';
}

if (messageText.length > 100) {
    showError('Message is too long! (max 100 characters)');
    return;
}

if (username.length < 2) {
    showError('Username must be at least 2 characters!');
    return;
}
    
 
//send with Enter Key//
document.getElementById('messageInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
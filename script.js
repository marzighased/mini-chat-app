let messages = [];
        
window.onload = function() {
    loadMessages();
    displayMessages();
};

function sendMessage() {
    const username = document.getElementById('username').value.trim();
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value.trim();
    
    if (messageText === '') return;
    
    const message = {
        username: username || 'User',
        text: messageText,
        time: new Date().toLocaleTimeString( 'en-US', {hour: '2-digit', minute: '2-digit'})
    };

    messages.push(message);
    saveMessages();
    displayMessages();
    
    messageInput.value = '';
    messageInput.focus();
}
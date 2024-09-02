// Efecto en los íconos de redes sociales
$(document).ready(function(){
    $(".social-icons a").hover(
      function() {
        $(this).find("i").css("transform", "scale(1.3)");
      }, function() {
        $(this).find("i").css("transform", "scale(1)");
      }
    );
});

// Enviar mensaje al hacer clic en el botón
document.getElementById('sendMessageButton').addEventListener('click', function() {
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value;

    if (messageText.trim() !== '') {
        const chatWindow = document.getElementById('chatWindow');
        const messageDiv = document.createElement('div');
        messageDiv.className = 'd-flex justify-content-end mb-3';

        const messageContent = document.createElement('div');
        messageContent.className = 'message bg-primary text-white p-2 rounded';
        messageContent.textContent = messageText;

        messageDiv.appendChild(messageContent);
        chatWindow.appendChild(messageDiv);

        messageInput.value = '';
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }
});
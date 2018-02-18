    document.getElementsByClassName('message')[0]
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("submit-button").click();
    }
    });

    function chatClosed() {
        document.getElementsByClassName('chat-header')[0].classList.remove('hide')
        document.getElementsByClassName('chat-content')[0].classList.remove('hide')
        document.getElementsByClassName('chat-input')[0].classList.remove('hide')
        document.getElementsByClassName('chat-closed')[0].classList.add('hide')
    }

    function chatHeader() {
        document.getElementsByClassName('chat-content')[0].classList.add('hide')
        document.getElementsByClassName('chat-header')[0].classList.add('hide')
        document.getElementsByClassName('chat-input')[0].classList.add('hide')
        document.getElementsByClassName('chat-closed')[0].classList.remove('hide')
    }

    function sendMessage() {
        var msg = document.getElementsByClassName('message')[0].value;
        msg = msg.replace(/\n/g, '');              
        if(msg == '') return;
        document.getElementsByClassName('message')[0].value = '';
        var mycontent = document.createElement("div");
        mycontent.className = 'userMessage';
        mycontent.appendChild(document.createTextNode(msg));
        document.getElementsByClassName('chat-content')[0].appendChild(mycontent);
    }
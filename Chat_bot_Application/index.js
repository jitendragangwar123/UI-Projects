let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You","Whats Your name?","Are You a student?"];
let chatContainerElement = document.getElementById("chatContainer");
let userInputElement = document.getElementById("userInput");


function sendMsgToChatbot() {
    let userMsg = userInputElement.value;
    let msgContainerElement = document.createElement("div");
    msgContainerElement.classList.add("msg-to-chatbot-container");
    chatContainerElement.appendChild(msgContainerElement);

    let userMsgElement = document.createElement("span");
    userMsgElement.textContent = userMsg;
    userMsgElement.classList.add("msg-to-chatbot");
    msgContainerElement.appendChild(userMsgElement);
    userInputElement.value = "";
    getReplyFromChatbot();
}

function getReplyFromChatbot() {
    let noOfChatbotMsgs = chatbotMsgList.length;
    let chatbotMsg = chatbotMsgList[Math.ceil(Math.random() * noOfChatbotMsgs) - 1];

    let msgContainerElement = document.createElement("div");
    msgContainerElement.classList.add("msg--from-chatbot-container");
    chatContainerElement.appendChild(msgContainerElement);

    let chatbotMsgElement = document.createElement("span");
    chatbotMsgElement.textContent = chatbotMsg;
    chatbotMsgElement.classList.add("msg-from-chatbot");
    msgContainerElement.appendChild(chatbotMsgElement);
}

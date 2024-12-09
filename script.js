// Chatbot functionality
const openChat = document.getElementById('open-chat');
const closeChat = document.getElementById('close-chat');
const chatbot = document.querySelector('.chatbot');
const sendButton = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const chatMessages = document.getElementById('chat-messages');

// Toggle chatbot visibility
openChat.addEventListener('click', () => chatbot.style.display = 'flex');
closeChat.addEventListener('click', () => chatbot.style.display = 'none');

// Handle user input
sendButton.addEventListener('click', () => {
  const userMessage = userInput.value.trim();
  if (!userMessage) return;

  // Display user message
  const userMessageElem = document.createElement('div');
  userMessageElem.classList.add('user-message');
  userMessageElem.textContent = userMessage;
  chatMessages.appendChild(userMessageElem);

  // Simulate AI response
  setTimeout(() => {
    const aiResponse = getAIResponse(userMessage);
    const aiMessageElem = document.createElement('div');
    aiMessageElem.classList.add('ai-message');
    aiMessageElem.textContent = aiResponse;
    chatMessages.appendChild(aiMessageElem);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 1000);

  userInput.value = '';
});

// Simulated AI response
function getAIResponse(message) {
  const responses = {
    "hello": "Hi there! How can I assist you?",
    "jobs": "There are many opportunities on LinkedIn. Check the 'Jobs' section.",
    "help": "I'm here to assist you! Ask me about networking, jobs, or skills.",
  };
  return responses[message.toLowerCase()] || "I'm not sure about that. Try asking something else!";
}

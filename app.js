// Application data and state
const appData = {
  "conversations": [
    {
      "id": 1,
      "name": "Sarah Johnson",
      "avatar": "https://i.pravatar.cc/150?img=1",
      "lastMessage": "Hey! Are we still meeting for coffee tomorrow?",
      "timestamp": "2m",
      "online": true,
      "unread": 2,
      "messages": [
        {"id": 1, "sender": "received", "text": "Hey! How's your day going?", "timestamp": "10:30 AM", "reactions": []},
        {"id": 2, "sender": "sent", "text": "Pretty good! Just working on some projects. You?", "timestamp": "10:32 AM", "reactions": []},
        {"id": 3, "sender": "received", "text": "Same here. So busy lately!", "timestamp": "10:35 AM", "reactions": ["❤️"]},
        {"id": 4, "sender": "sent", "text": "I know right! Want to grab coffee tomorrow?", "timestamp": "10:37 AM", "reactions": []},
        {"id": 5, "sender": "received", "text": "That sounds perfect! What time?", "timestamp": "10:40 AM", "reactions": []},
        {"id": 6, "sender": "sent", "text": "How about 2 PM at the usual place?", "timestamp": "10:42 AM", "reactions": []},
        {"id": 7, "sender": "received", "text": "Perfect! See you then ☕", "timestamp": "10:45 AM", "reactions": []},
        {"id": 8, "sender": "received", "text": "Hey! Are we still meeting for coffee tomorrow?", "timestamp": "2:15 PM", "reactions": []}
      ]
    },
    {
      "id": 2,
      "name": "Mike Chen",
      "avatar": "https://i.pravatar.cc/150?img=2",
      "lastMessage": "Thanks for the help with the presentation!",
      "timestamp": "1h",
      "online": false,
      "unread": 0,
      "messages": [
        {"id": 1, "sender": "sent", "text": "How did the presentation go?", "timestamp": "9:00 AM", "reactions": []},
        {"id": 2, "sender": "received", "text": "It went amazing! The client loved it", "timestamp": "9:15 AM", "reactions": []},
        {"id": 3, "sender": "sent", "text": "That's awesome! Congratulations! 🎉", "timestamp": "9:16 AM", "reactions": ["👍"]},
        {"id": 4, "sender": "received", "text": "Thanks for all your help preparing it", "timestamp": "9:20 AM", "reactions": []},
        {"id": 5, "sender": "received", "text": "Couldn't have done it without you", "timestamp": "9:21 AM", "reactions": []},
        {"id": 6, "sender": "sent", "text": "Team work makes the dream work! 💪", "timestamp": "9:25 AM", "reactions": []},
        {"id": 7, "sender": "received", "text": "Thanks for the help with the presentation!", "timestamp": "1:30 PM", "reactions": []}
      ]
    },
    {
      "id": 3,
      "name": "Emily Rodriguez",
      "avatar": "https://i.pravatar.cc/150?img=3",
      "lastMessage": "Can't wait for the weekend trip!",
      "timestamp": "3h",
      "online": true,
      "unread": 1,
      "messages": [
        {"id": 1, "sender": "received", "text": "Are you excited for our weekend getaway?", "timestamp": "Yesterday", "reactions": []},
        {"id": 2, "sender": "sent", "text": "So excited! I've been looking forward to this all month", "timestamp": "Yesterday", "reactions": []},
        {"id": 3, "sender": "received", "text": "Me too! I packed my hiking boots", "timestamp": "Yesterday", "reactions": []},
        {"id": 4, "sender": "sent", "text": "Perfect! The weather looks great too", "timestamp": "Yesterday", "reactions": []},
        {"id": 5, "sender": "received", "text": "I checked and it's supposed to be sunny all weekend", "timestamp": "11:00 AM", "reactions": []},
        {"id": 6, "sender": "sent", "text": "Amazing! This is going to be so much fun", "timestamp": "11:05 AM", "reactions": []},
        {"id": 7, "sender": "received", "text": "Can't wait for the weekend trip!", "timestamp": "11:30 AM", "reactions": []}
      ]
    },
    {
      "id": 4,
      "name": "Alex Thompson",
      "avatar": "https://i.pravatar.cc/150?img=4",
      "lastMessage": "The new restaurant was incredible!",
      "timestamp": "5h",
      "online": false,
      "unread": 0,
      "messages": [
        {"id": 1, "sender": "sent", "text": "How was dinner last night?", "timestamp": "8:00 AM", "reactions": []},
        {"id": 2, "sender": "received", "text": "Oh my god, it was amazing!", "timestamp": "8:30 AM", "reactions": []},
        {"id": 3, "sender": "received", "text": "The pasta was out of this world", "timestamp": "8:31 AM", "reactions": []},
        {"id": 4, "sender": "sent", "text": "I told you that place was good!", "timestamp": "8:35 AM", "reactions": []},
        {"id": 5, "sender": "received", "text": "You have excellent taste in restaurants", "timestamp": "8:40 AM", "reactions": ["❤️"]},
        {"id": 6, "sender": "sent", "text": "We should go together next time!", "timestamp": "8:42 AM", "reactions": []},
        {"id": 7, "sender": "received", "text": "The new restaurant was incredible!", "timestamp": "9:00 AM", "reactions": []}
      ]
    },
    {
      "id": 5,
      "name": "Jessica Park",
      "avatar": "https://i.pravatar.cc/150?img=5",
      "lastMessage": "See you at the gym tomorrow morning!",
      "timestamp": "1d",
      "online": true,
      "unread": 0,
      "messages": [
        {"id": 1, "sender": "received", "text": "Want to work out together tomorrow?", "timestamp": "Yesterday", "reactions": []},
        {"id": 2, "sender": "sent", "text": "Yes! What time?", "timestamp": "Yesterday", "reactions": []},
        {"id": 3, "sender": "received", "text": "How about 7 AM? I know it's early...", "timestamp": "Yesterday", "reactions": []},
        {"id": 4, "sender": "sent", "text": "Perfect! I need the motivation", "timestamp": "Yesterday", "reactions": []},
        {"id": 5, "sender": "received", "text": "Great! Let's do legs and cardio", "timestamp": "Yesterday", "reactions": []},
        {"id": 6, "sender": "sent", "text": "Sounds like a plan! 💪", "timestamp": "Yesterday", "reactions": []},
        {"id": 7, "sender": "received", "text": "See you at the gym tomorrow morning!", "timestamp": "Yesterday", "reactions": []}
      ]
    }
  ],
  "currentUser": "You",
  "emojis": ["😀", "😂", "❤️", "👍", "👎", "😍", "😢", "😮", "😡", "🎉", "💪", "☕", "🏃‍♂️", "📱", "💻"],
  "reactionEmojis": ["❤️", "👍", "😂", "😮", "😢", "😡"]
};

// Application state
let currentChat = null;
let editingMessage = null;
let isMobile = window.innerWidth <= 768;
let currentSearchTerm = '';

// DOM elements
const elements = {
  chatList: document.getElementById('chatList'),
  chatWindow: document.getElementById('chatWindow'),
  activeChat: document.getElementById('activeChat'),
  messagesContainer: document.getElementById('messagesContainer'),
  messageInput: document.getElementById('messageInput'),
  sendBtn: document.getElementById('sendBtn'),
  emojiBtn: document.getElementById('emojiBtn'),
  emojiPicker: document.getElementById('emojiPicker'),
  emojiGrid: document.getElementById('emojiGrid'),
  reactionPicker: document.getElementById('reactionPicker'),
  reactionGrid: document.getElementById('reactionGrid'),
  contextMenu: document.getElementById('contextMenu'),
  searchInput: document.getElementById('searchInput'),
  backBtn: document.getElementById('backBtn'),
  chatAvatar: document.getElementById('chatAvatar'),
  chatUserName: document.getElementById('chatUserName'),
  chatUserStatus: document.getElementById('chatUserStatus'),
  newChatBtn: document.querySelector('.new-chat-btn')
};

// Initialize the application
function init() {
  renderChatList();
  setupEventListeners();
  populateEmojiPicker();
  populateReactionPicker();
  checkMobile();
}

// Render the chat list
function renderChatList(searchTerm = '') {
  currentSearchTerm = searchTerm;
  const filteredConversations = appData.conversations.filter(conv =>
    conv.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    conv.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
  );

  elements.chatList.innerHTML = filteredConversations.map(conv => `
    <div class="chat-item ${currentChat?.id === conv.id ? 'active' : ''}" data-chat-id="${conv.id}">
      <div class="chat-avatar-container">
        <img src="${conv.avatar}" alt="${conv.name}" class="chat-avatar">
        ${conv.online ? '<div class="online-indicator"></div>' : ''}
      </div>
      <div class="chat-info">
        <div class="chat-name">${conv.name}</div>
        <div class="chat-last-message">${conv.lastMessage}</div>
      </div>
      <div class="chat-meta">
        <div class="chat-timestamp">${conv.timestamp}</div>
        ${conv.unread > 0 ? `<div class="unread-badge">${conv.unread}</div>` : ''}
      </div>
    </div>
  `).join('');
}

// Setup event listeners
function setupEventListeners() {
  // Chat list item clicks
  elements.chatList.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const chatItem = e.target.closest('.chat-item');
    if (chatItem) {
      const chatId = parseInt(chatItem.dataset.chatId);
      openChat(chatId);
    }
  });

  // Send message
  elements.sendBtn.addEventListener('click', (e) => {
    e.preventDefault();
    sendMessage();
  });
  
  elements.messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  // Emoji picker
  elements.emojiBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleEmojiPicker();
  });
  
  // Search functionality
  elements.searchInput.addEventListener('input', (e) => {
    renderChatList(e.target.value);
  });

  // New chat button
  if (elements.newChatBtn) {
    elements.newChatBtn.addEventListener('click', (e) => {
      e.preventDefault();
      alert('New chat feature would open a contact selector. This is a demo version.');
    });
  }

  // Back button for mobile
  if (elements.backBtn) {
    elements.backBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (isMobile) {
        closeChat();
      }
    });
  }

  // Message interactions
  elements.messagesContainer.addEventListener('dblclick', (e) => {
    e.preventDefault();
    const message = e.target.closest('.message');
    if (message) {
      const messageId = message.dataset.messageId;
      if (messageId) {
        addReaction(messageId, '❤️');
      }
    }
  });

  elements.messagesContainer.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    const message = e.target.closest('.message');
    if (message) {
      showContextMenu(e, message);
    }
  });

  // Click outside to close pickers and menus
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.emoji-picker') && !e.target.closest('.emoji-btn')) {
      hideEmojiPicker();
    }
    if (!e.target.closest('.context-menu')) {
      hideContextMenu();
    }
    if (!e.target.closest('.reaction-picker')) {
      hideReactionPicker();
    }
  });

  // Window resize
  window.addEventListener('resize', checkMobile);

  // Context menu actions
  elements.contextMenu.addEventListener('click', (e) => {
    const action = e.target.dataset.action;
    if (action && editingMessage) {
      handleContextAction(action, editingMessage);
    }
  });
}

// Open a chat
function openChat(chatId) {
  // Find the conversation by ID
  currentChat = appData.conversations.find(conv => conv.id === chatId);
  if (!currentChat) {
    console.error('Chat not found:', chatId);
    return;
  }

  console.log('Opening chat:', currentChat.name);

  // Mark as read
  currentChat.unread = 0;
  
  // Update UI
  document.querySelector('.no-chat-selected').classList.add('hidden');
  elements.activeChat.classList.remove('hidden');
  
  // Update chat header
  elements.chatAvatar.src = currentChat.avatar;
  elements.chatUserName.textContent = currentChat.name;
  elements.chatUserStatus.textContent = currentChat.online ? 'Active now' : 'Active 1h ago';
  
  // Render messages
  renderMessages();
  
  // Update active state in chat list
  renderChatList(currentSearchTerm);

  // Mobile: hide chat list
  if (isMobile) {
    document.querySelector('.chat-list-sidebar').classList.add('hidden');
  }

  // Focus message input
  setTimeout(() => {
    elements.messageInput.focus();
  }, 100);
}

// Close chat (mobile)
function closeChat() {
  currentChat = null;
  if (isMobile) {
    document.querySelector('.chat-list-sidebar').classList.remove('hidden');
    elements.activeChat.classList.add('hidden');
    document.querySelector('.no-chat-selected').classList.remove('hidden');
  }
}

// Render messages
function renderMessages() {
  if (!currentChat) return;

  let messagesHTML = '';
  let lastTimestamp = '';

  currentChat.messages.forEach((message, index) => {
    // Show timestamp if it's different from the previous message
    if (message.timestamp !== lastTimestamp) {
      messagesHTML += `<div class="message-timestamp">${message.timestamp}</div>`;
      lastTimestamp = message.timestamp;
    }
    
    const reactions = message.reactions.length > 0 ? `
      <div class="message-reactions">
        ${message.reactions.map(reaction => `
          <span class="reaction">${reaction}</span>
        `).join('')}
      </div>
    ` : '';

    messagesHTML += `
      <div class="message-group ${message.sender}">
        <div class="message ${message.sender}" data-message-id="${message.id}">
          ${message.text}
        </div>
        ${reactions}
      </div>
    `;
  });

  elements.messagesContainer.innerHTML = messagesHTML;
  scrollToBottom();
}

// Send message
function sendMessage() {
  const text = elements.messageInput.value.trim();
  if (!text || !currentChat) return;

  const newMessage = {
    id: Date.now(),
    sender: 'sent',
    text: text,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    reactions: []
  };

  currentChat.messages.push(newMessage);
  currentChat.lastMessage = text;
  currentChat.timestamp = 'now';

  elements.messageInput.value = '';
  renderMessages();
  renderChatList(currentSearchTerm);

  // Simulate response after 1-3 seconds
  setTimeout(() => {
    const responses = [
      "That sounds great!",
      "I agree completely",
      "Interesting point!",
      "Thanks for letting me know",
      "Looking forward to it!",
      "Absolutely!",
      "That makes sense",
      "Cool! 👍",
      "Nice!",
      "Got it!"
    ];
    
    const responseMessage = {
      id: Date.now() + 1,
      sender: 'received',
      text: responses[Math.floor(Math.random() * responses.length)],
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      reactions: []
    };

    currentChat.messages.push(responseMessage);
    currentChat.lastMessage = responseMessage.text;
    currentChat.timestamp = 'now';
    
    renderMessages();
    renderChatList(currentSearchTerm);
  }, Math.random() * 2000 + 1000);
}

// Scroll to bottom of messages
function scrollToBottom() {
  setTimeout(() => {
    elements.messagesContainer.scrollTop = elements.messagesContainer.scrollHeight;
  }, 10);
}

// Toggle emoji picker
function toggleEmojiPicker() {
  elements.emojiPicker.classList.toggle('hidden');
}

// Hide emoji picker
function hideEmojiPicker() {
  elements.emojiPicker.classList.add('hidden');
}

// Populate emoji picker
function populateEmojiPicker() {
  elements.emojiGrid.innerHTML = appData.emojis.map(emoji => `
    <button class="emoji-item" data-emoji="${emoji}">${emoji}</button>
  `).join('');

  elements.emojiGrid.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.target.classList.contains('emoji-item')) {
      insertEmoji(e.target.dataset.emoji);
      hideEmojiPicker();
    }
  });
}

// Insert emoji into message input
function insertEmoji(emoji) {
  const currentValue = elements.messageInput.value;
  const cursorPosition = elements.messageInput.selectionStart || currentValue.length;
  
  const newValue = currentValue.slice(0, cursorPosition) + emoji + currentValue.slice(cursorPosition);
  elements.messageInput.value = newValue;
  elements.messageInput.focus();
  
  // Set cursor position after emoji
  const newPosition = cursorPosition + emoji.length;
  setTimeout(() => {
    elements.messageInput.setSelectionRange(newPosition, newPosition);
  }, 10);
}

// Show context menu
function showContextMenu(event, message) {
  editingMessage = message;
  elements.contextMenu.classList.remove('hidden');
  elements.contextMenu.style.left = `${event.pageX}px`;
  elements.contextMenu.style.top = `${event.pageY}px`;
}

// Hide context menu
function hideContextMenu() {
  elements.contextMenu.classList.add('hidden');
  editingMessage = null;
}

// Handle context menu actions
function handleContextAction(action, message) {
  const messageId = parseInt(message.dataset.messageId);
  const messageData = currentChat.messages.find(msg => msg.id === messageId);
  
  switch (action) {
    case 'copy':
      if (navigator.clipboard) {
        navigator.clipboard.writeText(messageData.text);
      }
      break;
    case 'edit':
      if (messageData.sender === 'sent') {
        editMessage(messageId, message);
      } else {
        alert('You can only edit your own messages');
      }
      break;
    case 'delete':
      deleteMessage(messageId);
      break;
    case 'react':
      showReactionPicker(message);
      return; // Don't hide context menu yet
  }
  
  hideContextMenu();
}

// Edit message
function editMessage(messageId, messageElement) {
  const messageData = currentChat.messages.find(msg => msg.id === messageId);
  const newText = prompt('Edit message:', messageData.text);
  
  if (newText !== null && newText.trim() !== '') {
    messageData.text = newText.trim();
    renderMessages();
    
    // Update last message if this was the last one
    const lastMessage = currentChat.messages[currentChat.messages.length - 1];
    if (lastMessage.id === messageId) {
      currentChat.lastMessage = newText.trim();
    }
    renderChatList(currentSearchTerm);
  }
}

// Delete message
function deleteMessage(messageId) {
  if (confirm('Delete this message?')) {
    currentChat.messages = currentChat.messages.filter(msg => msg.id !== messageId);
    renderMessages();
    
    // Update last message in chat list
    if (currentChat.messages.length > 0) {
      const lastMessage = currentChat.messages[currentChat.messages.length - 1];
      currentChat.lastMessage = lastMessage.text;
    } else {
      currentChat.lastMessage = 'No messages';
    }
    renderChatList(currentSearchTerm);
  }
}

// Show reaction picker
function showReactionPicker(message) {
  elements.reactionPicker.classList.remove('hidden');
  const rect = message.getBoundingClientRect();
  elements.reactionPicker.style.left = `${rect.left}px`;
  elements.reactionPicker.style.top = `${rect.top - 60}px`;
  elements.reactionPicker.dataset.messageId = message.dataset.messageId;
}

// Hide reaction picker
function hideReactionPicker() {
  elements.reactionPicker.classList.add('hidden');
}

// Populate reaction picker
function populateReactionPicker() {
  elements.reactionGrid.innerHTML = appData.reactionEmojis.map(emoji => `
    <button class="reaction-item" data-emoji="${emoji}">${emoji}</button>
  `).join('');

  elements.reactionGrid.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.target.classList.contains('reaction-item')) {
      const messageId = elements.reactionPicker.dataset.messageId;
      const emoji = e.target.dataset.emoji;
      addReaction(messageId, emoji);
      hideReactionPicker();
      hideContextMenu();
    }
  });
}

// Add reaction to message
function addReaction(messageId, emoji) {
  const messageData = currentChat.messages.find(msg => msg.id === parseInt(messageId));
  if (!messageData) return;

  if (!messageData.reactions.includes(emoji)) {
    messageData.reactions.push(emoji);
    renderMessages();
  }
}

// Check if mobile
function checkMobile() {
  const wasMobile = isMobile;
  isMobile = window.innerWidth <= 768;
  
  if (wasMobile !== isMobile) {
    if (!isMobile) {
      // Desktop: show sidebar
      document.querySelector('.chat-list-sidebar').classList.remove('hidden');
    }
  }
}

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
  // Escape key to close pickers and menus
  if (e.key === 'Escape') {
    hideEmojiPicker();
    hideContextMenu();
    hideReactionPicker();
  }
  
  // Ctrl/Cmd + K to focus search
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    elements.searchInput.focus();
  }
});

// Initialize the application when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
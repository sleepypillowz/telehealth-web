// Chat.js
import React, { useState } from 'react';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };

  return (

    <div className="absolute bottom-0 right-0 mr-8 flex max-h-64 max-w-64 flex-col overflow-y-auto rounded-lg border-gray-200 bg-gray-100">
      <div className='sticky top-0 bg-gray-100'>
        <span className='font-semibold text-gray-900'>Alexander Acojido</span>
      </div>

      <div className='bg-gray-100'>
        {messages.map((msg, index) => (
          <div className='' key={index} class='msg'>
            {msg}
          </div>
        ))}
      </div>
      <div className='sticky bottom-0 flex justify-between bg-gray-100 p-4'>
        <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} className="max-y-full max-w-full" placeholder="Type a message..." />
        <button onClick={sendMessage}>
          <svg class="h-6 w-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 18-7 3 7-18 7 18-7-3Zm0 0v-5" />
          </svg>
        </button>
      </div>
    </div>



  );
}

export default Chat;

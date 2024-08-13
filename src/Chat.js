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

    <div className="flex flex-col max-w-[300px] p-4 border-gray-200 bg-gray-100 rounded-lg">
      <span className='font-semibold text-gray-900'>Alexander Acojido</span>
      <div>
        {messages.map((msg, index) => (
          <div key={index} class='msg'>
            {msg}
          </div>
        ))}
      </div>
      <div>

        <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} className="" placeholder="Type a message..." />
        <button onClick={sendMessage} className="ml-4 p-2 bg-blue-500 text-white rounded">Send</button>

      </div>
    </div>



  );
}

export default Chat;

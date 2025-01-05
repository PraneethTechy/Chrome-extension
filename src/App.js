import React, { useState } from 'react';
import './App.css'; // Import the CSS file for styling


function App() {
  // State to handle user input
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  
  // Handle input change
  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  // Handle button click
  const handleButtonClick = () => {
    if (message) {
      setMessages([...messages, message]); // Add new message to list
      setMessage(''); // Clear input field
    }
  };

  return (
    <div>
      <h1>Hello World</h1>
      <input 
        type="text" 
        value={message} 
        onChange={handleInputChange} 
        placeholder="Type a message" 
      />
      <button onClick={handleButtonClick}>Click Me</button>
      
      <div>
        <h2>Messages:</h2>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;


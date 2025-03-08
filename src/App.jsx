import { useState, useEffect, useRef } from 'react';
import ChatMessage from './components/ChatMessage';
import './App.css';
import { GoogleGenerativeAI } from '@google/generative-ai';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    try {
      // Add user message to state
      const userMessage = { role: 'user', content: input };
      setMessages(prev => [...prev, userMessage]);
      setIsLoading(true);
      setInput('');

      // Set up the Gemini API
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

      // Format message history for the API
      const formattedHistory = messages.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
      }));
      
      // Add the new user message
      formattedHistory.push({
        role: 'user',
        parts: [{ text: input }]
      });

      // Generate a response
      const result = await model.generateContent({
        contents: formattedHistory,
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 800,
        },
      });

      const response = result.response;
      const responseText = response.text();

      // Add bot message to state
      setMessages(prev => [...prev, { role: 'bot', content: responseText }]);
    } catch (err) {
      console.error('Error:', err);
      setError(`Error: ${err.message}`);
      // Add error message to chat
      setMessages(prev => [...prev, { role: 'bot', content: `Sorry, there was an error: ${err.message}` }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-container">
      <header className="chat-header">
        <h1>Gemini AI Chatbot</h1>
      </header>
      
      <div className="messages-container">
        {messages.length === 0 ? (
          <div className="empty-state">
            <p>Start a conversation with Gemini AI!</p>
          </div>
        ) : (
          messages.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))
        )}
        {isLoading && <div className="loading-message">Gemini is thinking...</div>}
        {error && <div className="error-message">{error}</div>}
        <div ref={messagesEndRef} />
      </div>
      
      <form className="input-form" onSubmit={sendMessage}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading || !input.trim()}>
          Send
        </button>
      </form>
    </div>
  );
}

export default App;
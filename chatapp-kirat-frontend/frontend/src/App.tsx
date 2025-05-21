// import React, { useState, useEffect, useRef } from 'react';

// const App = () => {
//   const [messages, setMessages] = useState(["hi there", "hello"]);
//   const inputref = useRef();
//   const wsRef = useRef();

//   useEffect(() => {
//     const ws = new WebSocket('ws://localhost:8080');

//     ws.onopen = () => {
//       ws.send(JSON.stringify({
//         "type": "join",
//         "payload" : {
//           "roomId" : "123"
//         }
//       }))
//     };

//     ws.onmessage = (event) => {
//       setMessages((prev) => [...prev, event.data]);
//     };
//     wsRef.current = ws;

//     ws.onclose = () => {
//       console.log('disconnected');
//     };

//     return () => {
//       ws.close();
//     };
//   }, []);

//   return (
//     <div className='h-screen bg-black'>
//       <div className='h-[95vh]  p-4'>
//         {messages.map((m, i) => (
//           <div className='flex  '>
//             <span key={i} className=' bg-white rounded p-4 text-black m-2'>
//               {m}
//             </span>
//           </div>
//         ))}
//       </div>
//       <div className='w-full bg-green-100 p-3'>
//         <input type="text" className='w-[90%] p-2' ref={inputref} />
//         <button onClick={() => wsRef.current.send(JSON.stringify({
//           "type": "chat",
//           "payload" : {
//             message : inputref.current.value
//           }
//         }))} className='m-3 border-2 bg-blue-300 p-2 rounded '>send</button>
//       </div>
//     </div>
//   );
// };

// export default App;


import React, { useState, useEffect, useRef } from 'react';
import { Send, Loader } from 'lucide-react';

const ChatApp = () => {
  const [messages, setMessages] = useState([
    // { id: 1, text: "Hi there", sender: "other" },
    // { id: 2, text: "Hello! How can I help you today?", sender: "me" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(true);
  const inputRef = useRef(null);
  const wsRef = useRef(null);
  const messagesEndRef = useRef(null);
  // Track the last message we sent
  const lastSentMessage = useRef("");

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Initialize WebSocket connection
  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');

    ws.onopen = () => {
      setIsConnecting(false);
      setIsConnected(true);
      ws.send(JSON.stringify({
        "type": "join",
        "payload": {
          "roomId": "123"
        }
      }));
    };

    ws.onmessage = (event) => {
      // Looking at the server code, we know the message will be just the text string
      const messageText = event.data;
      
      // If this is our own message echoed back, skip it
      if (messageText === lastSentMessage.current) {
        lastSentMessage.current = ""; // Reset after finding the match
        return;
      }
      
      const newMessage = {
        id: Date.now(),
        text: messageText,
        sender: "other"
      };
      
      setMessages(prev => [...prev, newMessage]);
    };

    ws.onclose = () => {
      setIsConnected(false);
      console.log('disconnected');
    };

    ws.onerror = () => {
      setIsConnecting(false);
      setIsConnected(false);
    };

    wsRef.current = ws;

    return () => {
      ws.close();
    };
  }, []);

  const handleSendMessage = () => {
    if (inputValue.trim() === "" || !isConnected) return;
    
    // Store the current message to identify echoes
    lastSentMessage.current = inputValue;
    
    // Add user message to UI immediately
    const newMessage = {
      id: Date.now(),
      text: inputValue,
      sender: "me"
    };
    setMessages(prev => [...prev, newMessage]);
    
    // Send message to server
    wsRef.current.send(JSON.stringify({
      "type": "chat",
      "payload": {
        message: inputValue
      }
    }));
    
    setInputValue("");
    inputRef.current.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-indigo-600 text-white p-4 shadow-md">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Chat Room</h1>
          <div className="flex items-center">
            <div className={`h-3 w-3 rounded-full mr-2 ${isConnected ? 'bg-green-400' : isConnecting ? 'bg-yellow-400' : 'bg-red-500'}`}></div>
            <span className="text-sm">{isConnected ? 'Connected' : isConnecting ? 'Connecting...' : 'Disconnected'}</span>
          </div>
        </div>
      </header>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-xs md:max-w-md lg:max-w-lg rounded-lg px-4 py-2 shadow ${
                message.sender === 'me' 
                  ? 'bg-indigo-500 text-white rounded-br-none' 
                  : 'bg-white text-gray-800 rounded-bl-none'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-300 bg-white p-4">
        <div className="flex items-center">
          <input
            type="text"
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            className="flex-1 rounded-l-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            disabled={!isConnected}
          />
          <button
            onClick={handleSendMessage}
            disabled={!isConnected || inputValue.trim() === ""}
            className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-r-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isConnecting ? <Loader size={20} className="animate-spin" /> : <Send size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
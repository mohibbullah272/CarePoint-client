import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { SendHorizontal } from "lucide-react";

const CareBoat = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const chatContainerRef = useRef(null);

  useEffect(() => {
    chatContainerRef.current?.scrollTo({ top: chatContainerRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await axios.get("http://localhost:8500/chat", {
        params: { message: input },
      });
      setMessages([...newMessages, { sender: "bot", text: response.data.response }]);
    } catch (error) {
      console.error("Error fetching response:", error);
    }
  };

  return (
    <div className="w-full my-28 h-[500px] flex flex-col items-center bg-[#fafafa] text-[#0d0e0e]">
      {/* Chat Header */}
      <div className="w-full md:max-w-3xl max-w-md bg-[#7e9695] text-white text-lg font-semibold  px-4 shadow-md">CareBoat Chat</div>
      
      {/* Chat Messages */}
      <div
        ref={chatContainerRef}
        className="w-full  md:max-w-3xl max-w-md flex-1 overflow-y-auto p-4 space-y-3 bg-white shadow-md rounded-lg"
      >
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}` }>
            <div className={`max-w-[75%] p-3 rounded-lg text-sm ${msg.sender === "user" ? "bg-[#7e9695] text-white" : "bg-[#a8bdbc] text-[#0d0e0e]"}`}>{msg.text}</div>
          </div>
        ))}
      </div>

      {/* Input Field */}
      <div className="w-full md:max-w-3xl max-w-md flex items-center gap-2 p-3 border-t bg-white">
        <input
          type="text"
          className="flex-1 p-2 border rounded-lg focus:outline-none bg-[#fafafa] text-[#0d0e0e]"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="p-2 bg-[#8fb0ae] text-white rounded-lg hover:bg-[#7ea4a2] transition"
          onClick={handleSend}
        >
          <SendHorizontal size={20} />
        </button>
      </div>
    </div>
  );
};

export default CareBoat;

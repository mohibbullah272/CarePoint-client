import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { SendHorizontal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CareBoat = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    chatContainerRef.current?.scrollTo({
      top: chatContainerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isBotTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setIsBotTyping(true);

    try {
      const response = await axios.get("https://medical-camp-server-theta.vercel.app/chat", {
        params: { message: input },
      });
      setMessages([...newMessages, { sender: "bot", text: response.data.response }]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages([...newMessages, { sender: "bot", text: "Sorry, something went wrong. Please try again." }]);
    } finally {
      setIsBotTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const messageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="w-full my-16 flex flex-col items-center bg-[#f7f7f7] text-[#0d0e0e] min-h-[600px]">
      {/* Chat Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full md:max-w-3xl max-w-[90%] bg-[#1a1a1a] text-white text-lg font-semibold px-6 py-4 shadow-lg rounded-t-lg"
      >
        CareBoat Chat
      </motion.div>

      {/* Chat Messages */}
      <div
        ref={chatContainerRef}
        className="w-full md:max-w-3xl max-w-[90%] flex-1 overflow-y-auto p-6 space-y-4 bg-white shadow-lg rounded-b-lg max-h-[450px]"
      >
        <AnimatePresence>
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              variants={messageVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[70%] p-4 rounded-2xl text-sm shadow-sm ${
                  msg.sender === "user"
                    ? "bg-[#7e9695] text-white"
                    : "bg-[#e5e7eb] text-[#0d0e0e]"
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}
          {isBotTyping && (
            <motion.div
              key="typing"
              variants={messageVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="flex justify-start"
            >
              <div className="max-w-[70%] p-4 rounded-2xl bg-[#e5e7eb] text-[#0d0e0e] text-sm flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input Field */}
      <div className="w-full md:max-w-3xl max-w-[90%] flex items-center gap-3 p-4 bg-white shadow-lg border-t border-gray-200 rounded-b-lg">
        <input
          type="text"
          className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7e9695] bg-[#fafafa] text-[#0d0e0e] transition-all duration-200"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          aria-label="Chat input"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 bg-[#7e9695] text-white rounded-lg hover:bg-[#6a827f] transition-colors duration-200"
          onClick={handleSend}
          aria-label="Send message"
        >
          <SendHorizontal size={20} />
        </motion.button>
      </div>
    </div>
  );
};

export default CareBoat;
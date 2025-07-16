import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Package } from 'lucide-react';
import Typewriter from '../Typewriter/Typewriter';

// Mock data to replace API calls
const mockVideoIdeas = {
  videoidea1: {
    name: 'videoidea1',
    data: "Title: 'Good Behavior Clothing: Try on haul' Description: Spreading good vibes with Good Behavior! 🛍️😄 Perfect for fashion review content with sustainable clothing made from retired fishing boat sails."
  },
  videoidea2: {
    name: 'videoidea2', 
    data: "Title: 'Good Behavior Clothing: Stress Test' Description: Testing the durability and style of Good Behavior clothing in real-world scenarios. Great for lifestyle and fashion content."
  },
  barbieIdea1: {
    name: 'barbieIdea1',
    data: "Title: 'Barbie Movie Makeup: Pink glam makeup tutorial' Description: Transform into a real-life Barbie with this pink glam makeup tutorial. Perfect for beauty and lifestyle content."
  },
  barbieIdea2: {
    name: 'barbieIdea2',
    data: "Title: 'Barbie Movie Roll: Trends and Tips' Description: Explore the latest Barbie-inspired trends and styling tips for the ultimate pink aesthetic."
  }
};

export default function Recommender({ 
  handleShow, 
  checkProductIcon, 
  setCheckProductIcon, 
  handleChangeUser, 
  userNames 
}) {
  const [handle, setHandle] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const messages = [
    "Analyzing your followers' taste...",
    "Crafting personalized recommendations...",
    "Finalizing tips for your next post..."
  ];

  const handleGenerate = () => {
    setError('');
    
    if (!Object.keys(userNames).includes(handle)) {
      setError("Please enter a valid account.");
      return;
    }

    setLoading(true);
    setCurrentMessageIndex(0);
    
    // Simulate API delay and progression through messages
    const messageInterval = setInterval(() => {
      setCurrentMessageIndex(prev => {
        if (prev >= messages.length - 1) {
          clearInterval(messageInterval);
          setTimeout(() => {
            setLoading(false);
            handleShow && handleShow();
          }, 1000);
          return prev;
        }
        return prev + 1;
      });
    }, 1500);
  };

  return (
    <div className="max-w-md mx-auto px-6 py-8 text-center">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="text-6xl mb-4">🎬</div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Creator Studio AI
        </h1>
        <p className="text-gray-400 mt-2">AI-powered content recommendations</p>
      </motion.div>

      {/* Input Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-6"
      >
        <div className="flex items-center gap-3 mb-4">
          <input
            type="text"
            value={handle}
            onChange={(e) => {
              setHandle(e.target.value);
              handleChangeUser(e.target.value);
              setError('');
            }}
            placeholder="Enter Instagram Handle"
            className="flex-1 h-12 px-4 bg-gray-900 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setCheckProductIcon(!checkProductIcon)}
            className={`h-12 w-12 rounded-full flex items-center justify-center transition-all ${
              checkProductIcon 
                ? 'bg-primary text-white' 
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            <Package className="w-5 h-5" />
          </motion.button>
        </div>

        {checkProductIcon && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="text-sm text-gray-400 mb-4 p-3 bg-gray-900/50 rounded-lg"
          >
            Good Behavior: A clothing/accessory brand made with the sails of retired fishing boats.
          </motion.p>
        )}

        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-400 text-sm mb-4"
          >
            {error}
          </motion.p>
        )}
      </motion.div>

      {/* Generate Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleGenerate}
        disabled={loading}
        className="w-full h-12 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full btn-hover disabled:opacity-50 disabled:cursor-not-allowed mb-8"
      >
        {loading ? (
          <div className="flex items-center justify-center gap-2">
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Generating...</span>
          </div>
        ) : (
          "Let's go!"
        )}
      </motion.button>

      {/* Loading Messages */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            {messages.slice(0, currentMessageIndex + 1).map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-300 italic"
              >
                {index === currentMessageIndex ? (
                  <Typewriter text={message} speed={50} />
                ) : (
                  message
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Heart } from 'lucide-react';

const ContentCard = ({ title, description, onPress }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onPress}
      className="w-full p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl text-left card-hover"
    >
      <div className="text-3xl mb-3 text-center">🔥🔥🔥</div>
      <h3 className="text-white font-bold text-xl mb-4 text-center leading-tight">
        {title}
      </h3>
      <div className="flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="p-2 bg-gray-700 rounded-full"
        >
          <MessageCircle className="w-5 h-5 text-gray-300" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="p-2 bg-gray-700 rounded-full"
        >
          <Heart className="w-5 h-5 text-gray-300" />
        </motion.div>
      </div>
    </motion.button>
  );
};

export default ContentCard;
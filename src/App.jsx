import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Recommender from './components/Recommender/Recommender';
import ContentCard from './components/ContentCard/ContentCard';
import ViewDetails from './components/Views/ViewDetails';
import Modal from './components/Modal/Modal';
import { ChevronDown, RotateCcw } from 'lucide-react';

const userNames = {
  "lukethorssen": { 
    name: "Luke", 
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400" 
  },
  "rafaellathorssen": { 
    name: "Rafaella", 
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400" 
  },
};

export default function App() {
  const [showData, setShowData] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [checkProductIcon, setCheckProductIcon] = useState(false);
  const [user, setUser] = useState('');
  const [selectedContent, setSelectedContent] = useState(1);

  const handleContentClick = (contentType) => {
    setSelectedContent(contentType);
    setShowModal(true);
  };

  if (showData) {
    return (
      <div className="min-h-screen bg-black text-white">
        <div className="max-w-md mx-auto bg-black min-h-screen">
          {/* Header */}
          <div className="p-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowData(false)}
              className="mb-6"
            >
              <ChevronDown className="w-8 h-8 rotate-90" />
            </motion.button>
            
            <div className="mb-6">
              <p className="text-secondary text-sm font-medium mb-2">CREATOR STUDIO AI</p>
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-3xl font-bold">Hey,</h1>
                  <h1 className="text-3xl font-bold mb-3">{userNames[user]?.name}</h1>
                </div>
                {userNames[user]?.img && (
                  <motion.img
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    src={userNames[user].img}
                    alt={userNames[user].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                )}
              </div>
              <p className="text-white text-sm">ANALYTICS</p>
            </div>
          </div>

          {/* Analytics Chart */}
          <div className="px-6 mb-6">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold">📊</span>
                </div>
                <p className="text-gray-400">Analytics Dashboard</p>
              </div>
            </div>
          </div>

          {/* Content Suggestions Header */}
          <div className="px-6 flex justify-between items-center mb-6">
            <p className="text-white font-medium">CONTENT SUGGESTIONS</p>
            <motion.button
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <RotateCcw className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Content Cards */}
          <div className="px-6 space-y-6 pb-6">
            <AnimatePresence>
              {checkProductIcon ? (
                <>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <ContentCard
                      title="Good Behavior Clothing: Try on haul"
                      onPress={() => handleContentClick(1)}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: 0.1 }}
                  >
                    <ContentCard
                      title="Good Behavior Clothing: Stress Test"
                      onPress={() => handleContentClick(2)}
                    />
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <ContentCard
                      title="Barbie Movie Makeup: Pink glam makeup tutorial"
                      onPress={() => handleContentClick(3)}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: 0.1 }}
                  >
                    <ContentCard
                      title="Barbie Movie Roll: Trends and Tips"
                      onPress={() => handleContentClick(3)}
                    />
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Modal */}
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <ViewDetails 
            type={selectedContent} 
            onPress={() => setShowModal(false)} 
            user={user} 
          />
        </Modal>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <Recommender
        userNames={userNames}
        handleShow={() => setShowData(true)}
        checkProductIcon={checkProductIcon}
        setCheckProductIcon={setCheckProductIcon}
        handleChangeUser={setUser}
      />
    </div>
  );
}
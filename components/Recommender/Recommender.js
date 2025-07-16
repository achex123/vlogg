import React, { useRef, useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet, Image, View, ScrollView, Pressable } from 'react-native';
import Typewriter from 'react-native-typewriter';
import ContentCard from '../ContentCard/ContentCard';

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

export default function Recommender({ handleShow, checkProductIcon, setCheckProductIcon, handleChangeUser, userNames }) {
  const [handle, setHandle] = useState('');
  const [loading, setLoading] = useState(false);
  const [blurb, setBlurb] = useState('');
  const [blurb2, setBlurb2] = useState('');
  const [typedMessages, setTypedMessages] = useState([]);
  const [animationsCompleted, setAnimationsCompleted] = useState(false);

  const messages = [
    "Analyzing your followers' taste...",
    "Crafting personalized recommendations...",
    "Finalizing tips for your next post..."
  ];

  const [apiBlurb, setApiBlurb] = useState('');
  const [apiBlurb2, setApiBlurb2] = useState('');

  const handleGenerate = () => {
    setLoading(true);
    setBlurb('');
    setBlurb2('');
    setTypedMessages([]);
    setApiBlurb('');
    setApiBlurb2('');

    if (!Object.keys(userNames).includes(handle)) {
      setBlurb("Please put in a valid account.");
      setLoading(false);
      return;
    }

    // Simulate API delay
    setTimeout(() => {
      // Use mock data based on product icon state
      if (checkProductIcon) {
        setApiBlurb(mockVideoIdeas.videoidea1.data);
        setApiBlurb2(mockVideoIdeas.videoidea2.data);
      } else {
        setApiBlurb(mockVideoIdeas.barbieIdea1.data);
        setApiBlurb2(mockVideoIdeas.barbieIdea2.data);
      }
      
      setAnimationsCompleted(false);
    }, 1000);
  };

  const onTypingEnd = () => {
    const nextIndex = typedMessages.length;
    if (nextIndex < messages.length - 1) {
      setTypedMessages(currentTypedMessages => [...currentTypedMessages, messages[nextIndex]]);
    } else if (nextIndex === messages.length - 1) {
      setLoading(false);
      setAnimationsCompleted(true);
      setTypedMessages([]);
      handleShow && handleShow();
    }
  };

  const parseContent = (contentString) => {
    const titleMatch = contentString.match(/Title: '([^']+)'/);
    const descriptionMatch = contentString.match(/Description: (.*)/);
    
    return {
      title: titleMatch ? titleMatch[1].trim() : '',
      description: descriptionMatch ? descriptionMatch[1].trim() : '',
    };
  };

  const renderContent = () => {
    if (apiBlurb) {
      const { title, description } = parseContent(apiBlurb);
      return (
        <ContentCard onPress={() => {
          actionSheetRef.current?.show();
        }}
          title={title}
          description={description}
        />
      );
    }
  };

  const renderContent2 = () => {
    if (apiBlurb2) {
      const { title, description } = parseContent(apiBlurb2);
      return (
        <ContentCard onPress={() => {
          actionSheetRef.current?.show();
        }}
          title={title}
          description={description}
        />
      );
    }
  };

  const actionSheetRef = useRef(null);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{
          width: 300, 
          marginTop: 20,
          resizeMode: 'contain',
        }}
        source={require('../../assets/logo-2.png')}
      />
      <View style={{
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center',
        width: '80%', 
        gap: 8, 
        marginBottom: 20
      }}>
        <TextInput
          style={{
            height: 50,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 25,
            paddingHorizontal: 20,
            color: '#FFF', 
            flex: 1
          }}
          onChangeText={text => { 
            setHandle(text); 
            handleChangeUser(text);
          }}
          value={handle}
          placeholder="Enter Instagram Handle"
          placeholderTextColor="#999"
          autoCapitalize="none"
        />
        <TouchableOpacity onPress={() => setCheckProductIcon(s => !s)}>
          <Image 
            style={{ width: 40, height: 40 }}
            source={require('../../assets/icons/icon-1.png')}
          />
        </TouchableOpacity>
      </View>
      
      {checkProductIcon && (
        <Text style={{ 
          width: '80%', 
          color: "white", 
          marginBottom: 20, 
          textAlign: "center" 
        }}>
          Good Behavior: A clothing/accessory brand made with the sails of retired fishing boats.
        </Text>
      )}
      
      <TouchableOpacity style={styles.button} onPress={handleGenerate}>
        {loading ? (
          <ActivityIndicator size="small" color="#FFF" />
        ) : (
          <Text style={styles.buttonText}>Let's go!</Text>
        )}
      </TouchableOpacity>
      
      {blurb && <Text style={styles.blurbText}>{blurb}</Text>}
      
      {!blurb && (
        <View>
          {typedMessages.map((msg, index) => (
            <Text key={index} style={styles.typingText}>{msg}</Text>
          ))}

          {loading && typedMessages.length < messages.length && (
            <Typewriter
              typing={1}
              onTypingEnd={onTypingEnd}
              style={styles.typingText}
            >
              {messages[typedMessages.length]}
            </Typewriter>
          )}
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 20,
    color: '#FFF',
    width: '80%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#E1306C',
    borderRadius: 25,
    padding: 15,
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  greetingText: {
    color: '#FFF',
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 20,
  },
  typingText: {
    color: '#FFF',
    textAlign: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
    fontFamily: 'Arial',
    fontSize: 18,
    fontStyle: 'italic',
  },
  blurbContainer: {
    backgroundColor: '#1c1c1e',
    borderRadius: 20,
    padding: 20,
    marginTop: 10,
    shadowColor: '#FFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 10,
    borderWidth: 1,
    borderColor: '#E1306C',
  },
  blurbText: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 10,
  },
});
import React from 'react';
import LoginView from '@/screens/authentication/LoginView';
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
import { Image } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const handleLogin = () => { console.log('Login attempt with:', username, password); };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={{ height: 178, width: 290, position: 'absolute', bottom: 0, left: 0 }}
        />
      }>
      <LoginView /> {/* Login functionality encapsulated */}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  inputContainer: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',  // Added to improve alignment
    justifyContent: 'center',  // Added to improve alignment
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 200,  // Adjusted for new aspect ratio
    width: 320,   // Adjusted for new aspect ratio
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

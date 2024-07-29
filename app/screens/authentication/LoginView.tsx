import React, { useState } from 'react';
import { Button, TextInput, StyleSheet, View } from 'react-native';

const LoginView = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Authentication attempt with username:', username, 'and password:', password);
    // Here you would normally integrate with authentication services
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
        placeholder="Username"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        secureTextEntry
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        autoCapitalize="none"
      />
      <Button
        title="Login"
        onPress={handleLogin}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  }
});

export default LoginView;

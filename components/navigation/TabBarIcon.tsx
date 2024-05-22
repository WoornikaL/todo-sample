// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { type ComponentProps } from 'react';

export function TabBarIcon({ style, ...rest }: IconProps<ComponentProps<typeof Ionicons>['name']>) {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('LoginScreen');
  };
  const iconName = (rest.name === 'incorrectIconName' ? 'account' : rest.name);
  const platformStyle = Platform.OS === 'ios' ? { marginBottom: -3 } : { marginBottom: 0 };
  return <Ionicons onPress={handlePress} name={iconName} size={28} style={[platformStyle, style]} {...rest} />;
}

import { Text, type TextProps, StyleSheet } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function NewThemedText({
  style,
  graycolor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
//
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <View>
<Text> jhjjjjj </Text>
<Text> aaaaaa</Text>
<View>

  <Text> bbbbbuoomgfhhhhf</Text>
  </View>>
    </View>

=======
=======
>>>>>>> 61f376787728a9a9ff2b39a0f1a53c15bcb53324
   <View> 
    <Text>cxxxxxx</Text>
   </View>>
      {...rest}
    />
<<<<<<< HEAD
>>>>>>> 61f376787728a9a9ff2b39a0f1a53c15bcb53324
=======
>>>>>>> 61f376787728a9a9ff2b39a0f1a53c15bcb53324
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
});

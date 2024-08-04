import { Text, type TextProps, StyleSheet } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
//
  return (
    // Add more custom styles as needed, e.g., different font sizes for different types hhhh ghghg
    <Text
      style={[
        { color },
<<<<<<< HEAD
        type === 'default' ? styles.link : undefined,
        type === 'subtitle' ? styles.default : undefined,
        type === 'title' ? styles.defaultSemiBold : undefined,
=======
        type === 'default' ? styles.default : undefined,
        type === 'subtitle' ? styles.defaultSemiBold : undefined,
        type === 'title' ? styles.title : undefined,
>>>>>>> 852b967572e30194d58707b7f05bc96b0894b4d9
        type === 'defaultSemiBold' ? styles.link : undefined,

        style,
      ]}
      {...rest}
    />
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

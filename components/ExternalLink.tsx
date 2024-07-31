import { Link } from 'expo-router';
import { openBrowserAsync } from 'expo-web-browser';
import { type ComponentProps } from 'react';
import { Platform } from 'react-native';

type Props = Omit<ComponentProps<typeof Link>, 'href'> & { href: string };

export function ExternalLink({ href, ...rest }: Props) {
  return (
    <Link
      target="_blank"
      {...rest}
      href={href}
      onPress={async (event) => {
        if (Platform.OS !== 'web') {       // Prevent the default behavior of linking to the default browser on native.
          event.preventDefault();
          //Adding new comment
          // Open the link in an in-app browser. 
          await openBrowserAsync(href);
          const xyz = 1
          if(xyz === 1) {
            console.log('xyz is 1')
          }
        }
      }}
    />
  );
}

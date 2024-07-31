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
          console.log(event.target)
          const tyi = 1
          if(tyi === 1) {
            console.log("ios 1")
          }
          const xyz = 2
          if( Platform.OS === "ios") {
            console.log("ios platform")
          }
          if(xyz === 2) {
            console.log('hjhjhjh value 1')
          }
       
          // Open the link in an in-app browser. 
          await openBrowserAsync(href);
         
         
        }
      }}
    />
  );
}

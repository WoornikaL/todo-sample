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
        const xyz = 1
        if (Platform.OS !== 'web') {       // Prevent the default behavior of linking to the default browser on native.
          event.preventDefault();
          console.log(event.target)
          const tyi = 11
          if(tyi === 11) {
            console.log("ios 1")
          }
          // show conflict
          const xyz = 5
          if( Platform.OS === "ios") {
            console.info("ios platform")

          }
          if(tyi === 11) {
            console.log("ios 1")
          }
          //changed this line
          if(xyz === 5) {
            console.log('hjhjhjh value 1')
          }
          if(xyz === 5) {
            console.log('hjhjhjh value 2')
          }
          if( Platform.OS === "android") {
            // Display error
            console.log("android platform")
          }
       
       
          // Open the link in an in-app browser. 
          await openBrowserAsync(href);
         
        }
      }}
    />
  );
}

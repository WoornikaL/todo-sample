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
          // Added Code
          if( Platform.OS === "ios") {
            console.info("ios platform")

          }
          //Changing this line
          const xyz = 2
          //Removed Code
 
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
<<<<<<< HEAD
          if( Platform.OS === "android") {
            // Display error
            console.log("android platform")
          }
=======
         
>>>>>>> a996525 (commit4)
       
       
          // Open the link in an in-app browser. 
          await openBrowserAsync(href);
         
        }
      }}
    />
  );
}

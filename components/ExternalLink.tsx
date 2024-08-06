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
        // Added new comment
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
          //Changing this line hhhhh abc
          const xyz = 2
          //Removed Code heeeeee
 
          if(tyi === 11) {
            console.log("ios 1")
          }
          if(Platform.isTesting) {
            console.log("112 1")
          }
          // Added new comment gggg gggg


          //changed this line
          if(xyz === 2) {
            console.log('hjhjhjh value 1')
          }
          if(xyz === 2) {
            console.log('hjhjhjh value 2')
          }
         
       
       
          // Open the link in an in-app a browser. 
          await openBrowserAsync(href);
         
        }
      }}
    />
  );
}

import { Injectable } from '@angular/core';
import * as CometChatUIKit from '@cometchat/uikit-shared'; // Import the entire module

// Define UIKitSettings locally if it is not available in the package
const UIKitSettings = {
  appId: '275262ca8782e615', // Replace with your CometChat App ID
  region: 'eu', // Replace with your CometChat region
  authKey: '30ad0b685f53e07ec18c21441961de30d1799d90', // Replace with your CometChat Auth Key
};

@Injectable({
  providedIn: 'root',
})
export class CometchatService {
  constructor() {
    try {
      console.log('CometChatUIKit module:', CometChatUIKit); // Debug the module

      // Replace this with the correct initialization method if `init` does not exist
      if (CometChatUIKit && typeof CometChatUIKit.initialize === 'function') {
        CometChatUIKit.initialize(UIKitSettings); // Use the correct method
        console.log('CometChatUIKit initialized successfully.');
      } else {
        throw new Error('CometChatUIKit does not have an initialization method.');
      }
    } catch (error) {
      console.error('Error initializing CometChatUIKit:', error);
    }
  }
}
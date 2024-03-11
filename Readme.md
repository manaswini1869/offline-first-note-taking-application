# Offline-First Note Taking App

## Overview
This is an offline-first note-taking React Native application designed to allow users to write down text even when their device is not connected to the internet. It utilizes AWS Amplify and DataStore for synchronization, enabling seamless data transfer to AWS when the device reconnects to the internet.

## Features
- **Offline Functionality**: Users can create, read, update, and delete notes locally on their device even without an internet connection.
- **Online Sync**: Notes are synchronized with AWS DataStore when the device is back online, ensuring data consistency across devices.
- **CRUD Operations**: Basic CRUD operations (Create, Read, Update, Delete) are supported for notes.
- **Cross-Platform**: The app is developed using React Native, making it compatible with both iOS and Android devices.
- **Easy Deployment**: Built using Expo, facilitating quick and easy deployment to various platforms.

## Getting Started
### Prerequisites
- Node.js installed on your machine
- Expo CLI installed globally (`npm install -g expo-cli`)

### Installation
1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install project dependencies.

### Running the App
1. Start the development server by running `npm start` or `expo start`.
2. Use an Android or iOS emulator, or scan the QR code using the Expo Go app on your device to run the app.

## Testing
- **Local Testing**: Test the app locally on your development machine using an emulator or a physical device.
- **Offline Testing**: Disable internet connectivity on your device/emulator to ensure offline functionality works as expected.
- **Online Testing**: Re-enable internet connectivity to test synchronization with AWS DataStore.

# Note Taking App
This is a normal note taking application developed using React Native to be integrated with AWS Amplify in the later stages of development.
This application code base was used in the integrated offline first note taking application.

# Amplified todo
This is a learning objectified application solely developed to refresh my understandings on AWS Amplify. This application was developed following the tutorial in the documentation provided by Amplify.


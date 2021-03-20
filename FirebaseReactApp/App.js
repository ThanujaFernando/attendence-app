/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import ReactNativeBiometrics from 'react-native-biometrics'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import axios from 'axios';

const App: () => React$Node = () => {

  const TOKEN = 'randomtoken';
  const baseUrl = "http://192.168.1.2:5100/attendanceapp-155d0/us-central1/";

  const getTokenFromNodeMcu = () => {
    // axios.get('http://192.168.33.33/getToken')
  }

  const verifyToken = (token) => {
    axios.post(`${baseUrl}verifyToken`, {
      token,
    })
    .then(function (response) {
      console.log(response.data);
      if (response.data.isTokenVerified) {
        console.log('token is verified');
        return;
      }
      console.log('Token is wrong')
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const aa = () => {
    ReactNativeBiometrics.simplePrompt({promptMessage: 'Confirm fingerprint'})
    .then((resultObject) => {
      const { success } = resultObject
   
      if (success) {

        console.log('successful biometrics provided')
        // get from nodemcu
        verifyToken(TOKEN);
      } else {
        console.log('user cancelled biometric prompt')
      }
    })
    .catch(() => {
      console.log('biometrics failed')
    })
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
            <View style={{flex:1, padding:20, paddingTop:400}}>
            <Button
              onPress={() => aa()} 
              title="Confirm Fingerprint"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
              style={{
                //position:"absolute",
                //top:"80px"
                  flex:1,
                  paddingTop: 50,
              }}
            /></View>
            {/* <Button onPress={() => aa()}>asdafsdf</Button> */}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;

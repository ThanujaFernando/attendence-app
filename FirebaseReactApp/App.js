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
  Image,
  TouchableOpacity,
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

  const Fprint = () => {
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
      <SafeAreaView >
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
            <View style={{flex:1, padding:120, backgroundColor: '#F8BB40', justifyContent: 'center',
            alignItems: 'center',}}>
            <Image
            style={styles.image}
            source={require('./images/fingerprint.png')}
            />
            </View>
            <View style={{flex:1, padding:20, paddingTop:50, backgroundColor: '#F8BB40', justifyContent: 'center',
            alignItems: 'center',}}>
            
            <TouchableOpacity onPress={() => Fprint()} style={styles.button}>
            <Text style={styles.buttonText}>Confirm Fingerprint</Text>
            </TouchableOpacity></View>
            <View style={{flex:1, padding:20, paddingTop:400, backgroundColor: '#F8BB40'}}>

            </View>
            <View style={{flex:1, padding:20, paddingTop:400, backgroundColor: '#F8BB40'}}>

            </View>
            {/* <Button onPress={() => aa()}>asdafsdf</Button> */}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 300
  },
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
  button: {
    width: 300,
    backgroundColor: "gray",
    padding: 20,
    borderRadius: 10
  },
  buttonText: {
    textAlign: 'center',
    color: "white"
    
  },
});

export default App;

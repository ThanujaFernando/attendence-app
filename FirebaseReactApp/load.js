import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


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
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default load;
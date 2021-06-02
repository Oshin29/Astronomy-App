import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image
} from 'react-native';
import { Header, Icon } from 'react-native-elements';

export default class StartScreen extends React.Component {
  render() {
    return (
      <View>
        <Header
          centerComponent={{
            text: 'Astronomy World',
            style: { color: '#1eb7e6', fontSize: 20, fontWeight: 'bold' },
          }}
          backgroundColor="purple"
        />
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignitems: 'center',
          }}>
          <ImageBackground
            source={require('../assets/wallpaper.jpg')}
            style={{
              flex: 1,
              resizeMode: 'cover',
              justifyContent: 'center',
              width: '100%',
              height: 450,
            }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 40,
                marginTop: 100,
                fontWeight: 'bold',
                fontFamily: 'Baskerville-Italic',
              }}>
              Welcome to the Astronomy World
            </Text>
            <TouchableOpacity
              style={styles.startButton}
              onPress={() => this.props.navigation.navigate('List')}>
              <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Start</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  startButton: {
    flex: 1,
    flexDirection: 'space-between',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#1eb7e6',
    borderRadius: 10,
    marginTop: 50,
    width: 100,
    padding: 10,
  },
});

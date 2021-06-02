import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Header, Icon } from 'react-native-elements';

export default class Taurus extends React.Component {
  render() {
    return (
      <View>
        <Header
          leftComponent={
            <Icon
              name="arrow-left"
              type="font-awesome"
              onPress={() => this.props.navigation.navigate('Constellation')}
              color="white"
            />
          }
          centerComponent={{
            text: 'Taurus',
            style: { color: '#1eb7e6', fontSize: 20, fontWeight: 'bold' },
          }}
          rightComponent={
            <Icon
              name="home"
              onPress={() => this.props.navigation.navigate('Start')}
              color="white"
            />
          }
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
            source={require('../assets/starry_background.jpg')}
            style={{
              flex: 1,
              resizeMode: 'cover',
              justifyContent: 'center',
              width: '100%',
              height: 700,
            }}>
            <Image
              source={require('../assets/Taurus.jpg')}
              style={{ width: 315, height: 300, justifyContent: 'center' }}
            />
            <Text style={styles.textStyle}>Taurus</Text>
            <Text style={{ color: 'aqua' }}>
              Taurus is a large and prominent fixture in the winter sky. As one
              of the oldest recognized constellations, it has mythologies dating
              back to the early Bronze Age.The constellation is fairly easy to
              find as its most recognizable asterism forms a very prominent “V,”
              which represent the head and horns of the bull. The brightest star
              in the constellation is Aldebaran, which forms the bull’s right
              eye. Five stars, fairly close together to the naked eye, form an
              almost perfect small “V,” with the “V” extending up quite a ways
              to two more final stars that are the points of the horns.
            </Text>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: 'aqua',
  },
});

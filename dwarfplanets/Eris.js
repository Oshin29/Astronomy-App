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

export default class Eris extends React.Component {
  render() {
    return (
      <View>
        <Header
          leftComponent={
            <Icon
              name="arrow-left"
              type="font-awesome"
              onPress={() => this.props.navigation.navigate('Dwarf')}
              color="white"
            />
          }
          centerComponent={{
            text: 'Eris',
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
              source={require('../assets/eris.jpg')}
              style={{ width: 315, height: 300, justifyContent: 'center' }}
            />
            <Text style={styles.textStyle}>Eris</Text>
            <Text style={{ color: 'aqua' }}>
              Eris is one of the largest known dwarf planets in our solar
              system. It's about the same size as Pluto, but is three times
              farther from the Sun. Eris first appeared to be larger than Pluto.
              This triggered a debate in the scientific community that led to
              the International Astronomical Union's decision in 2006 to clarify
              the definition of a planet. Pluto, Eris and other similar objects
              are now classified as dwarf planets.Eris is named for the ancient
              Greek goddess of discord and strife. The name fits since Eris
              remains at the center of a scientific debate about the definition
              of a planet.
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

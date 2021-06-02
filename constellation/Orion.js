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

export default class Orion extends React.Component {
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
            text: 'Orion',
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
              source={require('../assets/Orion.jpg')}
              style={{ width: 315, height: 300, justifyContent: 'center' }}
            />
            <Text style={styles.textStyle}>Orion</Text>
            <Text style={{ color: 'aqua' }}>
              Orion is one of the largest and most recognizable of the
              constellations. It is viewable around the world, and has been
              mentioned by Homer, Virgil, and even the Bible, making it perhaps
              the most famous constellation.Orion’s belt of three stars is the
              easiest asterism to find, with Rigel (bottom right) and Betelgeuse
              (top left) being the brightest two individual stars. The two other
              corners form a rough quadrangle, with his head and bow also
              sometimes visible. Orion is also unique in that you can use him to
              find a variety of other constellations in the winter sky.
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

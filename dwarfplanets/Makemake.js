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

export default class Makemake extends React.Component {
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
            text: 'Makemake',
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
              source={require('../assets/makemake.jpg')}
              style={{ width: 315, height: 300, justifyContent: 'center' }}
            />
            <Text style={styles.textStyle}>Makemake</Text>
            <Text style={{ color: 'aqua' }}>
              Along with fellow dwarf planets Pluto, Eris and Haumea, Makemake
              is located in the Kuiper Belt, a region outside the orbit of
              Neptune. Slightly smaller than Pluto, Makemake is the
              second-brightest object in the Kuiper Belt as seen from Earth
              (while Pluto is the brightest). It takes about 305 Earth years for
              this dwarf planet to make one trip around the sun. Makemake holds
              an important place in the history of solar system studies because
              it—along with Eris—was one of the objects whose discovery prompted
              the International Astronomical Union to reconsider the definition
              of a planet and to create the new group of dwarf planets. Makemake
              was named after the Rapanui god of fertility.
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

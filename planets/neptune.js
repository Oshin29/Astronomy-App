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

export default class Neptune extends React.Component {
  render() {
    return (
      <View>
        <Header
          leftComponent={
            <Icon
              name="arrow-left"
              type="font-awesome"
              onPress={() => this.props.navigation.navigate('Planet')}
              color="white"
            />
          }
          centerComponent={{
            text: 'Neptune',
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
              source={require('../assets/Neptune.jpg')}
              style={{ width: 315, height: 300, justifyContent: 'center' }}
            />
            <Text style={styles.textStyle}>Neptune</Text>
            <Text style={{ color: 'aqua' }}>
              The ice giant Neptune is the eighth and most distant planet in our
              solar system.More than 30 times as far from the Sun as Earth,
              Neptune is the only planet in our solar system not visible to the
              naked eye and the first predicted by mathematics before its
              discovery.Neptune takes about 16 hours to rotate once (a Neptunian
              day), and about 165 Earth years to orbit the sun (a Neptunian
              year).Neptune has 14 known moons which are named after sea gods
              and nymphs in Greek mythology.because of dwarf planet Pluto’s
              elliptical orbit, Pluto is sometimes closer to the Sun (and us)
              than Neptune is.
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

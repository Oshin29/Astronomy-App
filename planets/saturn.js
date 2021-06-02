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

export default class Saturn extends React.Component {
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
            text: 'Saturn',
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
              source={require('../assets/saturn.jpg')}
              style={{
                width: 315,
                height: 150,
                resizeMode: 'contain',
              }}
            />
            <Text style={styles.textStyle}>Saturn</Text>
            <Text style={{ color: 'aqua' }}>
              Saturn is the sixth planet from the Sun and the second largest
              planet in our solar system.Adorned with thousands of beautiful
              ringlets, Saturn is unique among the planets. It is not the only
              planet to have rings—made of chunks of ice and rock—but none are
              as spectacular or as complicated as Saturn's.Like fellow gas giant
              Jupiter, Saturn is a massive ball made mostly of hydrogen and
              helium.Saturn takes about 10.7 hours (no one knows precisely) to
              rotate on its axis once—a Saturn “day”—and 29 Earth years to orbit
              the sun.Saturn has the most spectacular ring system, with seven
              rings and several gaps and divisions between them.Saturn has 53
              known moons with an additional 29 moons awaiting confirmation of
              their discovery, a total of 82 moons.It is named after the roman
              god Saturn.
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

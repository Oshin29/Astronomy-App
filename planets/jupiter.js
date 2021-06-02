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

export default class Jupiter extends React.Component {
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
            text: 'Jupiter',
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
              source={require('../assets/jupiter.jpg')}
              style={{ width: 315, height: 300, justifyContent: 'center' }}
            />
            <Text style={styles.textStyle}>Jupiter</Text>
            <Text style={{ color: 'aqua' }}>
              Fifth in line from the Sun, Jupiter is, by far, the largest planet
              in the solar system – more than twice as massive as all the other
              planets combined. Jupiter's familiar stripes and swirls are
              actually cold, windy clouds of ammonia and water, floating in an
              atmosphere of hydrogen and helium. Jupiter’s iconic Great Red Spot
              is a giant storm bigger than Earth that has raged for hundreds of
              years.One day on jupiter is 10 hours on earth and a year last 12
              earth years.As a gas giant Jupiter has no solid Earth-like
              surface, If it has a solid inner core at all, it’s likely only
              about the size of Earth.It is mostly made of hydrogen and helium
              and like all other gas giant in the solar system possess a ring
              system.It has more than 75 moons.It is named after the roman god
              Jupiter.
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

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

export default class Uranus extends React.Component {
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
            text: 'Uranus',
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
              source={require('../assets/uranus.jpg')}
              style={{ width: 315, height: 300, justifyContent: 'center' }}
            />
            <Text style={styles.textStyle}>Uranus</Text>
            <Text style={{ color: 'aqua' }}>
              The seventh planet from the sun, it was the first planet found
              with the aid of a telescope.Uranus takes about 17 hours to rotate
              once (a Uranian day), and about 84 Earth years to complete an
              orbit of the Sun (a Uranian year).Uranus is an ice giant. Most of
              its mass is a hot, dense fluid of "icy" materials – water, methane
              and ammonia – above a small rocky core.Uranus has 27 known moons,
              and they are named after characters from the works of William
              Shakespeare and Alexander Pope.Uranus rotates east to west. But
              Uranus also rotates on its side.It is named after the greek god
              Uranus.
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

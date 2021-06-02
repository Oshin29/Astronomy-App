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

export default class Pluto extends React.Component {
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
            text: 'Pluto',
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
              source={require('../assets/pluto.jpg')}
              style={{ width: 315, height: 300, justifyContent: 'center' }}
            />
            <Text style={styles.textStyle}>Pluto</Text>
            <Text style={{ color: 'aqua' }}>
              Pluto is a complex world of ice mountains and frozen plains. Once
              considered the ninth planet, Pluto is the largest member of the
              Kuiper Belt and the best known of a new class of worlds called
              dwarf planets.Pluto’s classification as a planet has had a history
              of changes. Since 2006, per the International Astronomical Union’s
              planetary criteria, Pluto isn’t considered a planet because it
              hasn’t cleared the neighborhood around its orbit of other objects.
              However, it does meet IAU’s criteria for what constitutes a dwarf
              planet.Pluto has 5 moons. The largest, Charon, is so big that
              Pluto and Charon orbit each other like a double planet.
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

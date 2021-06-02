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

export default class Haumea extends React.Component {
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
            text: 'Haumea',
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
              source={require('../assets/haumea.jpg')}
              style={{ width: 315, height: 300, justifyContent: 'center' }}
            />
            <Text style={styles.textStyle}>Haumea</Text>
            <Text style={{ color: 'aqua' }}>
              Located in the Kuiper Belt beyond Neptune’s orbit, the dwarf
              planet Haumea is an oval-shaped object with a radius of about 385
              miles (just under 10 times smaller than Earth), and two moons,
              Namaka and Hi’iaka. A day on Haumea lasts only four Earth hours,
              making it one of the fastest rotating large objects in our solar
              system.Its fast spin distorts Haumea's shape, making this dwarf
              planet look like a football.Haumea was named after the Hawaiian
              goddess of fertility.
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

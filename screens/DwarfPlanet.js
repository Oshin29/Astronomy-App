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

export default class Dwarf extends React.Component {
  render() {
    return (
      <View>
        <Header
          leftComponent={
            <Icon
              name="arrow-left"
              type="font-awesome"
              onPress={() => this.props.navigation.navigate('List')}
              color="white"
            />
          }
          centerComponent={{
            text: 'Dwarf Planets',
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
              source={require('../assets/dwarfPlanet.jpg')}
              style={{ width: '100%', height: 150, justifyContent: 'center' }}
            />
            <TouchableOpacity
              style={styles.startButton}
              onPress={() => this.props.navigation.navigate('Pluto')}>
              <Text style={styles.textStyle}>Pluto</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.startButton}
              onPress={() => this.props.navigation.navigate('Ceres')}>
              <Text style={styles.textStyle}>Ceres</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.startButton}
              onPress={() => this.props.navigation.navigate('Makemake')}>
              <Text style={styles.textStyle}>Makemake</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.startButton}
              onPress={() => this.props.navigation.navigate('Haumea')}>
              <Text style={styles.textStyle}>Haumea</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.startButton}
              onPress={() => this.props.navigation.navigate('Eris')}>
              <Text style={styles.textStyle}>Eris</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  startButton: {
    flex: 1,
    flexDirection: 'space-between',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'purple',
    borderRadius: 10,
    marginTop: 20,
    width: '100%',
    padding: 10,
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 14,
  },
});

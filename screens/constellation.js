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

export default class Constellation extends React.Component {
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
            text: 'Constellation',
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
              height: 535,
            }}>
            <Image source={require('../assets/constellation.jpg')} />
            <TouchableOpacity
              style={styles.startButton}
              onPress={() => this.props.navigation.navigate('Ursa')}>
              <Text style={styles.textStyle}>Ursa Major</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.startButton}
              onPress={() => this.props.navigation.navigate('Orion')}>
              <Text style={styles.textStyle}>Orion</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.startButton}
              onPress={() => this.props.navigation.navigate('Taurus')}>
              <Text style={styles.textStyle}>Taurus</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.startButton}
              onPress={() => this.props.navigation.navigate('Scorpius')}>
              <Text style={styles.textStyle}>Scorpius</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.startButton}
              onPress={() => this.props.navigation.navigate('Pisces')}>
              <Text style={styles.textStyle}>Pisces</Text>
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

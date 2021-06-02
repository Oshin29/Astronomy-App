import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { Header, Icon } from 'react-native-elements';

export default class List extends React.Component {
  render() {
    return (
      <View>
        <Header
          leftComponent={
            <Icon
              name="arrow-left"
              type="font-awesome"
              onPress={() => this.props.navigation.navigate('Start')}
              color="white"
            />
          }
          centerComponent={{
            text: 'Astronomy',
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
              height: 450,
            }}>
            <TouchableOpacity
              style={styles.startButton}
              onPress={() => this.props.navigation.navigate('Planet')}>
              <Text style={{ fontSize: 15, fontWeight: 'bold'}}>Planet</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.startButton}
              onPress={() => this.props.navigation.navigate('Constellation')}>
              <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                Constellation
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.startButton}
              onPress={() => this.props.navigation.navigate('Comet')}>
              <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Comet</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.startButton}
              onPress={() => this.props.navigation.navigate('Dwarf')}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 15,
                  fontWeight: 'bold',
                }}>
                Dwarf Planets
              </Text>
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
    backgroundColor: '#1eb7e6',
    borderRadius: 10,
    marginTop: 50,
    width: 100,
    padding: 10,
  },
});

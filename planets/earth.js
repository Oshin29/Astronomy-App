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

export default class Earth extends React.Component {
  render() {
    return (
      <View>
        <Header
      leftComponent = {
        <Icon name = "arrow-left" type = "font-awesome"
        onPress = { ()=>this.props.navigation.navigate('Planet')}
        color='white'
        />
      }
      centerComponent={{
        text: 'Earth',
        style: { color: '#1eb7e6', fontSize: 20, fontWeight: 'bold' },
      }}
      rightComponent={
        <Icon name = "home" 
        onPress = {()=> this.props.navigation.navigate('Start')}
        color='white'
        />
        }
      backgroundColor = "purple"
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
              source={require('../assets/earth.jpg')}
              style={{ width: 315, height: 300, justifyContent: 'center' }}
            />
            <Text style={styles.textStyle}>Earth</Text>
            <Text style={{ color: 'aqua' }}>
              Our home planet is the third planet from the Sun, and the only
              place we know of so far that’s inhabited by living things.While
              Earth is only the fifth largest planet in the solar system, it is
              the only world in our solar system with liquid water on the
              surface. Just slightly larger than nearby Venus, Earth is the
              biggest of the four planets closest to the Sun, all of which are
              made of rock and metal.The name Earth is at least 1,000 years old.
              All of the planets, except for Earth, were named after Greek and
              Roman gods and goddesses. However, the name Earth is a Germanic
              word, which simply means “the ground.”Our atmosphere protects us
              from incoming meteoroids, most of which break up in our atmosphere
              before they can strike the surface.It has one moon.
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

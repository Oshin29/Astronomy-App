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

export default class Ursa extends React.Component {
  render() {
    return (
      <View>
        <Header
          leftComponent={
            <Icon
              name="arrow-left"
              type="font-awesome"
              onPress={() => this.props.navigation.navigate('Constellation')}
              color="white"
            />
          }
          centerComponent={{
            text: 'Ursa Major',
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
              source={require('../assets/UrsaMajor.jpg')}
              style={{ width: 315, height: 300, justifyContent: 'center' }}
            />
            <Text style={styles.textStyle}>Ursa Major</Text>
            <Text style={{ color: 'aqua' }}>
              The Big Dipper is popularly thought of as a constellation itself,
              but is in fact an asterism within the constellation of Ursa Major.
              It is said to be the most universally recognized star pattern,
              partially because it’s always visible in the northern hemisphere.
              It has great significance in the mythologies of multiple cultures
              around the world.The seven stars of the Big Dipper are easily
              recognized and almost always visible. They form part of the
              backside and tail of the large bear. While the rest of the bear
              definitely takes the shape of its namesake, it’s not often visible
              in light polluted areas. The Big Dipper is more than just a pretty
              shape; the outer edge of its “bowl” will always lead you to the
              North Star, aiding in navigation for centuries past. Simply make a
              line with the two stars of the Big Dipper’s outer edge, extend
              that line up into the sky, and at about five times the distance
              between the two stars you started with, you’ll find the North
              Star.
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

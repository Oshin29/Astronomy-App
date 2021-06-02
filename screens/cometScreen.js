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
          leftComponent={
            <Icon
              name="arrow-left"
              type="font-awesome"
              onPress={() => this.props.navigation.navigate('List')}
              color="white"
            />
          }
          centerComponent={{
            text: 'Comets',
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
              source={require('../assets/comets.jpg')}
              style={{ width: 315, height: 300, justifyContent: 'center' }}
            />
            <Text style={{ color: 'aqua' }}>
              Comets are cosmic snowballs of frozen gases, rock and dust that
              orbit the Sun. When frozen, they are the size of a small town.
              When a comet's orbit brings it close to the Sun, it heats up and
              spews dust and gases into a giant glowing head larger than most
              planets. The dust and gases form a tail that stretches away from
              the Sun for millions of miles. There are likely billions of comets
              orbiting our Sun in the Kuiper Belt and even more distant Oort
              Cloud. The current number of known comets is: 3,723
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

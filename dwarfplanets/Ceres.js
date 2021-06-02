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

export default class Ceres extends React.Component {
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
            text: 'Ceres',
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
              source={require('../assets/ceres.jpg')}
              style={{ width: 315, height: 300, justifyContent: 'center' }}
            />
            <Text style={styles.textStyle}>Ceres</Text>
            <Text style={{ color: 'aqua' }}>
              Dwarf planet Ceres is the largest object in the asteroid belt
              between Mars and Jupiter and the only dwarf planet located in the
              inner solar system. It was the first member of the asteroid belt
              to be discovered when Giuseppe Piazzi spotted it in 1801.Called an
              asteroid for many years, Ceres is so much bigger and so different
              from its rocky neighbors that scientists classified it as a dwarf
              planet in 2006. Even though Ceres comprises 25 percent of the
              asteroid belt's total mass, tiny Pluto is still 14 times more
              massive.Ceres is named for the Roman goddess of corn and harvests.
              The word cereal comes from the same name.
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

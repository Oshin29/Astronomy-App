import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StartScreen from './screens/startScreen';
import List from './screens/ListScreen';
import Planet from './screens/plantScreen';
import Constellation from './screens/constellation';
import Comet from './screens/cometScreen';
import Dwarf from './screens/DwarfPlanet';
import Mercury from './planets/mercury';
import Venus from './planets/venus';
import Earth from './planets/earth';
import Mars from './planets/mars';
import Jupiter from './planets/jupiter';
import Saturn from './planets/saturn';
import Uranus from './planets/uranus';
import Neptune from './planets/neptune';
import Ursa from './constellation/Ursa';
import Orion from './constellation/Orion';
import Taurus from './constellation/Taurus';
import Scorpius from './constellation/Scorpius';
import Pisces from './constellation/Pisces';
import Ceres from './dwarfplanets/Ceres';
import Eris from './dwarfplanets/Eris';
import Makemake from './dwarfplanets/Makemake';
import Pluto from './dwarfplanets/Pluto';
import Haumea from './dwarfplanets/Haumea';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}

const SwitchNavigator = createSwitchNavigator({
  Start: { screen: StartScreen },
  List: { screen: List },
  Planet: { screen: Planet },
  Constellation: { screen: Constellation },
  Comet: { screen: Comet },
  Dwarf: { screen: Dwarf },
  Mercury: { screen: Mercury },
  Venus: { screen: Venus },
  Earth: { screen: Earth },
  Mars: { screen: Mars },
  Jupiter: { screen: Jupiter },
  Saturn: { screen: Saturn },
  Uranus: { screen: Uranus },
  Neptune: { screen: Neptune },
  Ursa: { screen: Ursa },
  Orion: { screen: Orion },
  Taurus: { screen: Taurus },
  Scorpius: { screen: Scorpius },
  Pisces: { screen: Pisces },
  Ceres: { screen: Ceres },
  Eris: { screen: Eris },
  Haumea: { screen: Haumea },
  Makemake: { screen: Makemake },
  Pluto: { screen: Pluto },
});

const AppContainer = createAppContainer(SwitchNavigator);
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

// Screens
import HomeScreen from './src/screens/home.js';
import SimpleCounterScreen from './src/screens/simpleCounter.js';
import RenderDataScreen from './src/screens/renderData.js';
import Detail from './src/screens/detail';
const screens = {
  'Welcome!': {
    screen: HomeScreen,
  },
  'Simple Counter': {
    screen: SimpleCounterScreen,
  },
  'Render data practice': {
    screen: RenderDataScreen,
  },
  'Detail': {
    screen: Detail,
  }
}

const stack = createStackNavigator(screens);
export default createAppContainer(stack);
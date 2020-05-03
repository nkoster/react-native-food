import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SearchScreen from './src/screens/SearchScreen'
import DetailsScreen from './src/screens/DetailsScreen'

const navigator = createStackNavigator({
  SearchScreen,
  DetailsScreen
}, {
  initialRouteName: 'SearchScreen',
  defaultNavigationOptions: {
    title: 'Gimme Food!'
  }
})

export default createAppContainer(navigator)

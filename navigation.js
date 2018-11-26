import { createStackNavigator } from "react-navigation";
import Home from './screens/Home/Home';

export const AppNavigator = createStackNavigator(
    {
        HomeScreen : Home
    },
    {
        initialRouteName: "HomeScreen"
    }
)
  
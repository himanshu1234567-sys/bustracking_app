import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './src/app/store';
import BusListScreen from './src/screens/BusListScreens';
import BusDetailScreen from './src/screens/BusDetailsScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="BusList">
          <Stack.Screen name="Bus List" component={BusListScreen} />
          <Stack.Screen name="Bus Detail" component={BusDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

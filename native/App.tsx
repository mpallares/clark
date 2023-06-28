import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './src/screens/Home/Home';
import { Details } from './src/screens/Details/Details';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { List } from './src/screens/List/List';
import { RootStackParamList } from './src/utils/types';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
            cardStyle: { backgroundColor: '#fff' },
          }}
        >
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='List' component={List} />
          <Stack.Screen name='Details' component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

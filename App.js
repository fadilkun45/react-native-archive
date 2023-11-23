import { NavigationContainer } from '@react-navigation/native';
import Home from './Screens/Home';
import Detail from './Screens/Detail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Home' options={{headerShown: false}} component={Home}/>
      <Stack.Screen name='Detail'  component={Detail}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
}


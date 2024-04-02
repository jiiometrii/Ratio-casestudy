import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PrefSettings from './screens/prefSettings';
import GenderSelection from './screens/genderSelection';
import { React } from 'react-native';
import { useFonts } from 'expo-font';

const Stack = createStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'outfit-semibold': require('./assets/fonts/Outfit-SemiBold.ttf'),
    'outfit-light': require('./assets/fonts/Outfit-Light.ttf'),
    'zilla': require('./assets/fonts/ZillaSlab-Regular.ttf'),
    'zilla-bold': require('./assets/fonts/ZillaSlab-Bold.ttf'),
    'zilla-semibold': require('./assets/fonts/ZillaSlab-SemiBold.ttf'),
    'zilla-light': require('./assets/fonts/ZillaSlab-Light.ttf'),
});

if (!loaded) {
    return null;
}
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="PrefSettings"
      screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="PrefSettings" component={PrefSettings} />
        <Stack.Screen name="GenderSelection" component={GenderSelection} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


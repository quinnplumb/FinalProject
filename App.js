import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Blackjack from './Blackjack';
import Strategy from './Strategy';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SecondDeal from './SecondDeal';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Blackjack'>
        <Stack.Screen name='Blackjack' component={Blackjack} />
        <Stack.Screen name='Strategy' component={Strategy} />
        <Stack.Screen name='SecondDeal' component={SecondDeal} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

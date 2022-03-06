import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Style from './Utility/style'
import { NavigationContainer } from '@react-navigation/native';
import { QuizStack } from './Navigation/navigation'

export default function App() {
  return (
    <NavigationContainer>
      <QuizStack/>
    </NavigationContainer>
  );
}  
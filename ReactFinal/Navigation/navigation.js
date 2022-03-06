import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen, { screenOptions as StartScreenOptions } from '../Screens';
import QuizScreen, { screenOptions as QuizScreenOprions } from '../Screens/quiz';
import ResultScreen, { screenOptions as ResultScreenOptions } from '../Screens/result';

const QuizStackNavigator = createStackNavigator();
export const QuizStack = () =>{
    return(
         <QuizStackNavigator.Navigator>
             <QuizStackNavigator.Screen name='start' component={StartScreen} options={StartScreenOptions}/>
             <QuizStackNavigator.Screen name='quiz' component={QuizScreen} options={QuizScreenOprions}/>
             <QuizStackNavigator.Screen name='result' component={ResultScreen} options={ResultScreenOptions}/>
         </QuizStackNavigator.Navigator>
    )
}
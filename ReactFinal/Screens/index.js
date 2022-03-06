import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native';
import Style from '../Utility/style';

const StartScreen = props =>{

    const [data,setData] = useState([]);
    const indexer = 0;

    const loadData = async() =>{
        const url = 'https://opentdb.com/api.php?amount=2&category=18';
        const response = await fetch(url, {
            method: 'GET'
        })
        const serverData = await response.json();
        setData(serverData);
    }

    useEffect(()=>{
        loadData();
    },[loadData])

    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center',backgroundColor:'lightblue',marginTop:40}}>
            <View name='image' style={{height:'80%',width:'80%',justifyContent:'center',alignItems:'center'}}>
                <Image
                    style={{width:'100%',height:'80%',resizeMode:'stretch'}}
                    source={require('../assets/splash_logo.png')}
                />
            </View>
            <TouchableOpacity style={Style.button} onPress={() =>{props.navigation.navigate('quiz',{item:[data.results,indexer,[]]})}}>
                <Text style={Style.startText}>Let's Play</Text>
            </TouchableOpacity>
        </View>
    )
}

export const screenOptions = navData => {
    return {
        headerShown: false
    }
}

export default StartScreen;
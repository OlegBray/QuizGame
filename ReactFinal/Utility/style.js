import React from 'react';
import {StyleSheet} from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        width:'100%'
    },
    button:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d3d3d3',
        borderRadius: 20,
        width: '80%',
        margin: 20,
        height: '10%',
    },
    quizButton:{
        backgroundColor: '#d3d3d3',
        borderRadius: 10,
        width: '100%',
        marginTop:12,
    },
    startContainer:{
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    startText:{
        fontStyle:'italic',
        fontSize: 40
    },
    header:{
        flexDirection: 'row',
        width:'100%',
        height: '8%',
        marginTop: 40,
        backgroundColor:'lightblue',
    },
    questionNum:{
        width:'70%',
        alignItems:'center',
        paddingTop:12
    },
    logo:{
        width:'30%',
        alignItems:'center',
        paddingTop:10,
        paddingHorizontal:10
    },
    question:{
        height: '40%',
        paddingTop:20
    },
    buttonList:{
        width:'100%',
        height: '40%',
        margin: 2
    },



    textStyleSmall:{
        fontSize: 15
    },
    textStyleMedium:{
        fontSize: 30
    },
    textStyleLarge:{
        fontSize: 45
    }
});
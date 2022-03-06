import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Style from '../Utility/style'

const ResultScreen = props => {
    const data = props.route.params.item[0];
    const answers = props.route.params.item[1];

    const ResultCheckup = () => {
        let correctCounter = 0;
        for (let i = 0; i < data.length; i++) {
            if (data[i].correct_answer == answers[i])
                correctCounter++;
        }
        if (correctCounter >= data.length / 2)
            return true;
        return false;
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', marginTop: 40 }}>
            {ResultCheckup() ? (
                <View style={Style.container}>
                    <View name='header' style={{ flex: 0.2, width: '100%', backgroundColor: '#228B22', flexDirection: 'row' }} >
                        <View style={{ flex: 2 }}></View>
                        <View name='logo' style={{ flex: 1, paddingTop: 10, paddingHorizontal: 10 }}>
                            <Image
                                style={{ width: '80%', height: '80%', resizeMode: 'stretch' }}
                                source={require('../assets/logo.png')}
                            />
                        </View>
                    </View>
                    <View style={{ flex: 2, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ flex: 0.5, justifyContent: 'center' }}><Text style={{ fontSize: 60, fontWeight: 'bold', color: '#228B22' }}>Great Job</Text></View>
                        <View style={{ flex: 0.3, marginLeft: '20%', marginRight: '20%' }}><Text style={{ fontSize: 20 }}>You asnwered all the questions correctly!</Text></View>
                        <View style={{ width: '100%', height: '70%', justifyContent: 'center', alignItems: 'center', paddingBottom: 30 }}>
                            <Image
                                style={{ width: '80%', height: '85%', resizeMode: 'stretch' }}
                                source={require('../assets/success_character.png')}
                            />
                        </View>
                    </View>
                </View>
            ) : (
                <View style={Style.container}>
                    <View name='header' style={{ flex: 0.2, width: '100%', backgroundColor: '#e62020', flexDirection: 'row' }} >
                        <View style={{ flex: 2 }}></View>
                        <View name='logo' style={{ flex: 1, paddingTop: 10, paddingHorizontal: 10 }}>
                            <Image
                                style={{ width: '80%', height: '80%', resizeMode: 'stretch' }}
                                source={require('../assets/logo.png')}
                            />
                        </View>
                    </View>
                    <View style={{ flex: 2, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ flex: 0.5, justifyContent: 'center' }}><Text style={{ fontSize: 60, fontWeight: 'bold', color: '#e62020' }}>Failed</Text></View>
                        <View style={{ flex: 0.3, marginLeft: '20%', marginRight: '20%' }}><Text style={{ fontSize: 20 }}>You must to asnwer at least 10 questions right!</Text></View>
                        <View style={{ width: '100%', height: '70%', justifyContent: 'center', alignItems: 'center', paddingBottom: 30 }}>
                            <Image
                                style={{ width: '80%', height: '85%', resizeMode: 'stretch' }}
                                source={require('../assets/failed_character.png')}
                            />
                        </View>
                    </View>
                </View>
            )
            }
        </View>
    )
}

export const screenOptions = navData => {
    return {
        headerShown: false
    }
}

export default ResultScreen;
import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import Style from '../Utility/style';
import CountDown from 'react-native-countdown-component';

const QuizScreen = props => {

    const data = props.route.params.item[0];
    const questionIndex = props.route.params.item[1];
    const answers = props.route.params.item[2];

    const ShuffleArray = (arrIn) => {
        let arrOut = []
        count = 0;
        arrIn.forEach(element => {
            let num = parseInt(Math.random() * (arrIn.length));
            while (arrOut[num] != null) {
                num = parseInt(Math.random() * (arrIn.length));
            }
            arrOut[num] = {
                answerID: count++,
                answer: element
            }
        });
        return arrOut;
    }

    const GetQuestions = (item) => {
        let final = {
            difficulty: item.difficulty,
            question: item.question,
            answers: ShuffleArray([item.correct_answer].concat(item.incorrect_answers)),
            correct: item.correct_answer
        }
        return final;
    }

    const CleanString = (string) => {
        let newString = string;
        let tags = [
            "&quot;",
            "&#039;",
            "&lt;",
            "&gt;"
        ];
        tags.forEach(element => {
            while (newString.includes(element))
                newString = newString.replace(element, "")
        });
        return newString
    }
    
    let quest;
    if (questionIndex < data.length) {
        quest = GetQuestions(data[questionIndex], questionIndex);
    }

    return (
        <View style={Style.container}>
            {questionIndex < data.length ? (
                <View style={Style.container}>
                    <View name='header' style={Style.header} >
                        <View name='questionNum' style={Style.questionNum}>
                            <Text style={Style.textStyleMedium}>{questionIndex + 1}/{data.length}</Text>
                        </View>
                        <View name='logo' style={Style.logo}>
                            <Image
                                style={{ width: '80%', height: '80%', resizeMode: 'stretch' }}
                                source={require('../assets/logo.png')}
                            />
                        </View>
                    </View>
                    <View style={Style.container}>
                        <View name='question' style={Style.question}>
                            <Text style={Style.textStyleMedium}>{CleanString(quest.question)}</Text>
                        </View>
                        <FlatList
                            style={Style.buttonList}
                            data={quest.answers}
                            keyExtractor={item => item.answerID}
                            renderItem={answer =>
                                <TouchableOpacity onPress={() => { props.navigation.navigate('quiz', { item: [data, questionIndex + 1, answers.concat([answer.item.answer])] }) }}>
                                    <View style={Style.quizButton}><Text style={Style.textStyleMedium}>{CleanString(answer.item.answer)}</Text></View>
                                </TouchableOpacity>
                            }
                        />
                        <View name='timer' style={Style.logo}>
                            <CountDown
                                until={60}
                                id={questionIndex.toString()}
                                digitStyle={{ backgroundColor: 'lightblue', borderRadius: 50, marginBottom: 25 }}
                                timeLabels={{ s: null }}
                                timeToShow={['S']}
                                onFinish={() => props.navigation.navigate('quiz', { item: [data, questionIndex + 1, answers.concat([''])] })}
                                size={data.length}
                            />
                        </View>
                    </View>
                </View>
            ) : (
                <View>
                    {props.navigation.navigate('result', { item: [data, answers] })}
                </View>
            )}
        </View>

    )
}

export const screenOptions = navData => {
    return {
        headerShown: false
    }
}

export default QuizScreen;
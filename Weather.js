import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons'

export default class Weather extends Component {
    render() {
        return (
            <LinearGradient 
                colors={["#00C6FB", "#005BEA"]} 
                style={styles.container}>
                <View style={styles.weatherView}>
                    <Ionicons color="white" size={144} name="ios-rainy" />
                    <Text style={styles.temp}>10º</Text>
                </View>
                <View style={styles.weatherDesc}>
                    <Text style={styles.title}>Title</Text>
                    <Text style={styles.subTitle}>subTitle</Text>
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    weatherView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent"
    },
    weatherDesc: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25,
        backgroundColor: "transparent"
    },
    temp: {
        fontSize: 48,
        color: "white",
        marginTop:10
    },
    title: {
        fontSize: 38,
        color: "white",
        paddingBottom: 10
    },
    subTitle: {
        fontSize: 24,
        color: "white",
        paddingBottom: 24
    }
})
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import PropTypes from 'prop-types'

const weatherCondition = {
    Rain:{
        colors: ["#00C6FB", "#005BEA"],
        title: "Rainnig~~~~",
        subTitle: "Carry an umbrella",
        icon: "weather-rainy"
    },
    Clear:{
        colors: ["#FEF253", "#FF7300"],
        title: "Clear~~~~",
        subTitle: "sunny sunny",
        icon: "weather-sunny"
    },
    Thunderstorm:{
        colors: ["#00ECBC", "#007ADF"],
        title: "Thunderstorm ㅠㅠ",
        subTitle: "Scary",
        icon: "weather-lightning"
    },
    Clouds:{
        colors: ["#D7D2CC", "#304352"],
        title: "Cloud~~~~",
        subTitle: "아 왜 구름이 끼고 날리야",
        icon: "weather-cloudy"
    },
    Snow:{
        colors: ["#7DE2FC", "#B9B6E5"],
        title: "Snow~~~~",
        subTitle: "snow man",
        icon: "weather-snowy"
    },
    Drizzle:{
        colors: ["#89F7FE", "#66A6FF"],
        title: "Drizzle~~~~",
        subTitle: "what drizzle?",
        icon: "weather-hail"
    },
    Haze: {
        colors: ["#89F7FE", "#66A6FF"],
        title: "Haze",
        subTitle: "Don't know what that is 💩",
        icon: "weather-hail"
    },
    Mist: {
        colors: ["#D7D2CC", "#304352"],
        title: "Mist!",
        subTitle: "It's like you have no glasses on.",
        icon: "weather-fog"
    }
}

function Weather({temp, condition}) {
    console.log(condition)
    return (
        <LinearGradient 
            colors={weatherCondition[condition].colors} 
            style={styles.container}>
            <View style={styles.weatherView}>
                <MaterialCommunityIcons color="white" size={144} name={weatherCondition[condition].icon} />
                <Text style={styles.temp}>{temp}º</Text>
            </View>
            <View style={styles.weatherDesc}>
                <Text style={styles.title}>{weatherCondition[condition].title}</Text>
                <Text style={styles.subTitle}>{weatherCondition[condition].subTitle}</Text>
            </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.string.isRequired
}

export default Weather;

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
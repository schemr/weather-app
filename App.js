import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Weather from './Weather'

const API_KEY = 'ea442208ccaef7c1000116da2b603054';

export default class App extends Component {
	state = {
		isLoaded: false,
		error: null,
		temp: null,
		condition: null
	}

	componentDidMount() {
		navigator.geolocation.getCurrentPosition(
			position => {
				this._getWeather(position.coords.latitude, position.coords.longitude);
			},
			error => {
				console.log(err);
				this.setState({
					error: error
				})
			}
		);
	}

	_getWeather(lat, lon) {
		fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
			.then(response => response.json())
			.then(data => {
					this.setState({
						temp: data.main.temp,
						condition: data.weather[0].main,
						isLoaded: true
					})
				}
			)
	}

	render() {
		const { isLoaded, error, temp, condition } = this.state;
		return (
			<View style={styles.container}>
				<StatusBar hidden={true} />
				{ isLoaded ? (
					<Weather temp={Math.floor(temp - 273.15)} condition={condition} />
				) : (
					<View style={styles.loading}>
						<Text style={styles.loadingText}>Loading Weather...</Text>
						{ error ? <Text style={styles.errorText}>{error}</Text> : null }
					</View>
				)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff'
	},
	loading: {
		backgroundColor: '#FDF6AA',
		flex: 1,
		justifyContent: 'flex-end',
		paddingLeft: 25
	},
	loadingText: {
		fontSize: 38,
		marginBottom: 100
	},
	errorText: {
		backgroundColor: 'transparent',
		color: 'red'
	}
});

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  state = {
    isLoaded: false
  }

  render() {
    const { isLoaded } = this.state
    return (
      <View style={styles.container}>
        { isLoaded ? null : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Loading Weather...</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
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
  }
});

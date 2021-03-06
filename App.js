import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import RootNavigation from './navigation/RootNavigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

export default class App extends React.Component {
	render() {
		return (
			<Provider store={createStore(reducers)}>
				<View style={styles.container}>
					{Platform.OS === 'ios' && <StatusBar barStyle="default" />}
					{Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
					<RootNavigation />
				</View>
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	statusBarUnderlay: {
		height: 24,
		backgroundColor: 'rgba(0,0,0,0.2)',
	},
});

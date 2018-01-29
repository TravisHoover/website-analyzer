import React, {Component} from 'react';
import {StyleSheet, TextInput, Text, View, ActivityIndicator} from 'react-native';
import styles from './Styles'
import { Button } from './js/common/Button'

export default class App extends Component {
	constructor(){
		super();
		this.state = {
			website: '',
			done: false,
			techs: [],
			loading: false,
		}
	}

	analyze(website) {
		this.setState({loading: true});
			fetch(`https://api.letsvalidate.com/v1/technologies/?url=${website}`)
				.then((response) => response.json())
				.then((response) => {
					let req = response.applications.map(application => {
						return application.name
					});
					Promise.all(req).then((results) => {
						this.setState({techs: results, done: true, loading: false});
						return(
							<Text>{results}</Text>
						)
					})
				})
	}

	clear() {
		this.setState({website: '', done: false, techs: []})
	}

	render() {
		if (!this.state.done && !this.state.loading) {
			return (
				<View style={styles.container}>
					<TextInput
						style={styles.instructions}
						placeholder="Enter website to be analyzed"
						onChangeText={(website) => this.setState({website})}
					/>
					<Button onPress={() => this.analyze(this.state.website)}>
						Analyze
					</Button>
				</View>
			);
		} else if (this.state.done && this.state.techs && !this.state.loading) {
			return(
				<View>
					{this.state.techs.map((item, key) => (
						<Text key={key}> {item}</Text>
					))}
					<Button onPress={() => this.clear()}>
						Scan again
					</Button>
				</View>
			)
		} else {
			return(
				<View>
					<ActivityIndicator/>
				</View>
			)
		}
	}
}
import React, {Component} from 'react';
import {ScrollView, TouchableOpacity, TextInput, Text, Image, View, ActivityIndicator} from 'react-native';
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
			error: null,
		}
	}

	analyze(website) {
		let match = website.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
		website = (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0)
			? match[2]
			: website;
		this.setState({loading: true});
			fetch(`https://api.letsvalidate.com/v1/technologies/?url=${website}`)
				.then((response) => response.json())
				.then((response) => {
					if (response.error){
						return this.setState({error: response.error.message})
					}
					let req = response.applications.map(application => {
						return application.name
					});
					Promise.all(req).then((results) => {
						this.setState({techs: results, done: true, loading: false});
					})
				})
	}

	clear() {
		this.setState({
			website: '',
			done: false,
			techs: [],
			loading: false,
			error: null
		})
	}

	render() {
		if (!this.state.done && !this.state.loading) {
			return (
				<View style={styles.container}>
					<Image
						style={styles.logo}
						source={require('./icon.png')}
					/>
					<TextInput
						style={styles.instructions}
						placeholder="Enter website to be analyzed"
						placeholderTextColor="white"
						onChangeText={(website) => this.setState({website})}
					/>
					<Button onPress={() => this.analyze(this.state.website)}>
						Analyze
					</Button>
				</View>
			);
		} else if (this.state.done && this.state.techs && !this.state.loading) {
			return(
				<View style={styles.container}>
					<ScrollView contentContainerStyle={styles.scrollContainer}>
						{this.state.techs.map((item, key) => (
							<TouchableOpacity key={key} style={styles.results}>
							<Text style={styles.textStyle}>
								{item}
							</Text>
							</TouchableOpacity>
						))}
					</ScrollView>
					<Button onPress={() => this.clear()}>
						Scan again
					</Button>
				</View>
			)
		} else if(this.state.error) {
			return(
				<View style={styles.container}>
					<Text style={styles.error}>
						{this.state.error}
					</Text>
					<Button onPress={() => this.clear()}>
						Scan again
					</Button>
				</View>
			)
		} else {
			return(
				<View style={styles.container}>
					<ActivityIndicator size="large"/>
				</View>
			)
		}
	}
}
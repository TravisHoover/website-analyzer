import React, {Component} from 'react';
import {ScrollView, TouchableOpacity, TextInput, Text, KeyboardAvoidingView, View, Image, Linking} from 'react-native';
import styles from './Styles'
import { Button } from './js/common/Button'
import { PacmanIndicator } from 'react-native-indicators';
import Expand from 'react-native-simple-expand';
import * as firebase from 'firebase';

// Initialize Firebase
const config = {
	apiKey: "AIzaSyAM-zATUpHoSY1FYT_ar3Lf2s26IVM-d10",
	authDomain: "website-analyzer-e4f1b.firebaseapp.com",
	databaseURL: "https://website-analyzer-e4f1b.firebaseio.com",
	projectId: "website-analyzer-e4f1b",
	storageBucket: "",
	messagingSenderId: "510936853751"
};
firebase.initializeApp(config);

export default class App extends Component {
	constructor(){
		super();
		this.state = {
			website: '{?}',
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
						return application
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
				<KeyboardAvoidingView behavior="padding" style={styles.container}>
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
				</KeyboardAvoidingView>
			);
		} else if (this.state.done && this.state.techs && !this.state.loading) {
			return(
				<View style={styles.container}>
					<ScrollView contentContainerStyle={styles.scrollContainer}>
						{this.state.techs.map((item, key) => (
							<View key={key}>
								<TouchableOpacity
									style={styles.results}
									onPress={() => {
										if (this.state.open === item) {
											this.setState({open: null})
										} else {
											this.setState({open: item})
										}
									}}>
										<Text style={styles.textStyle}>
											{item.name}
										</Text>

										<Expand value={this.state.open === item}>
											{/*<Text style={styles.details}>*/}
												{/*{item.version}*/}
											{/*</Text>*/}
											<Text style={styles.details}
											      onPress={() => Linking.openURL(`${item.website}`)}>
												{item.website}
											</Text>
										</Expand>
								</TouchableOpacity>
							</View>
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
					<PacmanIndicator color="white" size={150}/>
				</View>
			)
		}
	}
}
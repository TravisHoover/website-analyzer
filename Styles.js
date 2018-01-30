import React, { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: '#5f5f5f',
		flex: 1,
		justifyContent: 'center',
		paddingBottom: 30,
		paddingTop: 30,
	},
	scrollContainer: {
		width: '100%',
	},
	instructions: {
		color: '#f4f5ff',
		marginBottom: 5,
		height: 45,
		width : '85%',
		textAlign: 'center',
	},
	results: {
		backgroundColor: '#1531ff',
		width: 200,
		borderTopRightRadius: 30,
		borderTopLeftRadius: 30,
		marginTop: 5,
		marginBottom: 5,
		marginLeft: 5,
		marginRight: 5,
		paddingTop: 9,
		paddingBottom: 9
	},
	welcome: {
		fontSize: 20,
		margin: 10,
		textAlign: 'center',
	},
	buttonStyle: {
		backgroundColor: '#1531ff',
		width: 300,
		borderColor: 'white',
		borderWidth: 3,
		borderRadius: 10,
		marginTop: 5,
		marginBottom: 5,
		marginLeft: 5,
		marginRight: 5,
		paddingTop: 9,
		paddingBottom: 9
	},
	textStyle: {
		alignSelf: 'center',
		color: 'white',
		fontSize: 20,
		fontWeight: '800',
		paddingTop: 10,
		paddingBottom: 10,
	},
	logo: {
		resizeMode: 'center',
	},
	error: {
		color: '#f4f5ff',
		height: 45,
		textAlign: 'center',
	},
});

export default Styles;
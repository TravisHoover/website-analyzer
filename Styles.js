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
		marginBottom: 6,
		height: 45,
		width : '85%',
		textAlign: 'center',
	},
	results: {
		backgroundColor: '#1531ff',
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
		marginTop: 30,
		marginBottom: 14,
		marginLeft: 5,
		marginRight: 5,
		paddingTop: 9,
		paddingBottom: 9
	},
	textStyle: {
		alignSelf: 'center',
		textAlign: 'center',
		color: 'white',
		fontSize: 20,
		fontWeight: '800',
		paddingTop: 10,
		paddingBottom: 10,
	},
	details: {
		color: '#f4f5ff',
		marginBottom: 6,
		height: 45,
		width : '85%',
		paddingTop: 8,
		textAlign: 'center',
		alignSelf: 'center',
	},
	logo: {
		marginTop: 20,
		marginBottom: 30,
		width: 200,
		height: 200,
		borderRadius: 200/2,
		backgroundColor: 'white'
	},
	logoText: {
		flex: 1,
		fontSize: 100,
		textAlign: 'center',
	},
	error: {
		color: '#f4f5ff',
		height: 45,
		textAlign: 'center',
	},
});

export default Styles;
import React, { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: '#515151',
		flex: 1,
		justifyContent: 'center',
		paddingBottom: 30,
	},
	instructions: {
		color: '#f4f5ff',
		marginBottom: 5,
		height: 45,
		width : '85%',
		textAlign: 'center',
	},
	results: {
		color: '#f4f5ff',
		backgroundColor: '#15259e',
		height: 45,
		width: 200,
		marginBottom: 10,
		borderTopLeftRadius: 1,
		borderTopRightRadius: 1,
		borderRadius: 5,
		textAlign: 'center',
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
		borderWidth: 4,
		borderRadius: 1,
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
		paddingBottom: 10
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
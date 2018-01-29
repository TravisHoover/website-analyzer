import React, { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: '#374bf8',
		flex: 1,
		justifyContent: 'center',
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
		height: 45,
		textAlign: 'center',
	},
	welcome: {
		fontSize: 20,
		margin: 10,
		textAlign: 'center',
	},
	buttonStyle: {
		backgroundColor: '#3d3f44',
		width: 300,
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
		color: '#040302',
		fontSize: 20,
		fontWeight: '800',
		paddingTop: 10,
		paddingBottom: 10
	},
	logo: {
		borderColor: 'white'
	}
});

export default Styles;
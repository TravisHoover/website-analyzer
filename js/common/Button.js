import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children } ) => {
	return(
		<TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
			<Text style={styles.textStyle}>
				{children}
			</Text>
		</TouchableOpacity>
	)
};

const styles = {
	buttonStyle: {
		backgroundColor: '#403ac9',
		width: 300,
		borderWidth: 4,
		borderRadius: 1,
		borderColor: '#403ac9',
		marginTop: 5,
		marginBottom: 5,
		marginLeft: 5,
		marginRight: 5,
		paddingTop: 9,
		paddingBottom: 9
	},
	textStyle: {
		alignSelf: 'center',
		color: '#fff',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	}
};

export { Button };
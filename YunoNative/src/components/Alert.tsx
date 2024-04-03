import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useAlert } from '../hooks'
import { twStyle } from '../lib';

export default function Alert() {
	const { alert, removeAlert } = useAlert();

	useEffect(() => {
		let timeOut: NodeJS.Timeout;
		if (alert !== null) {
			timeOut = setTimeout(() => { removeAlert(); }, 7000);
		}
		return () => { clearTimeout(timeOut); };
	}, [alert]);

	return <>
		{alert && <View>
			<Text style={twStyle('', {
				'text-red-500': alert.type === 'error'
			})}>{alert.message}</Text>
		</View>}
	</>
}
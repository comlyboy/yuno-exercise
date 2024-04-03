import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useAlert } from '../hooks'
import { twClass } from '../lib';
import { AlertTypeEnum } from '../types';

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
		{alert && <View style={twClass('border border-slate-300 bg-white', {
			'!border-red-600': alert.type === AlertTypeEnum.ERROR,
			'!border-emerald-600': alert.type === AlertTypeEnum.SUCCESS
		})}>
			<Text style={twClass({
				'text-red-600': alert.type === AlertTypeEnum.ERROR,
				'text-emerald-500': alert.type === AlertTypeEnum.SUCCESS,
			})}>{alert.message}</Text>
		</View>}
	</>
}
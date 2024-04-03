import { Text, SafeAreaView } from 'react-native'
import { useBalance } from '../hooks';
import { useEffect } from 'react';

export default function Dashboard() {
	const { balance, fetchBalance } = useBalance();

	useEffect(() => {
		fetchBalance();
	}, [])

	return <SafeAreaView>
		<Text>{balance}</Text>
	</SafeAreaView>

}
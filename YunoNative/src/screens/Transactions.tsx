import { useEffect } from 'react';
import { SafeAreaView } from 'react-native';

import TransactionCard from '../components/TransactionCard';
import { useTransaction } from '../hooks';

export default function Transactions() {
	const { isLoading, transactions, fetchTransactions } = useTransaction();

	useEffect(() => { fetchTransactions(); }, [])

	console.log(isLoading);

	return <SafeAreaView>
		{transactions.map(transaction => <TransactionCard transaction={transaction} onTap={() => { }} />)}
	</SafeAreaView>

}
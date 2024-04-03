import { useEffect } from 'react';
import { SafeAreaView } from 'react-native';

import TransactionCard from '../components/TransactionCard';
import { useTransaction } from '../hooks';

export default function Transactions() {
	const { transactions, fetchTransactions } = useTransaction();

	useEffect(() => { fetchTransactions(); }, [])

	return <SafeAreaView>
		{transactions.map(transaction => <TransactionCard transaction={transaction} onTap={() => { }} />)}
	</SafeAreaView>

}
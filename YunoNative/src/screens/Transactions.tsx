import { SafeAreaView } from 'react-native';

import TransactionCard from '../components/TransactionCard';
import { userGetTransaction } from '../hooks';

export default function Transactions() {
	const { transactions } = userGetTransaction();

	return <SafeAreaView>
		{transactions.map(transaction => <TransactionCard transaction={transaction} onTap={() => { }} />)}
	</SafeAreaView>

}
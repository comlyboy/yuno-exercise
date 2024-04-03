import { Text, TouchableOpacity } from 'react-native';
import { ITransaction } from '../types/transaction.interface';
import { twClass } from '../lib';

interface ICardProps {
	transaction: ITransaction;
	onTap: () => void;
}

export default function TransactionCard({ transaction, onTap }: ICardProps) {
	return <>
		<TouchableOpacity onPress={() => onTap()} style={twClass('p-2 border border-slate-300 rounded-lg')}>
			<Text style={twClass('text-sm')}>{transaction.amount}</Text>
			<Text style={twClass('text-xs')}>{transaction.date}</Text>
		</TouchableOpacity>
	</>

}
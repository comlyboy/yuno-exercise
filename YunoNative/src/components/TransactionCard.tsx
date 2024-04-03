import { Text, TouchableOpacity } from 'react-native';
import { ITransaction } from '../types/transaction.interface';
import { twStyle } from '../lib';

interface ICardProps {
	transaction: ITransaction;
	onTap: () => void;
}

export default function TransactionCard({ transaction, onTap }: ICardProps) {
	return <>
		<TouchableOpacity onPress={() => onTap()} style={twStyle('p-2 border border-slate-300 rounded-lg')}>
			<Text style={twStyle('text-sm')}>{transaction.amount}</Text>
			<Text style={twStyle('text-xs')}>{transaction.date}</Text>
		</TouchableOpacity>
	</>

}
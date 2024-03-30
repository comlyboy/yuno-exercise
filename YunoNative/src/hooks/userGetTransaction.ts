import { useEffect, useState } from 'react';

import { transactionService } from '../services';
import { ITransaction } from '../types';

export function userGetTransaction() {
	const [isLoading, setIsLoading] = useState(false);
	const [transactions, setTransactions] = useState<ITransaction[]>([]);

	useEffect(() => {
		helpFetchTransactions();
	}, [])

	function helpFetchTransactions() {
		setIsLoading(true);
		transactionService.getTransactions().then(transactions => {
			setIsLoading(false);
			setTransactions(transactions);
		})
			.catch(error => {
				setIsLoading(false);
			});
	}



	return {
		isLoading,
		transactions
	}
}
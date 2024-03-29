import { Injectable } from '@nestjs/common';

import { transactionList } from 'src/common/base.constant';

@Injectable()
export class TransactionService {

	async getTransactions() {
		const transactions = transactionList;
		return { transactions, transactionCount: transactions.length };
	}

}

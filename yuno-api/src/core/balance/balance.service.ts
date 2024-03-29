import { Injectable } from '@nestjs/common';

import { transactionList } from 'src/common/base.constant';

@Injectable()
export class BalanceService {

	async getBalance() {
		const balance = transactionList.reduce((previousValue, currentValue) => previousValue + currentValue.amount, 0);
		return { balance, debit: 0, credit: 0 };
	}

}

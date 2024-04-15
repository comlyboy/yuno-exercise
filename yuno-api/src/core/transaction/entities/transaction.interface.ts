export class ITransaction {
	id: string;
	date: string;
	type: 'debit' | 'credit';
	amount: number;
	description: string;
}

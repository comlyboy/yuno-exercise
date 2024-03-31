import { httpService } from "../http";
import { ITransaction } from "../types/transaction.interface";

export async function getTransactions(): Promise<ITransaction[]> {
	const { data } = await httpService.get<{ transaction: ITransaction[] }>({ path: 'transaction' });
	return data.transaction;
}
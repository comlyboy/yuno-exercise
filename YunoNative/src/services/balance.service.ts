import { httpService } from "../http";

export async function getBalance() {
	const { data } = await httpService.get<{ balance: number; }>({ path: 'balance' });
	return data.balance;
}
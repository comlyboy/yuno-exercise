import { createContext, useState } from "react";
import { AlertTypeEnum, IAlert, IApplicationContext, ITransaction } from "../types";
import { balanceService, transactionService } from "../services";

export const AppContext = createContext<IApplicationContext>({
	alert: {
		sendAlert: () => { },
		sendErrorAlert: () => { },
		removeAlert: () => { },
		alert: null,
	},
	transaction: {
		transactions: [],
		// addTransaction: () => { },
		fetchTransactions: () => { },
		isLoading: false,
	},
	balance: {
		balance: 0,
		fetchBalance: () => { },
		isLoading: false
	}
});

export default function ApplicationContext({ children }: { children: JSX.Element }) {
	const [alert, setAlert] = useState<IAlert | null>(null);
	const [transactionIsLoading, setTransactionIsLoading] = useState(false);
	const [balanceIsLoading, setBalanceIsLoading] = useState(false);
	const [transactions, setTransactions] = useState<ITransaction[]>([]);
	const [balance, setBalance] = useState(0);

	function helpFetchTransactions() {
		setTransactionIsLoading(true);
		transactionService.getTransactions().then(transactions => {
			setTransactionIsLoading(false);
			setTransactions(transactions);
		}).catch(error => setTransactionIsLoading(false));
	}

	function helpFetchBalance() {
		setBalanceIsLoading(true);
		balanceService.getBalance().then(balance => {
			setBalance(balance);
			setBalanceIsLoading(false);
		}).catch(error => setBalanceIsLoading(false));
	}

	function helpSetAlerts(alert: IAlert): void {
		alert.type = alert.type || AlertTypeEnum.SUCCESS;
		setAlert(alert);
	}

	return <AppContext.Provider value={{
		alert: {
			alert,
			sendAlert: (message, type) => helpSetAlerts({ message, type }),
			sendErrorAlert: error => {
				const message = error.message || 'An error occured!';
				helpSetAlerts({ message, type: AlertTypeEnum.ERROR });
			},
			removeAlert: () => setAlert(null),
		},
		transaction: {
			transactions,
			// addTransaction: () => { },
			fetchTransactions: () => helpFetchTransactions(),
			isLoading: transactionIsLoading,
		},
		balance: {
			balance,
			fetchBalance: () => helpFetchBalance(),
			isLoading: balanceIsLoading
		}
	}}>{children}</AppContext.Provider>;
}

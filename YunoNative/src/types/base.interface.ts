import { ITransaction } from ".";

export interface IBaseId {
	id: string;
}

export interface IEnvironmentVariable extends RecordType {
	API_URL: string;
}

export type RecordType = Record<string, any>;

export interface IBaseApiResponse<TEntity extends RecordType = any> {
	message: string;
	data: TEntity;
}
export interface IBaseApiError {
	statusCode: number;
	message: string;
	path: string;
	method: string;
	timestamp: string;
}

export interface IAlert {
	type?: AlertType;
	message: string;
}

export enum AlertTypeEnum {
	INFO = "info",
	ERROR = "error",
	SUCCESS = "success",
	WARNING = "warning"
}
export type AlertType = `${AlertTypeEnum}`;

export interface IApplicationContext {
	alert: {
		sendAlert: (message: string, type?: any) => void;
		sendErrorAlert: (error: Pick<IBaseApiError, "message">) => void;
		removeAlert: () => void;
		alert: IAlert | null;
	};
	transaction: {
		transactions: ITransaction[];
		// addTransaction: (transactionDto:) => void;
		fetchTransactions: () => void;
		isLoading: boolean;
	},
	balance: {
		balance: number;
		fetchBalance: () => void;
		isLoading: boolean;
	}
}
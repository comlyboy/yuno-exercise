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
export interface IBaseApiError { }

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
		sendErrorAlert: (error: Pick<any, "message">) => void;
		removeAlert: () => void;
		alert: IAlert | null;
	};
}
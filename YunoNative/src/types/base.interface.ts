export interface IBaseId {
	id: string;
}

export interface IEnvironmentVariable extends RecordType {
	API_URL: string;
}

export type RecordType = Record<string, any>;

export interface IBaseApiResponse<TEntity = any> {
	message: string;
	data: TEntity;
}
export interface IBaseApiError { }
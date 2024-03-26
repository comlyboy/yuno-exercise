export interface IBaseId {
	id: string;
}

export interface IEnvironmentVariable extends RecordType {
	API_URL: string;
}

export type RecordType = Record<string, any>;

export enum ApplicationEnvironmentEnum {
	DEVELOPMENT = 'development',
	PRODUCTION = 'production',
	STAGING = 'staging'
}
export type ApplicationEnvironmentType = `${ApplicationEnvironmentEnum}`;

export interface IBaseApiResponse<TEntity = any> {
	message: string;
	data: TEntity;
}
export interface IBaseApiError { }
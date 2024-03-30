import axios, { AxiosError, AxiosRequestConfig, Method } from "axios";
import { IBaseApiError, IBaseApiResponse, RecordType } from "../types";


/** Http post method */
export async function post<TResponse extends RecordType, TBody extends RecordType>({
	path,
	payload,
	options,
}: {
	path: string;
	payload: TBody;
	options?: AxiosRequestConfig<TBody>;
}) {
	const response = await getHttpClient().post(path, payload, options);
	return response.data as IBaseApiResponse<TResponse>;
}

/** Http get method */
export async function get<TResponse extends RecordType>({ path, options }: {
	path: string;
	options?: AxiosRequestConfig;
}) {
	const response = await getHttpClient().get(path, options);
	return response.data as IBaseApiResponse<TResponse>;
}

/** Http patch method */
export async function patch<TResponse extends RecordType, TBody extends RecordType = any>({
	path,
	payload,
	options,
}: {
	path: string;
	payload: TBody;
	options?: AxiosRequestConfig<TBody>;
}) {
	const response = await getHttpClient().post(path, payload, options);
	return response.data as IBaseApiResponse<TResponse>;
}

/** Http delete method */
export async function delet({ path, options }: {
	path: string;
	options?: AxiosRequestConfig;
}) {
	const response = await getHttpClient().post(path, options);
	return response.data as IBaseApiResponse;
}

/** Http for all methods. By passes axios http interceptor by choice */
export async function sendHttpRequest<TResponse extends RecordType, TBody extends RecordType = any>(
	options: Omit<AxiosRequestConfig<TBody>, 'baseURL'> & {
		/**
		 * Set `true` to use defined axios interceptor
		 * @default `true`;
		 */
		useInterception?: boolean;
	}
) {
	options.useInterception = options.useInterception || false;
	const response = options.useInterception ? await getHttpClient()(options) : await axios(options);
	return response.data as IBaseApiResponse<TResponse>;
}

export async function getFetchClient(url: string, options: RequestInit, useInterception = true) {
	if (useInterception) {
		options.headers = {
			...options.headers,
			Authorization: `Bearer `
		}
	}
	options.body = options.body ? JSON.stringify(options.body) : undefined;
	return await fetch(getBaseUrl() + url, options).then(res => res.json());
}

function getHttpClient() {
	// cancel previous http request https://www.youtube.com/watch?v=cIwpavIhI84
	const httpClient = axios.create({ baseURL: getBaseUrl() });

	httpClient.interceptors.request.use(
		config => {
			// const token = localStorage.getItem("token");
			// if (token) {
			// 	config.headers.Authorization = `Bearer ${token}`;
			// }
			return config;
		},
		error => {
			return Promise.reject({ error });
		}
	);

	httpClient.interceptors.response.use(
		response => { return response.data },
		(error: AxiosError<{ error: IBaseApiError; }>) => {
			let errorObject: IBaseApiError;
			const originalRequest = error.config as any;
			if (error.response && (error.response?.status > 399 && error.response?.status < 600)) {
				errorObject = error?.response?.data?.error;
			} else {
				const newError = (error as RecordType).error || error as AxiosError;
				const errorResponse = newError?.response! as any;

				errorObject = {
					statusCode: newError?.response?.status || 500,
					message: newError?.response?.statusText! || errorResponse?.message || error.message,
					path: errorResponse?.path,
					method: errorResponse?.method as Method,
					timestamp: errorResponse?.timestamp
				};
			};

			if (error.response?.status === 401 && !originalRequest._retry) {
				originalRequest._retry = true;
			}
			return Promise.reject({ ...errorObject });
		}
	);
	return httpClient;
}

function getBaseUrl(): string {
	const stageUrl = ' ';
	const productionUrl = ' ';
	const environment = process.env.NODE_ENV;
	switch (environment) {
		case 'development':
			return stageUrl;
		case 'staging':
			return stageUrl;
		case 'production':
			return productionUrl;
		default:
			return stageUrl;
	}
}

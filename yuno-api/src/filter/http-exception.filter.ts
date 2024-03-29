import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';

import { Request, Response } from 'express';
import { ResponseMessageEnum } from 'src/common/base.constant';


@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {

	catch(exception: HttpException, host: ArgumentsHost) {
		const http = host.switchToHttp();
		const response = http.getResponse<Response>();
		const { method, url } = http.getRequest<Request>();
		const statusCode = exception?.getStatus() || HttpStatus.INTERNAL_SERVER_ERROR;
		let message: string = (exception as Record<string, any>)?.response?.message || exception?.message || ResponseMessageEnum.INTERNAL_SERVER_ERROR;
		if (Array.isArray(message)) {
			message = JSON.stringify(message);
		}

		if (statusCode > 499 && (message === ' ' || !message)) {
			message = ResponseMessageEnum.INTERNAL_SERVER_ERROR;
		}

		const error = {
			statusCode,
			timestamp: new Date().toISOString(),
			method,
			path: url,
			message
		};

		response.status(statusCode).json({ error, message });
	}
}
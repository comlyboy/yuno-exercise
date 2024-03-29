import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from '@nestjs/common';

import { Request, Response } from 'express';
import { ResponseMessageEnum } from 'src/common/base.constant';


@Catch()
export class AllExceptionFilter implements ExceptionFilter {
	catch(exception: Record<string, any>, host: ArgumentsHost) {
		const http = host.switchToHttp();
		const response = http.getResponse<Response>();
		const { method, url } = http.getRequest<Request>();
		let statusCode =  exception?.getStatus() || HttpStatus.INTERNAL_SERVER_ERROR;
		let message = exception.response?.message as string || exception?.message || ResponseMessageEnum.INTERNAL_SERVER_ERROR;
		if (Array.isArray(message)) {
			message = JSON.stringify(message);
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
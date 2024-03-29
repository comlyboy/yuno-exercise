import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {

	@Get('health')
	getHealth(
		@Res() res: Response
	) {
		const data = {
			message: 'API working OKAY!!!',
			environment: process.env.NODE_ENV || 'development',
			serverTimestamp: new Date().toISOString()
		};
		return res.status(HttpStatus.OK).json({ data });
	}
}

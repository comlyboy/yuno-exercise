import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';

import { TransactionService } from './transaction.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('transaction')
@ApiTags('Transaction')
export class TransactionController {
	constructor(
		private readonly transactionService: TransactionService
	) { }


	@Get()
	async getTransactions(
		@Res() res: Response
	) {
		const data = await this.transactionService.getTransactions();
		res.status(HttpStatus.OK).json({ data });
	}

}

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
		setTimeout(async () => {
			// used settimout here so that load indicator can be visible on local
			const data = await this.transactionService.getTransactions();
			res.status(HttpStatus.OK).json({ data });
		}, 4000);
	}

}

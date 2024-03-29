import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';

import { BalanceService } from './balance.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('balance')
@ApiTags('Balance')
export class BalanceController {
	constructor(
		private readonly balanceService: BalanceService
	) { }

	@Get()
	async getBalance(
		@Res() res: Response
	) {
		const data = await this.balanceService.getBalance();
		res.status(HttpStatus.OK).json({ data })
	}

}

import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionModule, BalanceModule } from './core';

@Module({
	imports: [BalanceModule, TransactionModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }

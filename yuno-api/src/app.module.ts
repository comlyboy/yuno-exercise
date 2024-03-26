import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionModule } from './core/transaction/transaction.module';
import { BalanceModule } from './core/balance/balance.module';

@Module({
  imports: [TransactionModule, BalanceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

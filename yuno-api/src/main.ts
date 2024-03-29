import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';

import helmet from 'helmet';
import * as morgan from "morgan";

import { AppModule } from './app.module';
import { AllExceptionFilter, HttpExceptionFilter } from './filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule);
	app.setGlobalPrefix('api');
	app.enableCors();
	app.use(helmet());
	app.useGlobalFilters(new AllExceptionFilter(), new HttpExceptionFilter());
	app.useGlobalPipes(new ValidationPipe({
		whitelist: true, transform: true,
		transformOptions: { enableImplicitConversion: true }
	}));

	morgan.token('id', request => Date.now().toString());
	app.use(morgan('LOG => :id | :date[iso] | :method | :status | :url - :total-time ms'));

	if (process.env.NODE_ENV !== 'production') {
		const options = new DocumentBuilder()
			.setTitle('Yuno API Docs')
			.setDescription('All in one payment system.')
			.setVersion('1.0')
			.setContact('', '', 'example@email.com')
			.build();
		const document = SwaggerModule.createDocument(app, options);
		SwaggerModule.setup('api/docs', app, document);
	}

	await app.listen(3030);

	Logger.debug(`Server running on ${await app.getUrl()}/api`);
	if (process.env.NODE_ENV !== 'production') {
		Logger.debug(`Documentation => ${await app.getUrl()}/api/docs`);
	}

}
bootstrap();

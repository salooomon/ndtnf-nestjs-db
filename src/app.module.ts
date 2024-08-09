import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksServiceModule } from './books/books.module';

@Module({
  imports: [
    BooksServiceModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_CONNECTION),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
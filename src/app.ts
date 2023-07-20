import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from "@nestjs/microservices"
import { appConfig, dbConfig} from '@config';
import { CategoryModule, SubCategoryModule, ProductModule } from '@module';


@Module({
  imports: [
    ConfigModule.forRoot({
      load: [dbConfig],
      isGlobal: true,
    }),
    CategoryModule,
    SubCategoryModule,
    ProductModule,
  ],
})
export class App {}

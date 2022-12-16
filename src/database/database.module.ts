import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            inject:[ConfigService],
            name:'ecommerceDataSourc',
            useFactory: (configService: ConfigService) => ({
                type: 'mysql',
                host: configService.get('mysql.host'),
                port: configService.get('mysql.port'),
                username: configService.get('mysql.username'),
                password: configService.get('mysql.password'),
                database: configService.get('mysql.database'),
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                options: {
                encrypt: false,
                },
                synchronize: false,
            })
           
        })
    ]
})
export class DatabaseModule {}

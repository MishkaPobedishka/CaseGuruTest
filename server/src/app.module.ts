import { Module } from '@nestjs/common';
import { StaffModule } from './staff/staff.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Staff } from './staff/staff.entity';

@Module({
  imports: [
    StaffModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'staff',
      models: [Staff],
      autoLoadModels: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}

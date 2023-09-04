import { Module } from '@nestjs/common';
import { StaffController } from './staff/staff.controller';
import { StaffService } from './staff/staff.service';
import { StaffModule } from './staff/staff.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    StaffModule,
    UserModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'postgres',
      port: 54321,
      username: 'postgres',
      password: 'postgres',
      database: 'staff',
      models: [],
    }),
    UserModule,
  ],
  controllers: [StaffController, UserController],
  providers: [StaffService, UserService],
})
export class AppModule {}

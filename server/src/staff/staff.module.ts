import { Module } from '@nestjs/common';
import { Staff } from './staff.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { StaffService } from './staff.service';
import { staffProviders } from './staff.provider';
import { AuthController } from 'src/auth/auth.controller';

@Module({
  imports: [SequelizeModule.forFeature([Staff])],
  controllers: [AuthController],
  providers: [StaffService, ...staffProviders],
})
export class StaffModule {}

import { Inject, Injectable } from '@nestjs/common';
import { STAFF_REPOSITORY } from 'src/constants';
import { Staff } from './staff.entity';
import { loginUserDTO } from './dto/login-user.dto';
import bcrypt from 'bcrypt';

@Injectable()
export class StaffService {
  constructor(
    @Inject(STAFF_REPOSITORY) private readonly staffRepository: typeof Staff,
  ) {}

  async login(loginUser: loginUserDTO): Promise<Staff | null> {
    const staff = await this.findOneByEmail(loginUser.email);
    if (!staff) {
      //EMAIL ERROR
    }
    // const isPassEqual = await bcrypt.compare(
    //   loginUser.password,
    //   staff.password,
    // );
    // if (!isPassEqual) {
    //   //PASSWORD ERROR
    // }
    console.log(staff);
    return staff;
  }

  async findOneByEmail(email: string): Promise<Staff> {
    return await this.staffRepository.findOne<Staff>({ where: { email } });
  }
}

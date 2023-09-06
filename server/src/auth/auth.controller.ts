import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { loginUserDTO } from 'src/staff/dto/login-user.dto';
import { StaffService } from 'src/staff/staff.service';

@Controller('auth')
export class AuthController {
  constructor(private staffService: StaffService) {}

  @HttpCode(200)
  @Post('login')
  async loginUser(@Body() loginUser: loginUserDTO) {
    return await this.staffService.login(loginUser);
  }

  //   @HttpCode(200)
  //   @Post('registration')
  //   async registrationUser(@Body() userDTO: createUserDTO, @Res() res: Response) {
  //     await this.userService.registration(userDTO);

  //     return res.send('user created');
  //   }
}

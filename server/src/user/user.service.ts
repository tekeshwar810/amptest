import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { UserServiceBase } from "./base/user.service.base";
import { PasswordService } from "../auth/password.service";
import { User } from "./base/User";
import { UserFindUniqueArgs,UserDataArgs } from "./base/UserFindUniqueArgs";
@Injectable()
export class UserService extends UserServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly passwordService: PasswordService
  ) {
    super(prisma, passwordService);
  }

  async resetPassword(args: UserFindUniqueArgs,data:UserDataArgs): Promise<User> {
   let p:any = data.data.password
   let d = await this.passwordService.hash(p)
   console.log('args',args.where,'dddd',data.data.password,'sdd',d)
    return this.prisma.user.update({
      where: args.where,
      data:{
        password: d,
      },
      select: {
        createdAt: true,
        firstName: true,
        id: true,
        lastName: true,
        roles: true,
        updatedAt: true,
        username: true,
      }
    });
  }
}

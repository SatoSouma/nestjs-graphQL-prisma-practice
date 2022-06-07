import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersModule } from './users/users.module'
import { PrismaService } from './prisma.service'
import { UserService } from './user.service'
import { PostService } from './post.service'

//デコレータ クラスを改造する役割　クラスを受け取って設定する
@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, UserService, PostService],
})
export class AppModule {}

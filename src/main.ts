//entorypointとなるファイル
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  //appインスタンスを作成
  const app = await NestFactory.create(AppModule)
  //サーバー起動
  await app.listen(3000)
}
bootstrap()

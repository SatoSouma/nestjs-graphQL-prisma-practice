//どんなURLが来たらどんな値を返すか、つまりルーティング
import { Controller, Get } from '@nestjs/common'

//引数に指定すると、URLの一部になる
@Controller()
export class AppController {
  //getメソッドでリクエストが来た時
  //引数にURLのURLの一部が指定できる
  @Get('hello')
  getHello() {
    return 'hello'
  }
  // constructor(private readonly appService: AppService) {}
  // @Get()
  // getHello(): string {
  //   return this.appService.getHello()
  // }
}

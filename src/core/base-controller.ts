import {Router } from 'express'

export abstract class BaseController {
      protected router = Router()

      protected constructor() {
        this.initializeRouters()
     }

     protected abstract initializeRouters():void

     getRouter():Router{
          return this.router
     }
}

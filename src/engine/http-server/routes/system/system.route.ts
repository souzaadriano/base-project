import { ClassErrorMiddleware, ClassMiddleware, Controller, ErrorMiddleware, Get, Middleware, Post } from '@overnightjs/core';
import { Request, Response } from 'express';
import { errorHandler } from '../../middlewares/error-handler/error-handler.middleware';
import { inputExampleValidator } from './system.validator';

@Controller('system')
@ClassErrorMiddleware(errorHandler)
export default class SystemRoutes {
  @Get('health')
  async healthCheck(request: Request, response: Response) {
    return response.status(200).json({ ok: true, date: new Date() });
  }

  @Post('input')
  @Middleware(inputExampleValidator)
  async inputExample(request: Request, response: Response) {
    return response.status(200).json(request.input);
  }
}

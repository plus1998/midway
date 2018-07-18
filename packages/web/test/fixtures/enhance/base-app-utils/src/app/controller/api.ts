'use strict';

import {provide, inject} from 'midway-context';
import {controller, get, config, logger} from '../../../../../../../src/';


@provide()
export class BaseApi {
  async index(ctx) {
    ctx.body = 'index';
  }
}

@provide()
@controller('/api')
export class Api {

  @inject('is')
  isModule;

  @config('hello')
  config;

  @logger()
  logger;

  @get('/test')
  async index(ctx) {
    ctx.body = this.isModule.function('hello').toString() + this.config.c;
  }
}

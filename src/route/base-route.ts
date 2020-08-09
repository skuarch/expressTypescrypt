import { Router } from 'express';

export interface BaseRoute {
  getRouter: Router;
  initRoutes(): void;
}
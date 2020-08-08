import { Router } from 'express';

export interface ControllerBase {
  getRouter: Router;
}
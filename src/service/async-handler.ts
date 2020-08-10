import { Request, Response } from 'express';

// export class AsyncHandler {

  export default function runAsync(callback: any) {
    return (req: Request, res: Response, next: any) => {
      callback(req, res, next)
        .catch(next);
    }
  }
// }
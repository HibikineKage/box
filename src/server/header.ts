import { Request, Response, NextFunction } from "express";

const setHeader = (req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', 'localhost:*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  next();
};
export default setHeader;
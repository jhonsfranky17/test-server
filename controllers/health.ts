import { Request, Response } from "express";

export const checkHealth = (_: Request, res: Response) => {
  setTimeout(()=>{console.log("Awaiting...")},30000);
  res.status(200).send({
    message: "Server Name: " + (process.env.SERVER_NAME || "Unknown"),
  });
};

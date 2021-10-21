import {NextFunction, Request, Response} from "express"

export function ensureAlthented(request: Request, response: Response, next: NextFunction) {
  const authToken = request.headers.authorization;

  if(!authToken) {
    return response.status(401).json({
      errorCode: "token.invalid",
    });
  }

  // Bearer 

  const [ , token] = authToken.split(" ");
  
}
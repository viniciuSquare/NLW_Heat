import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { ensureAlthenticated } from "./middleware/ensureAlthernticated";
const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post(
  "/messages", 
  ensureAlthenticated, 
  new CreateMessageController().handle
)

export{ router }
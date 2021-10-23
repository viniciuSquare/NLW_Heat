import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { GetLastThreeMessagesController } from "./controllers/GetLastThreeMessagesController";
import { ProfileUserController } from "./controllers/ProfileUserController";
import { ensureAlthenticated } from "./middleware/ensureAlthernticated";
const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post(
  "/messages", 
  ensureAlthenticated, 
  new CreateMessageController().handle
)

router.get("/messages/last3", new GetLastThreeMessagesController().handle);

router.get("/profile", ensureAlthenticated, new ProfileUserController().handle);

export{ router }
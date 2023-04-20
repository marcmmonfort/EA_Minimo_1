import { Request, Response, Router } from "express";
import { postSessionController, updateSessionController, deleteSessionController, getAllSessionsController, getParticularSessionController } from "../controllers/session";
import { logMiddleware } from "../middleware/log";

const router = Router(); 

// (1) Post (creation) of a session ...
router.post("/createSession",postSessionController);

// (2) Put (edition) of a session ...
router.put("/updateSession/:idSession",updateSessionController);

// (3) Delete a session ...
router.delete("/deleteSession/:idSession", deleteSessionController);

// (4) Get all sessions ...
router.get("/getAllSessions", getAllSessionsController);

// (5) Get (obtain) a particular session ...
router.get("/getSession/:idSession", getParticularSessionController);

export {router};

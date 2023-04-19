import { Request, Response, Router } from "express";
import { postActivityController, updateActivityController, deleteActivityController, getAllActivitiesController, getParticularActivityController } from "../controllers/activity";
import { logMiddleware } from "../middleware/log";

const router = Router(); 

// (1) Post (creation) of an activity ...
// Nombre del Controlador >> postActivityController
router.post("/createActivity",postActivityController);

// (2) Put (edition) of an activity ...
// Nombre del Controlador >> updateActivityController
router.put("/updateActivity/:idActivity",updateActivityController);

// (3) Delete an activity ...
// Nombre del Controlador >> deleteActivityController
router.delete("/deleteActivity/:idActivity", deleteActivityController);

// (4) Get all activities ...
// Nombre del Controlador >> getAllActivitiesController
router.get("/getAllActivities", getAllActivitiesController);

// (5) Get (obtain) a particular activity ...
// Nombre del Controlador >> getParticularActivityController
router.get("/getActivity/:idActivity", getParticularActivityController);

export {router};

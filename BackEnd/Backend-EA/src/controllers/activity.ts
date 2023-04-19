import { Request,Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { postActivity, updateActivity, deleteActivity, getAllActivities, getParticularActivity } from "../services/activity";

// (1) Post (creation) of an activity ...
// Nombre del Servicio >> postActivity
const postActivityController=async ({body}:Request,res:Response)=>{
    try{
        const response=await postActivity(body);
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    }catch(e){
        handleHttp(res,"ERROR_POST_ACTIVITY");
    }
};

// (2) Put (edition) of an activity ...
// Nombre del Servicio >> updateActivity
const updateActivityController=async ({params,body}:Request,res:Response)=>{
    try{
        const {idActivity}=params;
        const response=await updateActivity(idActivity,body);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_UPDATE_ACTIVITY");
    }
};

// (3) Delete an activity ...
// Nombre del Servicio >> deleteActivity
const deleteActivityController=async ({params}:Request,res:Response)=>{
    try{
        const {idActivity}=params;
        const response=await deleteActivity(idActivity);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_DELETE_ACTIVITY");
    }
};

// (4) Get all activities ...
// Nombre del Servicio >> getAllActivities
const getAllActivitiesController=async(req:Request,res:Response)=>{
    try{
        const response=await getAllActivities(); 
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res,"ERROR_GET_ALL_ACTIVITIES");
    }
};

// (5) Get (obtain) a particular activity ...
// Nombre del Servicio >> getParticularActivity
const getParticularActivityController=async({params}:Request,res:Response)=>{
    try{
        const {idActivity}=params;
        const response=await getParticularActivity(idActivity); 
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res,"ERROR_GET_THAT_ACTIVITY");
    }
};

export{postActivityController, updateActivityController, deleteActivityController, getAllActivitiesController, getParticularActivityController};
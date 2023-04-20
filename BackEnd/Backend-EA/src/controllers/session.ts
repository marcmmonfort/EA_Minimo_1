import { Request,Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { postSession, updateSession, deleteSession, getAllSessions, getParticularSession } from "../services/session";

// (1) Post (creation) of a session ...
// Nombre del Servicio >> postSession
const postSessionController=async ({body}:Request,res:Response)=>{
    try{
        const response=await postSession(body);
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    }catch(e){
        handleHttp(res,"ERROR_POST_SESSION");
    }
};

// (2) Put (edition) of a session ...
// Nombre del Servicio >> updateSession
const updateSessionController=async ({params,body}:Request,res:Response)=>{
    try{
        const {idSession}=params;
        const response=await updateSession(idSession,body);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_UPDATE_SESSION");
    }
};

// (3) Delete a session ...
// Nombre del Servicio >> deleteSession
const deleteSessionController=async ({params}:Request,res:Response)=>{
    try{
        const {idSession}=params;
        const response=await deleteSession(idSession);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_DELETE_SESSION");
    }
};

// (4) Get all sessions ...
// Nombre del Servicio >> getAllSessions
const getAllSessionsController=async(req:Request,res:Response)=>{
    try{
        const response=await getAllSessions(); 
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res,"ERROR_GET_ALL_SESSIONS");
    }
};

// (5) Get (obtain) a particular session ...
// Nombre del Servicio >> getParticularSession
const getParticularSessionController=async({params}:Request,res:Response)=>{
    try{
        const {idSession}=params;
        const response=await getParticularSession(idSession); 
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res,"ERROR_GET_THAT_SESSION");
    }
};

export{ postSessionController, updateSessionController, deleteSessionController, getAllSessionsController, getParticularSessionController };
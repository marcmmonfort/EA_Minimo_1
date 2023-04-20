import { Session } from "../interfaces/session.interface";
import SessionModel from "../models/session";
import paginate from 'mongoose-paginate-v2';

// (1) Post (creation) of a session ...
const postSession = async(item: Session) => {
    const responseInsert = await SessionModel.create(item);
    return responseInsert;
};

// (2) Put (edition) of a session ...
const updateSession = async(idSession:string, item: Session) => {
    const responseItem = await SessionModel.updateOne({_id: idSession},item,{new: true});
    return responseItem;
};

// (3) Delete a session ...
const deleteSession = async(idSession: string) => {
    const responseItem = await SessionModel.findOneAndRemove({_id: idSession});
    return responseItem;
}

// (4) Get all sessions ...
const getAllSessions = async() => {
    const responseItem = await SessionModel.find({ })
    return responseItem;
};

// (5) Get (obtain) a particular session ...
const getParticularSession = async(idSession: string) => {
    const responseItem = await SessionModel.findOne({_id: idSession })
    return responseItem;
};

export {postSession, updateSession, deleteSession, getAllSessions, getParticularSession};

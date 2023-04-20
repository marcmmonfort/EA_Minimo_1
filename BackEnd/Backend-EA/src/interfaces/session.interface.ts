import { ObjectId } from "mongoose";

export interface Session {
    userSession: ObjectId;
    loginDateSession: Date;
    logoutDateSession?: Date;
    loginReason: string;
}
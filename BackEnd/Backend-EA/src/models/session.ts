import {  Schema, Types, model, Model } from "mongoose";
import { Session } from "../interfaces/session.interface";


const SessionSchema = new Schema<Session>(
    {
        userSession:{
            type: Schema.Types.ObjectId,
            ref:'users',
            required: true,
        },
        loginDateSession:{
            type: Schema.Types.Date,
            required: true,
        },
        logoutDateSession:{
            type: Schema.Types.Date,
            required: false,
        },
        loginReason:{
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

//Once the Schema is created, it must be implemented
//1st argument ('users') is the name of the collection
//2nd argument (UserSchema) is what it feds it
const SessionModel = model('session', SessionSchema);

export default SessionModel;
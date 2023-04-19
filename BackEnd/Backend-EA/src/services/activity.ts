import { Activity } from "../interfaces/activity.interface";
import ActivityModel from "../models/activity";
import paginate from 'mongoose-paginate-v2';

// (1) Post (creation) of an activity ...
const postActivity = async(item: Activity) => {
    const responseInsert = await ActivityModel.create(item);
    return responseInsert;
};

// (2) Put (edition) of an activity ...
const updateActivity = async(idActivity:string, item: Activity) => {
    const responseItem = await ActivityModel.updateOne({_id: idActivity},item,{new: true});
    return responseItem;
};

// (3) Delete an activity ...
const deleteActivity = async(idActivity: string) => {
    const responseItem = await ActivityModel.findOneAndRemove({_id: idActivity});
    return responseItem;
}

// (4) Get all activities ...
const getAllActivities = async() => {
    const responseItem = await ActivityModel.find({ })
    return responseItem;
};

// (5) Get (obtain) a particular activity ...
const getParticularActivity = async(idActivity: string) => {
    const responseItem = await ActivityModel.findOne({_id: idActivity })
    return responseItem;
};

export {postActivity, updateActivity, deleteActivity, getAllActivities, getParticularActivity};

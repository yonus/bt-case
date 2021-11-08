import { Schema, model, Document } from 'mongoose';

export const DOCUMENT_NAME = 'Trip';
export const COLLECTION_NAME = 'trips';


export default interface Trip extends Document{
    _id: string;
    type?: string;
    start_date?: Date;
    complete_date?:Date



}

const schema = new Schema(
    {
        _id : {
            type:Schema.Types.ObjectId,
            required: false
        },

        start: {
            type: {
                type: String, // Don't do `{ location: { type: String } }`
                enum: ['Point'], // 'location.type' must be 'Point'
                required: true
            },
            coordinates: {
                type: [Number],
                required: true
            }
        },

        type:{
            type:Schema.Types.String,
            required: false
        },

        start_date:{
            type:Schema.Types.Date,
            required: false
        },

        complete_date:{
            type:Schema.Types.Date,
            required: false
        }



    },
    {
        versionKey: false,
    },
)



export const TripModel = model<Trip>(DOCUMENT_NAME,schema,COLLECTION_NAME)



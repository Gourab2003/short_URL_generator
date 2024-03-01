 import mongoose, {Schema} from "mongoose";

 const urlSchema = new Schema ({
    shortId:{
        type: String,
        required: true
    },
    redirectUrl:{
        type: String,
        required: true
    }, 
    visitHistory:[
        {
            time : Number
        }
    ]
 }, {timestamps: true});

  export const URL = mongoose.model("URL", urlSchema)
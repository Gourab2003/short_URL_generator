import {URL} from "../models/url.model.js"
import { nanoid } from 'nanoid'

async function shortURLgenerator(req, res){
    const originialURL = req.body.url;
   if(!originialURL) return res.status(400).json({Error:"url is required"})
    const shortId = nanoid(8);
     await URL.create({
        shortId:shortId,
        redirectUrl: originialURL,
        visitHistory: []
     })
    
     return res.json({
        id: shortId
    });
};


export default shortURLgenerator;
import  express  from "express";
import connect_DB from "./db/index.js";
import { URL } from "./models/url.model.js";

// all router are below ---->

import HomeRouter from "./routes/home.router.js";


const  PORT = 3000;
const app = express();

// DB connection 

connect_DB()
.then(()=>{

        console.log(`server running on port:${PORT}`);
})
.catch((Error)=>{
    console.log("mongo db connection failed", Error);
})



app.use(express.json())         // basically used when sending raw json data through postman or browser
app.use(express.urlencoded({extended:true}))   // basically use this middlewere when working with from data

app.use("/", HomeRouter);


app.get("/:shortId", async (req, res) => {
    try {
        const shortId = req.params.shortId;
        const urlDocument = await URL.findOneAndUpdate(
            { shortId },
            { $push: { visitHistory: { timestamps: Date.now() } } }
        );

        if (!urlDocument) {
            // Handle the case when no document is found with the given shortId
            return res.status(404).json({ error: "Short URL not found" });
        }

        // Redirect the user to the specified URL
        res.redirect(urlDocument.redirectUrl);
    } catch (error) {
        console.error("Error redirecting:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.listen(PORT, ()=>{
    console.log(`app running on port: ${PORT}`);
});
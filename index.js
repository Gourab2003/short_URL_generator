import  express  from "express";
import router from "./routes/url.router.js";
import connect_DB from "./db/index.js";

const  PORT = 3000;
const app = express();

connect_DB()
.then(()=>{

        console.log(`server running on port:${PORT}`);
})
.catch((Error)=>{
    console.log("mongo db connection failed", Error);
})

app.use("/url", router);

app.listen(PORT, ()=>{
    console.log(`app running on port: ${PORT}`);
});
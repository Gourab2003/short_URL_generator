// import express from "express";
// import shortURLgenerator from "../controllers/url.controller.js";

// const router = express.Router();

// router.get("/", (req, res)=>{
//     return res.render("index.ejs")
// }, )

// export default router;


import express from "express";
import shortURLgenerator from "../controllers/url.controller.js";

const router = express.Router();

// Render the index.ejs file when accessing the root URL with a GET request
router.get("/", (req, res) => {
    return res.render("index.ejs");
});

// Handle the form submission from index.ejs and generate a short URL
router.post("/", shortURLgenerator);

export default router;

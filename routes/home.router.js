import express from "express";
import shortURLgenerator from "../controllers/url.controller.js";
import UsersController from "../controllers/user.controller.js";

const router = express.Router();

// Render the index.ejs file when accessing the root URL with a GET request
router.get("/", (req, res) => {
    return res.render("index.ejs");
});

// Handle the form submission from index.ejs and generate a short URL
router.post("/", shortURLgenerator);

// handel the /signup routes--.

router.get("/signup", (req, res)=>{
    res.render("signup.ejs")
})

router.post("/signup", UsersController )



export default router;

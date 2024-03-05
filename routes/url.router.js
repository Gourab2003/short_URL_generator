import express from "express";
import shortURLgenerator from "../controllers/url.controller.js";

const router = express.Router();

router.post("/", shortURLgenerator);
router.use(express.urlencoded({ extended: true }));


export default router;
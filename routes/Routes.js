import { Router } from "express";
import { converter } from "../controller/Converter.js";

const router = Router();

router.post("/converter", converter);

export default router;

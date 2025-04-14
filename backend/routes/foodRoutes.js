import express from 'express';
import { addFood, listFood, removeFood } from '../controller/foodController.js';
import multer from 'multer';
import { storage } from '../utils/cloudinary.js';

const foodRoutes = express.Router();
const upload = multer({ storage });

foodRoutes.post("/add", upload.single("image"), addFood);
foodRoutes.get("/list", listFood);
foodRoutes.post("/remove", removeFood);

export default foodRoutes;

import { Router } from "express";
import { EstateController } from "../controllers/estate.controller";
import uploads from "../middlewares/upload.multer";

const router = Router();

router.post('/', uploads.array('image', 10), EstateController.addEstate)

export default router
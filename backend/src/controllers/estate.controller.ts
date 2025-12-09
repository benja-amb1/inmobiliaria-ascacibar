import { Request, Response } from "express";
import { Estate } from "../models/estate.model";
import { EstateValidatorCreator } from "../validator/estate.validator";

class EstateController {
  static addEstate = async (req: Request, res: Response): Promise<Response | void> => {
    try {
      const { title, description, price, type, rooms, size, address } = req.body;

      const files = req.files as Express.Multer.File[];

      const images = files.map(file => `/uploads/${file.filename}`);

      const dataToValidate = {
        title, description, price: Number(price), type, rooms: Number(rooms), size: Number(size), address, images
      }

      const validator = EstateValidatorCreator.safeParse(dataToValidate);

      if (!validator.success) {
        return res.status(400).json({ success: false, error: validator.error.flatten().fieldErrors })
      }

      const estate = new Estate(validator.data);

      await estate.save();

      return res.status(201).json({ success: true, message: 'Propiedad creada correctamente.', data: estate })


    } catch (error) {
      const e = error as Error;
      return res.status(500).json({ success: false, error: e.message })
    }
  }
}

export { EstateController }
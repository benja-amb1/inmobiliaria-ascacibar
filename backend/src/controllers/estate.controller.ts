import { Request, Response } from "express";
import { Estate } from "../models/estate.model";
import { EstateValidatorCreator } from "../validator/estate.validator";

class EstateController {
  static addEstate = async (req: Request, res: Response): Promise<Response | void> => {
    try {
      const { title, description, price, type, rooms, size, address } = req.body;
      const images = req.file?.path;

      const validator = EstateValidatorCreator.safeParse({ title, description, price, type, rooms, size, address, images });

      if (!validator.success) {
        return res.status(400).json({ success: false, error: validator.error.flatten().fieldErrors })
      }

      const estate = new Estate(validator.data);

      await estate.save();

      return res.status(201).json({ success: true, message: 'Propiedad creada correctamente.' })


    } catch (error) {
      const e = error as Error;
      return res.status(500).json({ success: false, error: e.message })
    }
  }
}

export { EstateController }
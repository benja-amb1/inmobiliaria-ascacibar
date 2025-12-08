import { Model, Schema, model } from 'mongoose'
import { EstateInterface } from '../interfaces/estate.interface'


const EstateSchema = new Schema<EstateInterface>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    type: { type: String, required: true, enum: ["casa", "departamento", "terreno"] },
    rooms: { type: Number, required: true },
    size: { type: Number, required: true },
    address: { type: String, required: true },
    images: { type: [String], required: true }
  }
);

const Estate: Model<EstateInterface> = model('estate', EstateSchema);

export { Estate }
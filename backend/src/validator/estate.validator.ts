import { z } from 'zod';

const EstateValidator = z.object({
  title: z.string().min(5, "El título debe tener al menos 5 caracteres").max(155, "El título debe tener máximo 155 caracteres."),
  description: z.string().min(5, "La descripción debe tener al menos 10 caracteres").max(255, "La descripción debe tener al menos 255 caracteres."),
  price: z.number().positive("El precio debe ser un número positivo"),
  type: z.enum(['casa', 'departamento', 'terreno'], "El tipo debe ser: Casa, Departamento o Terreno."),
  rooms: z.number().positive("El número debe ser positivo."),
  size: z.number().positive("El número debe ser positivo."),
  address: z.string().max(5, "La dirección debe tener al menos 15 caracteres."),
  images: z.string()
})

const EstateValidatorCreator = EstateValidator
const PartialEstateValidator = EstateValidator.partial()

export { EstateValidatorCreator, PartialEstateValidator }
import multer from "multer";
import path from 'node:path/win32'
import fs from 'node:fs'

export const uploadsPath = path.join(__dirname, '../uploads');

if (!fs.existsSync(uploadsPath)) {
  fs.mkdirSync(uploadsPath, { recursive: true })
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads')
  },

  filename: (req, file, cb) => {
    const fileName = Date.now() + '-' + crypto.randomUUID()
    cb(null, fileName + path.extname(file.originalname))
  }
})

const fileFilter = (req: Express.Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  if (file.mimetype.startsWith('images/')) {
    cb(null, true)
  } else {
    cb(new Error("Solo se permiten imagenes"))
  }
}

const uploads = multer({ storage, fileFilter })

export default uploads
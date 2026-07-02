import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import multer from 'multer';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'vinola123';
const DATA_FILE = path.join(__dirname, 'data.json');

// Middleware
app.use(cors());
app.use(express.json());

// Set up Multer for image upload
// Ensure public/images directory exists
const uploadDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    // Generate a unique file name
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  }
});
const upload = multer({ storage: storage });

// API: Get Data
app.get('/api/data', (req, res) => {
  try {
    const rawData = fs.readFileSync(DATA_FILE, 'utf8');
    const data = JSON.parse(rawData);
    res.json(data);
  } catch (error) {
    console.error("Error reading data:", error);
    res.status(500).json({ error: 'Failed to read data' });
  }
});

// API: Update Data
app.post('/api/data', (req, res) => {
  try {
    const newData = req.body;
    // Password validation (simple static password for CMS)
    const { _adminPassword, ...dataToSave } = newData;
    
    if (_adminPassword !== ADMIN_PASSWORD) { // Password check
      return res.status(401).json({ error: 'Unauthorized' });
    }

    fs.writeFileSync(DATA_FILE, JSON.stringify(dataToSave, null, 2), 'utf8');
    res.json({ success: true, message: 'Data updated successfully' });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: 'Failed to save data' });
  }
});

// API: Verify Password
app.post('/api/verify-password', (req, res) => {
  if (req.body.password === ADMIN_PASSWORD) {
    res.json({ success: true });
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
});

// API: Upload Image
app.post('/api/upload', upload.single('image'), (req, res) => {
  try {
    // password check
    if (req.body.password !== ADMIN_PASSWORD) {
       // Need to delete uploaded file if unauthorized
       if(req.file) {
         fs.unlinkSync(req.file.path);
       }
       return res.status(401).json({ error: 'Unauthorized' });
    }

    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    
    // Return the path that the frontend will use to display it
    const imageUrl = `/images/${req.file.filename}`;
    res.json({ success: true, imageUrl });
  } catch (error) {
    console.error("Error uploading file:", error);
    res.status(500).json({ error: 'Failed to upload file' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});

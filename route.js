import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

// Add this export to configure dynamic behavior
export const dynamic = 'force-dynamic';
console.log('Saikat');
export async function POST(req, res) {
  console.log('Inside Route');
  console.log("Entered the post method");
  const form = new formidable.IncomingForm();
  const uploadFolder = path.join(process.cwd(), 'uploads');

  // Ensure the uploads folder exists
  if (!fs.existsSync(uploadFolder)) {
    fs.mkdirSync(uploadFolder);
    console.log(`Created uploads folder at ${uploadFolder}`);
  } else {
    console.log(`Uploads folder already exists at ${uploadFolder}`);
  }

  form.uploadDir = uploadFolder;
  form.keepExtensions = true;

  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error('Error parsing the form:', err);
      res.status(500).json({ error: 'Error uploading file' });
      return;
    }

    if (!files.file) {
      console.error('No file uploaded');
      res.status(400).json({ error: 'No file uploaded' });
      return;
    }

    console.log(`File uploaded to ${files.file.path}`);
    res.status(200).json({ path: `uploads/${files.file.newFilename}` });
  });
}

export function GET(req, res) {
  res.status(405).send('Method Not Allowed');
}
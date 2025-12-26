// // server/index.js
// const path = require('path');

// // load env from server/.env
// require('dotenv').config({
//   path: path.resolve(__dirname, '.env')
// });

// // DEBUG: dump key env vars
// console.log('🔍 ENV:', {
//   SMTP_HOST: process.env.SMTP_HOST,
//   SMTP_PORT: process.env.SMTP_PORT,
//   SMTP_USER: process.env.SMTP_USER ? '***set***' : '***MISSING***'
// });


// const express     = require('express');
// const cors        = require('cors');
// const multer      = require('multer');
// const nodemailer  = require('nodemailer');
// const fs          = require('fs');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Multer setup for file uploads (temp folder)
// const upload = multer({ dest: 'uploads/' });

// // Configure Nodemailer transport
// const transporter = nodemailer.createTransport({
//   host:     process.env.SMTP_HOST,
//   port:     Number(process.env.SMTP_PORT),
//   secure:   process.env.SMTP_SECURE === 'true',
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS
//   }
// });

// // hello world //

// // 1) Stay-in-Touch endpoint
// app.post('/api/stay-in-touch', async (req, res) => {
//   const { email } = req.body;
//   if (!email) {
//     return res.status(400).json({ error: 'Email is required' });
//   }

//   // New mail body
//   const mailText = `
// Hi Sir,

// A new user has connected using the Stay in Touch form on the website. Here are the details:

// Email Address: ${email}

// Suggested Action:
// - Add the email to your mailing list or revert back.

// Best regards,
// Commedia Digital Team
//   `.trim();

//   try {
//     await transporter.sendMail({
//       from:    process.env.SMTP_FROM,
//       to:      process.env.HR_EMAIL,
//       subject: 'New Stay-in-Touch Request',
//       text:    mailText
//     });
//     res.json({ message: 'Thanks! We’ll be in touch shortly.' });
//   } catch (err) {
//     console.error('Stay-in-Touch mail error:', err);
//     res.status(500).json({ error: 'Failed to send email' });
//   }
// });


// app.post('/api/careers-apply', upload.single('resume'), async (req, res) => {
//   const { name, phone, email, role } = req.body;
//   if (!name || !phone || !email || !role) {
//     return res.status(400).json({ error: 'All fields are required' });
//   }

//   // Build the new email body
//   const mailText = `
// Hello Sir,

// We have received a new application from a candidate via the Careers page on the website. Below are the details:

// Name: ${name}
// Email Address: ${email}
// Phone Number: ${phone}
// Preferred Role: ${role}

// Best regards,
// Commedia Digital Team
//   `.trim();

//   // Attach the resume if present
//   const attachments = req.file
//     ? [{
//         filename: req.file.originalname,
//         path:     req.file.path
//       }]
//     : [];

//   try {
//     await transporter.sendMail({
//       from:        process.env.SMTP_FROM,
//       to:          process.env.HR_EMAIL,
//       subject:     `📝 New Application: ${name}`,
//       text:        mailText,
//       attachments
//     });

//     // cleanup temp file
//     if (req.file) {
//       fs.unlink(req.file.path, () => {});
//     }

//     return res.json({ message: 'Application submitted successfully.' });
//   } catch (err) {
//     console.error('Careers mail error:', err);
//     return res.status(500).json({ error: 'Failed to submit application' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`🚀  Server running on http://localhost:${PORT}`);
// });
// server/index.js
const path = require('path');

// load env from server/.env
require('dotenv').config({
  path: path.resolve(__dirname, '.env')
});

// DEBUG: dump key env vars
console.log('🔍 ENV:', {
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: process.env.SMTP_PORT,
  SMTP_USER: process.env.SMTP_USER ? '***set***' : '***MISSING***'
});


const express     = require('express');
const cors        = require('cors');
const multer      = require('multer');
const nodemailer  = require('nodemailer');
const fs          = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
// app.use(cors());

app.use(cors({
  origin: 'https://cpal.cspllabs.com',
  credentials: true
}));

app.use(express.json());

// Multer setup for file uploads (temp folder)
const upload = multer({ dest: 'uploads/' });

// Configure Nodemailer transport
const transporter = nodemailer.createTransport({
  host:     process.env.SMTP_HOST,
  port:     Number(process.env.SMTP_PORT),
  secure:   process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// hello world //

// 1) Stay-in-Touch endpoint
app.post('/api/stay-in-touch', async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  // New mail body
  const mailText = `
Hi Sir,

A new user has connected using the Stay in Touch form on the website. Here are the details:

Email Address: ${email}

Suggested Action:
- Add the email to your mailing list or revert back.

Best regards,
Commedia Digital Team
  `.trim();

  try {
    await transporter.sendMail({
      from:    process.env.SMTP_FROM,
      to:      process.env.HR_EMAIL,
      subject: 'New Stay-in-Touch Request',
      text:    mailText
    });
    res.json({ message: 'Thanks! We’ll be in touch shortly.' });
  } catch (err) {
    console.error('Stay-in-Touch mail error:', err);
    res.status(500).json({ error: 'Failed to send email' });
  }
});


app.post('/api/careers-apply', upload.single('resume'), async (req, res) => {
  const { name, phone, email, role } = req.body;
  if (!name || !phone || !email || !role) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Build the new email body
  const mailText = `
Hello Sir,

We have received a new application from a candidate via the Careers page on the website. Below are the details:

Name: ${name}
Email Address: ${email}
Phone Number: ${phone}
Preferred Role: ${role}

Best regards,
Commedia Digital Team
  `.trim();

  // Attach the resume if present
  const attachments = req.file
    ? [{
        filename: req.file.originalname,
        path:     req.file.path
      }]
    : [];

  try {
    await transporter.sendMail({
      from:        process.env.SMTP_FROM,
      to:          process.env.HR_EMAIL,
      subject:     `📝 New Application: ${name}`,
      text:        mailText,
      attachments
    });

    // cleanup temp file
    if (req.file) {
      fs.unlink(req.file.path, () => {});
    }

    return res.json({ message: 'Application submitted successfully.' });
  } catch (err) {
    console.error('Careers mail error:', err);
    return res.status(500).json({ error: 'Failed to submit application' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀  Server running on http://localhost:${PORT}`);
});
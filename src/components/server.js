// src/components/server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  const { from } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'commedia9900@gmail.com',
      pass: 'xoeirhcpxtnsnykb',
    },
  });

  const mailOptions = {
    from: 'commedia9900@gmail.com',
    to: 'ameymuley999@gmail.com',
    subject: 'Website Contact Request',
    text: `The person with email ${from} wants to connect to Commedia through the website.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent');
  } catch (error) {
    console.error('Email sending failed:', error);
    res.status(500).send('Failed to send email');
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});


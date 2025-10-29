const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
const Request = require('./models/Request');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ MongoDB Connection (clean, no deprecated options)
mongoose.connect('mongodb://127.0.0.1:27017/virtuwise')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// ✅ File Upload Setup
const upload = multer({ dest: 'uploads/' });

/* ------------------ 📚 Academic Support ------------------ */
app.post('/send-academic-support', upload.array('files'), async (req, res) => {
  console.log('✅ [POST] /send-academic-support called');

  const { name, email, subject, helpType, description, dueDate, urgency } = req.body;
  const files = req.files;

  try {
    await Request.create({
      type: 'academic',
      name, email, subject, helpType, description, dueDate, urgency
    });
    console.log('🧠 Academic request saved to MongoDB');

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'njengabeatrix@gmail.com',
        pass: 'sppw uicx egqv asca'
      },
      port: 587,
      secure: false,
      tls: { rejectUnauthorized: false }
    });

    const attachments = files.map(file => ({ filename: file.originalname, path: file.path }));

    const mailOptions = {
      from: 'njengabeatrix@gmail.com',
      to: 'njengabeatrix@gmail.com',
      replyTo: email,
      subject: `📚 Academic Request from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}
Help Type: ${helpType}
Description: ${description}
Due Date: ${dueDate}
Urgency: ${urgency}
      `,
      attachments
    };

    await transporter.sendMail(mailOptions);
    attachments.forEach(att => fs.unlink(att.path, () => {}));

    res.status(200).json({ message: 'Academic support email sent and saved to DB!' });
  } catch (error) {
    console.error('❌ Academic error:', error);
    res.status(500).json({ message: 'Academic request failed.' });
  }
});

/* ------------------ 🤖 Virtual Assistance Booking ------------------ */
app.post('/send-virtual-assistance', upload.array('files'), async (req, res) => {
  console.log('✅ [POST] /send-virtual-assistance called');

  const {
    name, email, service, preferredDate,
    preferredTime, duration, contactMethod, needs
  } = req.body;
  const files = req.files;

  try {
    await Request.create({
      type: 'virtual',
      name, email, service, preferredDate,
      preferredTime, duration, contactMethod, needs
    });
    console.log('🤖 Virtual assistance request saved to MongoDB');

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'njengabeatrix@gmail.com',
        pass: 'sppw uicx egqv asca'
      },
      port: 587,
      secure: false,
      tls: { rejectUnauthorized: false }
    });

    const attachments = files.map(file => ({ filename: file.originalname, path: file.path }));

    const mailOptions = {
      from: 'njengabeatrix@gmail.com',
      to: 'njengabeatrix@gmail.com',
      replyTo: email,
      subject: `🧠 Virtual Booking from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Service: ${service}
Preferred Date: ${preferredDate}
Preferred Time: ${preferredTime}
Duration: ${duration}
Contact Method: ${contactMethod}
Needs: ${needs}
      `,
      attachments
    };

    await transporter.sendMail(mailOptions);
    attachments.forEach(att => fs.unlink(att.path, () => {}));

    res.status(200).json({ message: 'Virtual assistance email sent and saved to DB!' });
  } catch (error) {
    console.error('❌ Virtual error:', error);
    res.status(500).json({ message: 'Virtual request failed.' });
  }
});

/* ------------------ 💬 Custom Virtual Request ------------------ */
app.post('/send-custom-virtual-assistance', async (req, res) => {
  console.log('✅ [POST] /send-custom-virtual-assistance called');

  const { request } = req.body;

  if (!request || request.trim() === '') {
    return res.status(400).json({ message: 'Request content is required.' });
  }

  try {
    await Request.create({ type: 'custom', request });
    console.log('💬 Custom virtual request saved to MongoDB');

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'njengabeatrix@gmail.com',
        pass: 'sppw uicx egqv asca'
      },
      port: 587,
      secure: false,
      tls: { rejectUnauthorized: false }
    });

    const mailOptions = {
      from: 'njengabeatrix@gmail.com',
      to: 'njengabeatrix@gmail.com',
      subject: '💬 New Custom VA Request',
      text: `Custom Request:\n\n${request}`
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Custom VA request sent and saved to DB!' });
  } catch (error) {
    console.error('❌ Custom error:', error);
    res.status(500).json({ message: 'Custom request failed.' });
  }
});

/* ------------------ ✅ Start Server ------------------ */
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

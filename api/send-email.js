
require('dotenv').config();
// api/send-email.js

const emailjs = require('emailjs-com');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed');
    return;
  }
  const { name, email, subject, message } = req.body;
  emailjs.init(process.env.EMAILJS_PUBLIC_KEY);

  try {
    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ADMIN,
      { name, email, subject, message }
    );
    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_USER,
      { name, email, subject, message }
    );
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
};

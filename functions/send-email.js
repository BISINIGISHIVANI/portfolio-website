// functions/send-email.js
require('dotenv').config();
const emailjs = require('emailjs-com');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { name, email, subject, message } = JSON.parse(event.body);

  // Initialize EmailJS with the public key
  emailjs.init(process.env.EMAILJS_PUBLIC_KEY);

  try {
    // 1) Notify site owner
    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ADMIN,
      { name, email, subject, message }
    );

    // 2) Send confirmation to user
    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_USER,
      { name, email, subject, message }
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.toString() })
    };
  }
};

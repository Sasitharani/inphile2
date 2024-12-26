const nodemailer = require('nodemailer');

async function sendEmail() {
  let transporter;
  try {
    transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'sasitharani@gmail.com',
        pass: 'zfikzmnxyuicssim',
      },
    });
    console.log('Transporter created successfully');
  } catch (error) {
    console.error('Error creating transporter:', error);
    return;
  }

  const mailOptions = {
    from: '"Insphile Support" <sasitharani@gmail.com>',
    to: "hrd@insphile.in, sasitharani@gmail.com",
    subject: "Test Email from Node.js Script",
    text: "This is a test email sent from a Node.js script using Nodemailer.",
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

// Call the sendEmail function when the script is run
sendEmail();

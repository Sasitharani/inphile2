import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  console.log('Inside the POST method');
  let requestData;
  try {
    requestData = req.body;
    console.log('Request data parsed successfully');
  } catch (error) {
    console.error('Error parsing request JSON:', error);
    return res.status(400).json({ message: 'Invalid JSON in request', log: 'Error parsing request JSON' });
  }

  if (!requestData) {
    return res.status(400).json({ message: 'No data provided', log: 'No data in request' });
  }

  const { name, email, phone, message } = requestData;
  console.log('Request data:', { name, email, phone, message });

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
    return res.status(500).json({ message: 'Failed to create transporter', log: 'Error creating transporter' });
  }

  const htmlContent = `
    <h2>You have got an enquiry from Insphile website</h2>
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <th style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Field</th>
        <th style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Details</th>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Name</td>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${name}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Email</td>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${email}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Phone</td>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${phone}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Message</td>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${message}</td>
      </tr>
    </table>
  `;

  let info;
  try {
    info = await transporter.sendMail({
      from: '"Insphile Support" <sasitharani@gmail.com>',
      to: "hrd@insphile.in, sasitharani@gmail.com",
      subject: "New Enquiry from Insphile Website",
      html: htmlContent,
    });
    console.log('Email sent:', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Failed to send email', log: 'Error sending email' });
  }

  return res.status(200).json({ message: 'Email sent successfully', log: 'Inside the POST method' });
}

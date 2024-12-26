// import nodemailer from 'nodemailer';

// export async function POST(req) {
//   console.log('Inside the POST method');
//   let requestData;
//   try {
//     requestData = await req.json();
//     console.log('Request data parsed successfully');
//   } catch (error) {
//     console.error('Error parsing request JSON:', error);
//     return new Response(JSON.stringify({ message: 'Invalid JSON in request', log: 'Error parsing request JSON' }), { status: 400 });
//   }

//   if (!requestData) {
//     return new Response(JSON.stringify({ message: 'No data provided', log: 'No data in request' }), { status: 400 });
//   }

//   const { name, email, phone, message } = requestData;
//   console.log('Request data:', { name, email, phone, message });

//   let transporter;
//   try {
//     transporter = nodemailer.createTransport({
//       host: 'smtp.gmail.com',
//       port: 587,
//       secure: false,
//       auth: {
//         user: 'sasitharani@gmail.com',
//         pass: 'zfikzmnxyuicssim',
//       },
//     });
//     console.log('Transporter created successfully');
//   } catch (error) {
//     console.error('Error creating transporter:', error);
//     return new Response(JSON.stringify({ message: 'Failed to create transporter', log: 'Error creating transporter' }), { status: 500 });
//   }

//   const htmlContent = `
//     <h2>You have got an enquiry from Insphile website</h2>
//     <table style="width: 100%; border-collapse: collapse;">
//       <tr>
//         <th style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Field</th>
//         <th style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Details</th>
//       </tr>
//       <tr>
//         <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Name</td>
//         <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${name}</td>
//       </tr>
//       <tr>
//         <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Email</td>
//         <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${email}</td>
//       </tr>
//       <tr>
//         <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Phone</td>
//         <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${phone}</td>
//       </tr>
//       <tr>
//         <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Message</td>
//         <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${message}</td>
//       </tr>
//     </table>
//   `;

//   let info;
//   try {
//     info = await transporter.sendMail({
//       from: '"Insphile Support" <sasitharani@gmail.com>',
//       to: "hrd@insphile.in, sasitharani@gmail.com",
//       subject: "New Enquiry from Insphile Website",
//       html: htmlContent,
//     });
//     console.log('Email sent:', info.messageId);
//   } catch (error) {
//     console.error('Error sending email:', error);
//     return new Response(JSON.stringify({ message: 'Failed to send email', log: 'Error sending email' }), { status: 500 });
//   }

//   return new Response(JSON.stringify({ message: 'Email sent successfully', log: 'Inside the POST method' }), { status: 200 });
// }
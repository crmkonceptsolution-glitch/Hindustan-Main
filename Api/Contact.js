import nodemailer from "nodemailer";

async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, education, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "sahutanishq341@gmail.com",       // 👈 change this
      pass: "ggvk qjbh ysbq klro",         // 👈 Gmail App Password
    },
  });

  const mailOptions = {
    from: `"Website Inquiry" <sahutanishq341@gmail.com>`,
    replyTo: email, // 👈 IMPORTANT
    to: "sahutanishq341@gmail.com", // 👈 tumhara email
    subject: `New Inquiry - ${name}`,
    text: `
    New Inquiry Received:
    Name: ${name}
    Email: ${email}
    Inquiry Type: ${education}
    Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Submitted successfully!" });
  } catch (error) {
    return res.status(500).json({ message: "Error sending email" });
  }
}

export default handler
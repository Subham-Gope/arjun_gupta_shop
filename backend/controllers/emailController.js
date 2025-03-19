import { transporter } from "../config/mailer.js";
import dotenv from "dotenv";

dotenv.config();

export const sendEmail = async (req, res) => {
  const { email, name, message } = req.body;

  if (!email || !name || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.RECEIVER_EMAIL,
    subject: `New message from ${name} regarding business queries`,
    text: `Name: ${name} \n Email: ${email} \n Message: ${message}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);

    // Success response
    console.log("Email sent: ", info.response);
    res.status(200).json({ message: "Email sent successfully!", info });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send email", error });
  }
};

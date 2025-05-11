const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { from } = req.body;

  if (!from || !/\S+@\S+\.\S+/.test(from)) {
    return res.status(400).send("Invalid email");
  }

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "commedia9900@gmail.com", // Your email (sender)
      pass: "vxua fcdq focn ljac",
    },
  });

  const mailOptions = {
    from: "commedia9900@gmail.com",              // Always your company's email
    to: "amey.muley@commediaindia.com",                 // HR receives it
    replyTo: from,                              // 👈 Allows HR to click "Reply" to user
    subject: "New Interest from Website Visitor",
    text: `Hey,

${from} is interested for an interaction with Commedia Solutions. If you are interested, connect with them at the above email address.

Thanks & regards,
Commedia Digital Team.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent");
  } catch (error) {
    console.error("Failed to send email:", error);
    res.status(500).send("Failed to send email");
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


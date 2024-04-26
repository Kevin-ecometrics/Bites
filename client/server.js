const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const moment = require("moment-timezone");
const nodemailer = require("nodemailer");
const mysql = require("mysql");

const app = express();
const port = 3001;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "bitescreadores_booking_information",
  port: 3306, // Puerto de MySQL en tu configuración de XAMPP
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
  } else {
    console.log("Database connection successful");
  }
});

app.use(cors());
app.use(bodyParser.json());

app.post("/booking", async (req, res) => {
  let { name, email, phone, date } = req.body;
  const dateInCalifornia = moment(date)
    .tz("America/Los_Angeles")
    .format("YYYY-MM-DD HH:mm:ss");
  let query =
    "INSERT INTO information (name, email, phone, date) VALUES (?, ?, ?, ?)";
  db.query(query, [name, email, phone, date], async (error, results) => {
    if (error) throw error;
    res.json("Datos del formulario almacenados");

    let transporter = nodemailer.createTransport({
      host: "host11.registrar-servers.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "pacientes@bitescreadoresdesonrisas.com",
        pass: "gr6m~tAX$^=H",
      },
    });

    let mailOptions = {
      from: "pacientes@bitescreadoresdesonrisas.com",
      to: email,
      cc: "pacientes@bitescreadoresdesonrisas.com",
      subject: `Booking Confirmation for ${name}`,
      text: `
          Thank you for booking your appointment with Bites Creadores de Sonrisas.
          We have received your information for the following appointment:
          Name: ${name}
          Phone Number: ${phone}
          Date of your appointment: ${dateInCalifornia}
          If you have any questions, we are here to help.
          `,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error al enviar el correo electrónico: " + error);
      } else {
        console.log("Correo electrónico enviado: " + info.response);
      }
    });
  });
});

app.get("/bookedHours", async (req, res) => {
  let query = "SELECT date FROM information";
  db.query(query, async (error, results) => {
    if (error) throw error;
    const bookedHours = results.map((result) => ({
      date: moment(result.date).format("YYYY-MM-DD"),
      hour: moment(result.date).format("HH:mm:ss"),
    }));
    res.json(bookedHours);
  });
});

app.post("/contact/form", async (req) => {
  let { nombre, email, telefono, asunto, mensaje } = req.body;

  let transporter = nodemailer.createTransport({
    host: "host11.registrar-servers.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "pacientes@bitescreadoresdesonrisas.com",
      pass: "gr6m~tAX$^=H",
    },
  });

  let mailOptions = {
    from: "pacientes@bitescreadoresdesonrisas.com",
    to: email,
    cc: "pacientes@bitescreadoresdesonrisas.com",
    subject: `${asunto}`,
    text: `
      Hola,
  
      Has recibido un nuevo mensaje a través del formulario de contacto de nuestra pagina web.
  
      Detalles:
      Nombre: ${nombre}
      Teléfono: ${telefono}
  
      Mensaje:
      ${mensaje}
  
      Saludos,
      El equipo de Bites Creadores de Sonrisas
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error al enviar el correo electrónico: " + error);
    } else {
      console.log("Correo electrónico enviado: " + info.response);
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

import classes from "../style.module.scss";

const Server = (props) => {
  //---------------------------------------------- Neišsiunčia informacijos(email,password)
  require("dotenv").config();

  //---------------------------------------------- Importuojamas nodemailer
  var nodemailer = require("nodemailer");

  //---------------------------------------------- Nustatomas siuntėjas
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  //---------------------------------------------- Nustatomas siunčiamas laiškas
  var mailOptions = {
    from: "gnotmaileta@gmail.com",
    to: "props.elLaiskas",
    subject: "Sending Email using Node.js",
    text:
      "That was easy! Jūsų užsakymas data: props.data periodui: props.periodas priimtas",
  };

  //---------------------------------------------- Laiškas siunčiamas
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  return (
    <button className={classes.RezervuotiButton} onClick={props.onClick}>
      Rezervuoti
    </button>
  );
};

export default Server;

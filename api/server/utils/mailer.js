var nodemailer = require('nodemailer');
const dotenv = require("dotenv");
const config = dotenv.config();
const emailTemplates = require('swig-email-templates');

class Mailer {

    static sendEmail(from, to, emailParams, callback, res) {

        var templates = new emailTemplates();

        templates.render(config.parsed.EMAIL_TEMPLATE_PATH + emailParams.template, emailParams.context, (tplErr, html, text, subject) => {
            if(tplErr) {
                console.log(tplErr);
                res.status(500).send('Error generating email template');
            } else {

                var transporter = nodemailer.createTransport({
                    host: config.parsed.EMAIL_HOST,
                    port: config.parsed.EMAIL_PORT,
                    auth: {
                        user: config.parsed.EMAIL_AUTH_USERNAME,
                        pass: config.parsed.EMAIL_AUTH_PASSWORD
                    }
                });

                var mailOptions = {
                    from: from,
                    to: to,
                    subject: subject,
                    html: html,
                    text: text
                };

                transporter.sendMail(mailOptions, callback);
            }
        });
    }
}

export default Mailer;

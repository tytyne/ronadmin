import nodemailer from "nodemailer"
import style from "./style"
import dotenv from "dotenv"
dotenv.config()
const host = `${process.env.APP_URL}`



class Mailer {

    constructor(mailObject) {

        const { to,firstname,header, messageHeader,instructions,messageBody, Button, optionLink, browserMessage } = mailObject;

        this.firstname=firstname;
        this.to = to;
        this.header = header;
        this.messageHeader = messageHeader;
        this.instructions=instructions;
        this.messageBody = messageBody;
        this.browserMessage = browserMessage;
        this.Button = Button;
        this.optionLink = optionLink;

    }
    async sendMail() {
        const html = ` <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
          ${style}
        </style>
          <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,500" rel="stylesheet" />
          <title>RiseoNigeria - New Event Notification</title>
        </head>
        <body>
        <div align="center">
    <div class="header" align="center" style="max-width:950px">
        <table width="100%" border="0" align="center" cellpadding="5" cellspacing="0">
        <tr>
          <td width="47%" height="78" align="left" bgcolor="#006633"><h2 class="header"><strong>${this.header}</strong></h2></td>
          <td width="53%" bgcolor="#006633"><span class="image-holder1"><img src="https://test.riseonigeria.com:8006/assets/images/logo.png" alt="" width="108" height="113" align="center"></span></td>

        </tr>
      </table>
    </div>
    <div class="narrow-text">
      <div class="image-holder1"></div>
    

      <p><strong>Dear ${this.firstname},</strong><strong> </strong></p>
      <p>${this.instructions}</p>
      <p>${this.messageBody}</p>
      <p>&nbsp;</p>
      
      <table width="97%" border="0" cellpadding="0" cellspacing="0">
      <tr>
       
        <td width="300"><table border="0" align="center" cellpadding="0" cellspacing="0">
          <tr>
            <td width="196" valign="middle"><p align="center"><strong>

            ${this.Button ? this.buttonTemp : ''}
            
            </strong></p></td>
          </tr>
        </table></td>
      </tr>
    </table>
  
    <p><strong>- Thanks(RiseoNigeria  Team)</strong></p>
    <hr>
       
  <P>${this.browserMessage}</p>
  <ol>
          
    <li><a href="${this.optionLink}">${this.optionLink}</a></li>
    </ol>
  <p>If you continue to have problems, please feel free to contact us at service@riseonigeria.com</p>
          <p>&nbsp;</p>
  <hr>
<table width="100%" border="0" cellpadding="0" cellspacing="0">
<tr>
  <td width="702" valign="top" bgcolor="#CCCCCC"><p align="center">You are receiving this email because you are a registered member of RiseoNigeria Community. If you wish to unsubscribe from these emails, please <a href="#">change your notification setting</a>. <br>
    <br>
    DISCLAIMER: This email has been sent by our notification system. <br>
    Please do not reply to this message as the inbox is not monitored. <br>
    Note in accordance with Art. 13 GDPR:<br>
    The legal basis and purposes of the data processing can be found under<a href="#"> Privacy Policy</a>. <br>
  </p>
</td>
</tr>
</table>
<p>&nbsp;</p>

  </div>
  <div class="footer">
   <table width="100%" border="0" align="center" cellpadding="5" cellspacing="0">
        <tr>
        <td width="615" height="58" align="left"> &copy; RiseoNigeria. All Rights Reserved</td>
          <td width="217" align="center"> About RiseoNigeria</td>
          <td width="118" align="center">Support</td>
        </tr>
      </table>
  </div>
</div>

      </body>
        </html> `;
        try {

            const transporter = nodemailer.createTransport({
                host: process.env.SMTP_Server,
                port: process.env.SMTP_Port,
                auth: {
                    user: process.env.SMTP_Username,
                    pass: process.env.SMTP_Password,
                }
            })

            const messageObj = {
                from: `RiseoNigeria Team ${process.env.SMTP_Username}`,
                to: this.to,
                subject: this.header,
                html
            };

            await transporter.sendMail(messageObj);
            transporter.close();
        } catch (error) {
            throw new Error(error);
        }
    }

    /**
     * Sets the email Header
     * @param {String} header - The header of the mail
     * @returns {null} - dosen't return an object
     */
    setHeader(header) {
        this.header = header;
    }

    /**
     * Intializes the button
     * @param {string} button.text - The text in the button
     * @param {string} button.link - The url of the mail
     * @returns {null} - dosen't return an object
     */
    InitButton(button) {
        const { text, link } = button;
        this.buttonTemp = `
            <div style="margin: 30px;">
              <a class='link-button' href = '${link}' style="color: white">${text}</a>
            </div>
          `;
    }
}

export default Mailer;

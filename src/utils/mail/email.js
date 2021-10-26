import nodemailer from "nodemailer";
import style from "./style";
import dotenv from "dotenv";
dotenv.config();

class Mailer {
  constructor(mailObject) {
    const {
      name,
      to,
      eventdate,
      eventitle,
      eventdescription,
      optionLinkAccept,
      optionLinkDecline,
    } = mailObject;
    this.name = name;
    this.to = to;
    this.eventdate = eventdate;
    this.eventitle = eventitle;
    this.eventdescription = eventdescription;
    this.optionLinkAccept = optionLinkAccept;
    this.optionLinkDecline = optionLinkDecline;
  }
  async sendMail() {
    const html = `   
  <!DOCTYPE html>
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

<body
    style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -webkit-text-size-adjust: none; background-color: #ffffff; color: #718096; height: 100%; line-height: 1.4; margin: 0; padding: 0; width: 100% !important;"
    data-new-gr-c-s-check-loaded="14.1036.0" data-gr-ext-installed="">

<table class="wrapper" width="100%" cellpadding="0" cellspacing="0" role="presentation"
style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 100%; background-color: #edf2f7; margin: 0; padding: 0; width: 100%;">
<tbody>
    <tr>
        <td align="center"
            style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative;">
            <table class="content" width="100%" cellpadding="0" cellspacing="0" role="presentation"
                style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 100%; margin: 0; padding: 0; width: 100%;">
                <tbody>
                    <tr>
                        <td class="header"
                            style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 25px 0; text-align: center;">
                            <a target="_blank" rel="noopener noreferrer" href="https://riseonigeria.com"
                                style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; color: #3d4852; font-size: 19px; font-weight: bold; text-decoration: none; display: inline-block;">
                               
                            </a>
                            <table
                                style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; text-align: center; width: 100%;">
                                <tbody>
                                    <tr>

                                        <th
                                            style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; width: 50%;">
                                            <div
                                                style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; max-width: 50px; float: right;">
                                                <img src="https://riseonigeria.com/assets/images/logo.png"
                                                    style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; max-width: 100%; width: 100%;">
                                            </div>
                                        </th>
                                        <th
                                            style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; width: 50%;">
                                            <strong
                                                style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; float: left; text-align: left;">RiseoNigeria</strong>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>

                        </td>
                    </tr>

                  
                    <tr>
                        <td class="body" width="100%" cellpadding="0" cellspacing="0"
                            style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 100%; background-color: #edf2f7; border-bottom: 1px solid #edf2f7; border-top: 1px solid #edf2f7; margin: 0; padding: 0; width: 100%;">
                            <table class="inner-body" align="center" width="570" cellpadding="0" cellspacing="0"
                                role="presentation"
                                style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 570px; background-color: #ffffff; border-color: #e8e5ef; border-radius: 2px; border-width: 1px; box-shadow: 0 2px 0 rgba(0, 0, 150, 0.025), 2px 4px 0 rgba(0, 0, 150, 0.015); margin: 0 auto; padding: 0; width: 570px;">
                              
                                <tbody>
                                    <tr>
                                        <td class="content-cell"
                                            style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; max-width: 100vw; padding: 32px;">
                                            <h1
                                                style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; color: #3d4852; font-size: 18px; font-weight: bold; margin-top: 0; text-align: left;">
                                                Hello, you have been invited
                                            </h1>
                                            <p
                                                style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; font-size: 16px; line-height: 1.5em; margin-top: 0; text-align: left;">
                                                Dear  ${this.name},<br>
                                                We would like to invite you to join us for a Live Event
                                                <strong>${this.eventdate}</strong> on RiseoNigeria
                                                platform. We have put together a number of seasoned Panelist
                                                that will be discussing and sharing their
                                                thoughts on <strong>${this.eventdate}</strong>. We look forward to
                                                seeing you at the event.
                                            </p>
                                            <object data="https://www.youtube.com/embed/uCAcn_deVTw?autoplay=1" width="300" height="200"</object>
                                            <p>&nbsp; </p>
                                            <object data="https://www.youtube.com/embed/uCAcn_deVTw?autoplay=1"
                                                hspace="5" vspace="5"
                                                style="width: 100%; max-width: 900px; height: auto; clear: both; margin: 6px;height:250px">
                                                <embed
                                                    src="https://www.youtube.com/embed/uCAcn_deVTw?autoplay=1"
                                                    vspace="5" hspace="5"></embed>
                                            </object>
                                          
                                            <p style="display:flex; justify-content:space-evenly;">
                                                <a href="${this.optionLinkAccept}"><button id="button">Accept Invitation</button></a>
                                                <a href="${this.optionLinkDecline}"><button id="button">Decline Invitation</button></a>
                                            </p>

                                            <br>
                                            <p
                                                style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; font-size: 16px; line-height: 1.5em; margin-top: 0; text-align: left;">
                                                Regards,<br>RiseoNigeria</p>



                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>


                    <tr>
                        <td
                            style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative;">
                            <table valign="top" bgcolor="#CCCCCC" align="center" width="570" cellpadding="0"
                                cellspacing="0" role="presentation"
                                style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 570px; margin: 0 auto; padding: 0; text-align: center; width: 570px;">
                                <tbody>
                                    <tr>
                                        <td class="content-cell" align="center"
                                            style="font-size:14px;box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; max-width: 100vw; padding: 32px;">
                                            <p align="left">You are receiving this email because you registered
                                                for an account on
                                                RiseoNigeria Community. If you wish to unsubscribe from these
                                                emails, please <a href="#">change your notification setting</a>.
                                                <br>
                                                <br>
                                                DISCLAIMER: This email has been sent by our notification system.
                                                Please do not reply to this
                                                message as the inbox is not monitored.
                                                Note in accordance with Art. 13 GDPR:<br>
                                                The legal basis and purposes of the data processing can be found
                                                under<a href="#"> Privacy
                                                    Policy</a>.<br>


                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative;">
                            <table class="footer" align="center" width="570" cellpadding="0" cellspacing="0"
                                role="presentation"
                                style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 570px; margin: 0 auto; padding: 0; text-align: center; width: 570px;">
                                <tbody>
                                    <tr>
                                        <td class="content-cell" align="center"
                                            style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; max-width: 100vw; padding: 32px;">

                                            <p
                                                style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; line-height: 1.5em; margin-top: 0; color: #b0adc5; font-size: 12px; text-align: center;">
                                                © 2021 RiseoNigeria. All rights reserved.</p>

                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </td>
    </tr>
</tbody>
</table>


</body>
</html> `;



    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_Server,
        port: process.env.SMTP_Port,
        auth: {
          user: process.env.SMTP_Username,
          pass: process.env.SMTP_Password,
        },
      });
      const messageObj = {
        from: `RiseoNigeria Event ${process.env.SMTP_Username}`,
        to: this.to,
        subject: this.eventitle,
        html,
      };
      await transporter.sendMail(messageObj);
      transporter.close();
    } catch (error) {
      throw new Error(error);
    }
  }
}
export default Mailer;




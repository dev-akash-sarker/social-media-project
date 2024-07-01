const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const { OAuth2 } = google.auth;
const oauth_link = "https://developers.google.com/oauthplayground";
const { EMAIL, MAILING_ID, MAILING_REFRESH, MAILING_SECRATE_ID } = process.env;

const auth = new OAuth2(
  MAILING_ID,
  MAILING_SECRATE_ID,
  MAILING_REFRESH,
  oauth_link
);

exports.sendVerifedEmail = (email, name, url) => {
  auth.setCredentials({
    refresh_token: MAILING_REFRESH,
  });
  const accessToken = auth.getAccessToken();
  const stmp = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "Oauth2",
      user: EMAIL,
      clientId: MAILING_ID,
      clientSecret: MAILING_SECRATE_ID,
      refreshToken: MAILING_REFRESH,
      accessToken,
    },
  });
  const mailOptions = {
    from: EMAIL,
    to: email,
    subject: "FaceConnect email verifiction",
    html: `<!DOCTYPE html><html lang="en"> <head> <meta charset="UTF-8" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <title>Document</title> </head> <body> <div style=" padding: 30px; border: 1px solid #ddd; border-radius: 5px; text-align: center; " > <h3 style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"> Hello ${name} whats up </h3> <p style=" color: #333; font-size: 16px; margin-bottom: 30px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; " > Hello ${name} please confirm your verification email to start an new journey with us </p> <a href="{url}" style=" border: 1px solid #666; padding: 8px 15px; border-radius: 5px; text-decoration: none; color: #333; margin-top: 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; " onMouseOver="this.style.background='#ddd'" onMouseLeave="this.style.background='transparent'" >Verify email</a > </div> </body></html>`,
  };
  stmp.sendMail(mailOptions, (err, res) => {
    if (err) return err;
    return res;
  });
};

'use server';

import { publicProcedure } from '@/utils/trpc/init';
import { z } from 'zod';
import { prisma } from '@/utils/prisma/prisma';
import { sendEmail } from '@/utils/mail/nodemailer';
import { generateToken } from '@/utils/auth/token';
import { safeEncodeURIComponent } from 'nodemailer/lib/mime-funcs';

const textTemplate = (firstName: string, path: string) =>
  'Swift Loans\n\n' +
  'FORGOT YOUR PASSWORD?\n' +
  `Hi, ${firstName}\n` +
  'There was a request to change your password.\n' +
  'If you did not make this request, just ignore this email. Otherwise, please click the link below to change your password:\n' +
  `${path}` +
  `The link will expire in 15 minutes.`;

const emailTemplate = (firstName: string, path: string) =>
  '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' +
  '<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="">\n' +
  '<head>\n' +
  '    <meta charset="UTF-8">\n' +
  '    <meta content="width=device-width, initial-scale=1" name="viewport">\n' +
  '    <meta name="x-apple-disable-message-reformatting">\n' +
  '    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n' +
  '    <meta content="telephone=no" name="format-detection">\n' +
  '    <title></title>\n' +
  '    <!--[if (mso 16)]>\n' +
  '    <style type="text/css">\n' +
  '    a {text-decoration: none;}\n' +
  '    </style>\n' +
  '    <![endif]-->\n' +
  '    <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->\n' +
  '    <!--[if gte mso 9]>\n' +
  '<noscript>\n' +
  '         <xml>\n' +
  '           <o:OfficeDocumentSettings>\n' +
  '           <o:AllowPNG></o:AllowPNG>\n' +
  '           <o:PixelsPerInch>96</o:PixelsPerInch>\n' +
  '           </o:OfficeDocumentSettings>\n' +
  '         </xml>\n' +
  '      </noscript>\n' +
  '<![endif]-->\n' +
  '</head>\n' +
  '<body>\n' +
  '    <div dir="ltr">\n' +
  '        <!--[if gte mso 9]>\n' +
  '\t\t\t<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">\n' +
  '\t\t\t\t<v:fill type="tile" color="#fafafa"></v:fill>\n' +
  '\t\t\t</v:background>\n' +
  '\t\t<![endif]-->\n' +
  '        <table width="100%" cellspacing="0" cellpadding="0">\n' +
  '            <tbody>\n' +
  '                <tr>\n' +
  '                    <td valign="top">\n' +
  '                        <table width="600" cellspacing="0" cellpadding="0" align="center">\n' +
  '                            <tbody>\n' +
  '                                <tr>\n' +
  '                                    <td style="background-color: #2c2c2c;" bgcolor="#2c2c2c" align="left">\n' +
  '                                        <table cellspacing="0" cellpadding="0" width="100%">\n' +
  '                                            <tbody>\n' +
  '                                                <tr>\n' +
  '                                                    <td width="560" align="left">\n' +
  '                                                        <table width="100%" cellspacing="0" cellpadding="16px">\n' +
  '                                                            <tbody>\n' +
  '                                                                <tr>\n' +
  '                                                                    <td align="left">\n' +
  `                                                                        <a href="${process.env.NEXT_PUBLIC_APP_URL}" target="_blank">\n` +
  '                                                                            <img src="https://i.imghippo.com/files/963bP1727676972.png" alt="Swift Loans Logo" style="display: block;" height="24" title="Swift Loans Logo"/>\n' +
  '                                                                        </a>\n' +
  '                                                                    </td>\n' +
  '                                                                </tr>\n' +
  '                                                            </tbody>\n' +
  '                                                        </table>\n' +
  '                                                    </td>\n' +
  '                                                </tr>\n' +
  '                                            </tbody>\n' +
  '                                        </table>\n' +
  '                                    </td>\n' +
  '                                </tr>\n' +
  '                            </tbody>\n' +
  '                        </table>\n' +
  '                        <table cellspacing="0" cellpadding="0" align="center">\n' +
  '                            <tbody>\n' +
  '                                <tr>\n' +
  '                                    <td style="background-color: #fafafa;" bgcolor="#fafafa" align="left">\n' +
  '                                        <table style="background-color: #ffffff;" width="600" cellspacing="0" cellpadding="16px" bgcolor="#ffffff" align="left">\n' +
  '                                            <tbody>\n' +
  '                                                <tr>\n' +
  '                                                    <td style="background-color: transparent; background-position: left top;" bgcolor="transparent" align="left">\n' +
  '                                                        <table width="100%" cellspacing="0" cellpadding="0">\n' +
  '                                                            <tbody>\n' +
  '                                                                <tr>\n' +
  '                                                                    <td width="560" valign="top" align="left">\n' +
  '                                                                        <table style="background-position: left top;" width="100%" cellspacing="0" cellpadding="0">\n' +
  '                                                                            <tbody>\n' +
  '                                                                                <tr>\n' +
  '                                                                                    <td align="left">\n' +
  '                                                                                        <h1 style="color: #333333; font-size: 20px;"><strong>FORGOT YOUR PASSWORD?</strong></h1>\n' +
  '                                                                                    </td>\n' +
  '                                                                                </tr>\n' +
  '                                                                                <tr>\n' +
  '                                                                                    <td align="left">\n' +
  `                                                                                        <p style="font-size: 16px;">Hi,&nbsp;${firstName}</p>\n` +
  '                                                                                    </td>\n' +
  '                                                                                </tr>\n' +
  '                                                                                <tr>\n' +
  '                                                                                    <td align="left">\n' +
  '                                                                                        <p style="font-size: 16px;">There was a request to change your password.</p>\n' +
  '                                                                                    </td>\n' +
  '                                                                                </tr>\n' +
  '                                                                                <tr>\n' +
  '                                                                                    <td align="left">\n' +
  '                                                                                        <p style="font-size: 16px;">If you did not make this request, just ignore this email. Otherwise, please click the button below to change your password:</p>\n' +
  '                                                                                    </td>\n' +
  '                                                                                </tr>\n' +
  '                                                                                <tr>\n' +
  `                                                                                    <td style="padding-top: 30px;" align="left"><span style="background-color: #0c63ce; border-radius: 8px; padding: 12px 16px; font-size: 16px;"><a href="${path}" style="color: white; text-decoration: none" target="_blank">Reset password</a></span></td>\n` +
  '                                                                                </tr>\n' +
  '                                                                            </tbody>\n' +
  '                                                                        </table>\n' +
  '                                                                    </td>\n' +
  '                                                                </tr>\n' +
  '                                                            </tbody>\n' +
  '                                                        </table>\n' +
  '                                                    </td>\n' +
  '                                                </tr>\n' +
  '                                                <tr>\n' +
  '                                                    <td style="background-position: left top;" align="left">\n' +
  '                                                        <table width="100%" cellspacing="0" cellpadding="0">\n' +
  '                                                            <tbody>\n' +
  '                                                                <tr>\n' +
  '                                                                    <td width="560" valign="top" align="left">\n' +
  '                                                                        <table width="100%" cellspacing="0" cellpadding="0">\n' +
  '                                                                            <tbody>\n' +
  '                                                                                <tr>\n' +
  '                                                                                    <td align="left">\n' +
  `                                                                                        <p style="font-size: 14px;">This link will expire in <strong>15 minutes</strong>.</p>\n` +
  '                                                                                    </td>\n' +
  '                                                                                </tr>\n' +
  '                                                                            </tbody>\n' +
  '                                                                        </table>\n' +
  '                                                                    </td>\n' +
  '                                                                </tr>\n' +
  '                                                            </tbody>\n' +
  '                                                        </table>\n' +
  '                                                    </td>\n' +
  '                                                </tr>\n' +
  '                                            </tbody>\n' +
  '                                        </table>\n' +
  '                                    </td>\n' +
  '                                </tr>\n' +
  '                            </tbody>\n' +
  '                        </table>\n' +
  '                    </td>\n' +
  '                </tr>\n' +
  '            </tbody>\n' +
  '        </table>\n' +
  '    </div>\n' +
  '</body>\n' +
  '</html>';

export const forgotPassword = publicProcedure
  .input(
    z.object({
      email: z.string().email(),
    })
  )
  .mutation(async (opts) => {
    const { email } = opts.input;

    // Run async so request time for valid and non-valid emails is consistent
    prisma.user
      .findFirst({
        where: {
          email,
        },
        select: {
          id: true,
          first_name: true,
          email: true,
          tokens: true,
        },
      })
      .then(async (user) => {
        // Skip if valid token already exists
        const now = Date.now();
        if (
          !user ||
          user.tokens.find((token) => now < token.expires_at.getTime())
        ) {
          return;
        }

        const expireDurationMs = 15 * 60 * 1000; //15 minutes
        const userToken = await prisma.userToken.create({
          data: {
            user_email: user.email,
            token: generateToken(),
            expires_at: new Date(Date.now() + expireDurationMs),
          },
        });

        const firstName = user.first_name;
        const tokenEmail = safeEncodeURIComponent(userToken.user_email);
        const path = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password?email=${tokenEmail}&token=${userToken.token}`;

        await sendEmail(
          user.email,
          'Reset password',
          textTemplate(firstName, path),
          emailTemplate(firstName, path)
        );
      });

    return {
      message: 'success',
    };
  });

'use server';

import { publicProcedure } from '@/utils/trpc/init';
import { z } from 'zod';
import { prisma } from '@/utils/prisma/prisma';
import { sendEmail } from '@/utils/mail/nodemailer';
import { TRPCError } from '@trpc/server';
import bcrypt from 'bcryptjs';

const textTemplate = (firstName: string, path: string) =>
  'Swift Loans\n\n' +
  'YOUR PASSWORD HAS BEEN RESET!\n' +
  `Hi, ${firstName}\n` +
  'Your password has successfully been reset.\n' +
  'If you did not make this change, someone else might be trying to access your account. Please reset your password with the link below:\n' +
  `${path}\n` +
  'Otherwise, you can ignore this email.\n';

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
  '                                                                                        <h1 style="color: #333333; font-size: 20px;"><strong>YOUR PASSWORD HAS BEEN RESET</strong></h1>\n' +
  '                                                                                    </td>\n' +
  '                                                                                </tr>\n' +
  '                                                                                <tr>\n' +
  '                                                                                    <td align="left">\n' +
  `                                                                                        <p style="font-size: 16px;">Hi,&nbsp;${firstName}</p>\n` +
  '                                                                                    </td>\n' +
  '                                                                                </tr>\n' +
  '                                                                                <tr>\n' +
  '                                                                                    <td align="left">\n' +
  '                                                                                        <p style="font-size: 16px;">Your password has successfully been reset.</p>\n' +
  '                                                                                    </td>\n' +
  '                                                                                </tr>\n' +
  '                                                                                <tr>\n' +
  '                                                                                    <td align="left">\n' +
  '                                                                                        <p style="font-size: 16px;">If you did not make this change, someone else might be trying to access your account. Please reset your password with the button below:</p>\n' +
  '                                                                                    </td>\n' +
  '                                                                                </tr>\n' +
  '                                                                                <tr>\n' +
  `                                                                                    <td style="padding-top: 30px;" align="left"><span style="background-color: #0c63ce; border-radius: 8px; padding: 12px 16px; font-size: 16px;"><a href="${path}" style="color: white; text-decoration: none" target="_blank">Forgot password</a></span></td>\n` +
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
  `                                                                                        <p style="font-size: 14px;">Otherwise, you can ignore this email.</p>\n` +
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

export const resetPassword = publicProcedure
  .input(
    z.object({
      email: z.string().email(),
      token: z.string().regex(/[0-9a-f]{32}/),
      password: z.string(),
    })
  )
  .mutation(async (opts) => {
    const { email, token, password } = opts.input;

    const userToken = await prisma.userToken.findFirst({
      where: {
        user_email: email,
        token,
        expires_at: {
          gt: new Date(),
        },
      },
      select: {
        id: true,
        user: true,
      },
    });

    if (!userToken?.user) {
      throw new TRPCError({ code: 'UNAUTHORIZED' });
    }

    const passwordSalt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, passwordSalt);

    await prisma.userToken.delete({
      where: {
        id: userToken.id,
      },
    });

    const user = await prisma.user.update({
      where: {
        id: userToken.user.id,
      },
      data: {
        password_hash: passwordHash,
      },
      select: {
        first_name: true,
        email: true,
      },
    });

    const firstName = user.first_name;
    const path = `${process.env.NEXT_PUBLIC_APP_URL}/forgot-password`;

    await sendEmail(
      user.email,
      'Your password has been reset',
      textTemplate(firstName, path),
      emailTemplate(firstName, path)
    );

    return {
      message: 'success',
    };
  });

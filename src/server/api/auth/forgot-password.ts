'use server';

import { publicProcedure } from '@/utils/trpc/init';
import { z } from 'zod';
import { prisma } from '@/utils/prisma/prisma';
import { sendEmail } from '@/utils/mail/nodemailer';

export const forgotPassword = publicProcedure
  .input(
    z.object({
      email: z.string().email(),
    })
  )
  .mutation(async (opts) => {
    const { email } = opts.input;

    const user = await prisma.user.findFirst({
      where: {
        email,
      },
      select: {
        id: true,
        first_name: true,
        email: true,
      },
    });

    if (user) {
      prisma.userToken
        .create({
          data: {
            user_id: user.id,
            expires_at: new Date(Date.now() + 5 * 60 * 1000),
          },
        })
        .then(async (userToken) => {
          void sendEmail(
            user.email,
            'Reset password',
            '' +
              'Swift Loans\n\n' +
              'FORGOT YOUR PASSWORD?\n' +
              `Hi, ${user.first_name}\n` +
              'There was a request to change your password.\n' +
              'If you did not make this request, just ignore this email. Otherwise, please click the link below to change your password:\n' +
              `${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${userToken.id}` +
              `The link will expire in 5 minutes.`,
            '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' +
              '<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">\n' +
              '\n' +
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
              '\n' +
              '<body>\n' +
              '    <div dir="ltr" class="es-wrapper-color">\n' +
              '        <!--[if gte mso 9]>\n' +
              '\t\t\t<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">\n' +
              '\t\t\t\t<v:fill type="tile" color="#fafafa"></v:fill>\n' +
              '\t\t\t</v:background>\n' +
              '\t\t<![endif]-->\n' +
              '        <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">\n' +
              '            <tbody>\n' +
              '                <tr>\n' +
              '                    <td class="esd-email-paddings" valign="top">\n' +
              '                        <table cellpadding="0" cellspacing="0" class="es-header esd-header-popover" align="center">\n' +
              '                            <tbody>\n' +
              '                                <tr>\n' +
              '                                    <td class="es-adaptive esd-stripe" align="center" esd-custom-block-id="88593">\n' +
              '                                        <table class="es-header-body" style="background-color: #3d5ca3;" width="600" cellspacing="0" cellpadding="0" bgcolor="#3d5ca3" align="center">\n' +
              '                                            <tbody>\n' +
              '                                                <tr>\n' +
              '                                                    <td class="esd-structure es-p20t es-p20b es-p20r es-p20l" style="background-color: #2c2c2c;" bgcolor="#2c2c2c" align="left">\n' +
              '                                                        <table cellspacing="0" cellpadding="0" width="100%">\n' +
              '                                                            <tbody>\n' +
              '                                                                <tr>\n' +
              '                                                                    <td class="esd-container-frame" width="560" align="left">\n' +
              '                                                                        <table width="100%" cellspacing="0" cellpadding="16px">\n' +
              '                                                                            <tbody>\n' +
              '                                                                                <tr>\n' +
              `                                                                                    <td class=\"esd-block-image es-m-p0l es-m-txt-c\" align=\"left\" style=\"font-size: 0px;\"><a href=\"${process.env.NEXT_PUBLIC_APP_URL}\" target=\"_blank\"><img src=\"https://i.imghippo.com/files/963bP1727676972.png\" alt=\"Swift Loans Logo\" style=\"display: block;\" height=\"24px\" title=\"Swift Loans Logo\"></a></td>\n` +
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
              '                        <table class="es-content" cellspacing="0" cellpadding="0" align="center">\n' +
              '                            <tbody>\n' +
              '                                <tr>\n' +
              '                                    <td class="esd-stripe" style="background-color: #fafafa;" bgcolor="#fafafa" align="left">\n' +
              '                                        <table class="es-content-body" style="background-color: #ffffff;" width="600" cellspacing="0" cellpadding="16px" bgcolor="#ffffff" align="left">\n' +
              '                                            <tbody>\n' +
              '                                                <tr>\n' +
              '                                                    <td class="esd-structure es-p40t es-p20r es-p20l" style="background-color: transparent; background-position: left top;" bgcolor="transparent" align="left">\n' +
              '                                                        <table width="100%" cellspacing="0" cellpadding="0">\n' +
              '                                                            <tbody>\n' +
              '                                                                <tr>\n' +
              '                                                                    <td class="esd-container-frame" width="560" valign="top" align="left">\n' +
              '                                                                        <table style="background-position: left top;" width="100%" cellspacing="0" cellpadding="0">\n' +
              '                                                                            <tbody>\n' +
              '                                                                                <tr>\n' +
              '                                                                                    <td class="esd-block-text es-p15t es-p15b" align="left">\n' +
              '                                                                                        <h1 style="color: #333333; font-size: 20px;"><strong>FORGOT YOUR PASSWORD?</strong></h1>\n' +
              '                                                                                    </td>\n' +
              '                                                                                </tr>\n' +
              '                                                                                <tr>\n' +
              '                                                                                    <td class="esd-block-text es-p40r es-p40l" align="left">\n' +
              `                                                                                        <p style=\"font-size: 16px;\">Hi,&nbsp;${user.first_name}</p>\n` +
              '                                                                                    </td>\n' +
              '                                                                                </tr>\n' +
              '                                                                                <tr>\n' +
              '                                                                                    <td class="esd-block-text es-p35r es-p40l" align="left">\n' +
              '                                                                                        <p style="font-size: 16px;">There was a request to change your password.</p>\n' +
              '                                                                                    </td>\n' +
              '                                                                                </tr>\n' +
              '                                                                                <tr>\n' +
              '                                                                                    <td class="esd-block-text es-p25t es-p40r es-p40l es-p40b" align="left">\n' +
              '                                                                                        <p style="font-size: 16px;">If you did not make this request, just ignore this email. Otherwise, please click the button below to change your password:</p>\n' +
              '                                                                                    </td>\n' +
              '                                                                                </tr>\n' +
              '                                                                                <tr>\n' +
              `                                                                                    <td class=\"esd-block-button es-p40t es-p40b es-p10r es-p10l\" style=\"padding-top: 30px;\" align=\"left\"><span style=\"background-color: #0c63ce; border-radius: 8px; padding: 12px 16px; font-size: 16px;\"><a href=\"${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${userToken.id}\" style=\"color: white; text-decoration: none\" target=\"_blank\">Reset password</a></span></td>\n` +
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
              '                                                    <td class="esd-structure es-p5t es-p20b es-p20r es-p20l" style="background-position: left top;" align="left">\n' +
              '                                                        <table width="100%" cellspacing="0" cellpadding="0">\n' +
              '                                                            <tbody>\n' +
              '                                                                <tr>\n' +
              '                                                                    <td class="esd-container-frame" width="560" valign="top" align="left">\n' +
              '                                                                        <table width="100%" cellspacing="0" cellpadding="0">\n' +
              '                                                                            <tbody>\n' +
              '                                                                                <tr>\n' +
              '                                                                                    <td class="esd-block-text" esd-links-color="#666666" align="left">\n' +
              `                                                                                        <p style=\"font-size: 14px;\">This link will expire in <strong>5 minutes</strong>.</p>\n` +
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
              '\n' +
              '</html>'
          );
        });
    }

    return {
      message: 'success',
    };
  });

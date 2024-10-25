'use server';

import mailjet from 'node-mailjet';
import { FeedbackFormData } from '../types';

const mailjetClient = mailjet.apiConnect(
  process.env.MAILJET_API_KEY!,
  process.env.MAILJET_SECRET_KEY!,
);

export async function sendFeedbackEmail({ name, email, message }: FeedbackFormData) {
  try {
    mailjetClient.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: process.env.MAILJET_SENDER_EMAIL!,
            Name: 'Feedback Form',
          },
          To: [
            {
              Email: process.env.MAILJET_RECIPIENT_EMAIL,
            },
          ],
          Subject: 'New feedback from nextjs-os-blog.site',
          HTMLPart: `<table style="width:100%; border-collapse: collapse;">
                      <tr>
                        <th style="border: 1px solid #000; padding: 8px;">Field</th>
                        <th style="border: 1px solid #000; padding: 8px;">Value</th>
                      </tr>
                      <tr>
                        <td style="border: 1px solid #000; padding: 8px;">Name</td>
                        <td style="border: 1px solid #000; padding: 8px;">${name}</td>
                      </tr>
                      <tr>
                        <td style="border: 1px solid #000; padding: 8px;">Email</td>
                        <td style="border: 1px solid #000; padding: 8px;">${email}</td>
                      </tr>
                      <tr>
                        <td style="border: 1px solid #000; padding: 8px;">Message</td>
                        <td style="border: 1px solid #000; padding: 8px;">${message}</td>
                      </tr>
                    </table>`,
          ReplyTo: {
            Email: email,
          },
        },
      ],
    });

    return { status: 'success', message: 'Feedback sent successfully! ✅' };
  } catch (error) {
    console.error('⚠️ Error sending email:', error);
    return { status: 'error', message: '❌ Error sending email.' };
  }
}

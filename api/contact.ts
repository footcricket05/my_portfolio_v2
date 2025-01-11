import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, message } = request.body;

    // Here you would typically send this data to your preferred storage/email service
    // For example, you could use SendGrid, AWS SES, or store in a database

    // For now, we'll just simulate a successful response
    return response.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending message:', error);
    return response.status(500).json({ message: 'Failed to send message' });
  }
}
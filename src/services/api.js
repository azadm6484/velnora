/**
 * API service for communicating with the Velnora email microservice
 */

export const BACKEND_URL =
  import.meta.env.BACKEND_URL || 'https://velnora-backend.vercel.app';

/**
 * Sends a contact or quote inquiry to the email backend
 *
 * @param {Object} payload
 * @param {string} payload.name - Sender name
 * @param {string} payload.email - Sender email
 * @param {string} [payload.phone] - Contact phone number
 * @param {string} [payload.subject] - Email subject
 * @param {string} [payload.message] - Main message body
 * @param {string} [payload.details] - Detailed inquiry/project description
 * @param {string} [payload.project] - Project or talent category
 * @param {string} [payload.source] - Source form ('Contact Page', 'Quote Request', 'Talent Inquiry')
 * @returns {Promise<{success: boolean, message: string}>}
 */
export async function sendContactInquiry(payload) {
  const endpoint = `${BACKEND_URL}/api/email/send`;

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  let data = null;
  try {
    data = await response.json();
  } catch (err) {
    // Ignore JSON parsing failure for non-JSON responses
  }

  if (!response.ok) {
    const errorMessage =
      data?.message ||
      (response.status === 429
        ? 'Too many requests. Please wait a moment before trying again.'
        : 'Failed to send message. Please try again later.');
    throw new Error(errorMessage);
  }

  return data || { success: true, message: 'Email sent successfully' };
}

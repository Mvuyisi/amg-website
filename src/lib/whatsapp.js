/*
 * Builds a WhatsApp chat link. The number must be in international format, digits
 * only (for example 27821234567). An optional message is pre-filled in the chat.
 */

export function getWhatsAppLink(number, message = '') {
  const link = `https://wa.me/${number}`
  return message ? `${link}?text=${encodeURIComponent(message)}` : link
}

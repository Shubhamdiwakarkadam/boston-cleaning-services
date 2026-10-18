import { BUSINESS_INFO } from '../data/businessInfo';
import { BookingFormData } from '../types';

export function createWhatsAppUrl(text: string): string {
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${encoded}`;
}

export function buildBookingWhatsAppMessage(data: BookingFormData): string {
  const lines = [
    `Hello ${BUSINESS_INFO.name}, I would like to request a cleaning service enquiry for my property in Mumbai:`,
    '',
    `*Name:* ${data.fullName.trim()}`,
    `*Phone:* ${data.phone.trim()}`,
    `*Service Required:* ${data.service}`,
    `*Property Type:* ${data.propertyType}`,
    `*Locality / Area:* ${data.area.trim()}`,
    data.preferredDate ? `*Preferred Date:* ${data.preferredDate}` : '*Preferred Date:* Flexible / As per earliest slot',
    data.message.trim() ? `*Requirements / Details:* ${data.message.trim()}` : '*Requirements / Details:* Standard cleaning requirements',
    '',
    'Please confirm availability, scope, and quote for this service. Thank you!'
  ];

  return lines.join('\n');
}

export function buildServiceQuickEnquiryMessage(serviceName: string): string {
  return `Hello ${BUSINESS_INFO.name}, I am interested in your *${serviceName}* in Mumbai. Please share availability and details.`;
}

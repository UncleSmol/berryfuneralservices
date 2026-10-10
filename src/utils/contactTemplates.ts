/**
 * Berry Funeral Services - Centralized Contact & Communication Templates
 * 
 * Configured with official contact points:
 * - WhatsApp & Mobile: +27 83 552 5448 (international: 27835525448)
 * - Email: berrymof@gmail.com
 * - Operating Schedule:
 *   Monday: 9:00 AM - 6:00 PM
 *   Tuesday: Closed
 *   Wednesday: 9:00 AM - 6:00 PM
 *   Thursday: 9:00 AM - 6:00 PM
 *   Friday: 9:00 AM - 6:00 PM
 *   Saturday & Sunday: Closed
 *   Emergency Body Collection: 24/7 Everyday
 */

export const BERRY_CONTACT = {
  phoneDisplay: "+27 83 552 5448",
  phoneRaw: "0835525448",
  whatsappNumber: "27835525448",
  landlineDisplay: "010 023 6703",
  altPhone: "081 708 4102",
  email: "berrymof@gmail.com",
  address: "511 Bottlebrush Crescent, Ebony Park, Midrand, 1685, South Africa",
  businessHours: [
    { day: "Monday", hours: "9:00 AM – 6:00 PM", isOpen: true },
    { day: "Tuesday", hours: "Closed", isOpen: false },
    { day: "Wednesday", hours: "9:00 AM – 6:00 PM", isOpen: true },
    { day: "Thursday", hours: "9:00 AM – 6:00 PM", isOpen: true },
    { day: "Friday", hours: "9:00 AM – 6:00 PM", isOpen: true },
    { day: "Saturday", hours: "Closed", isOpen: false },
    { day: "Sunday", hours: "Closed", isOpen: false },
  ],
  dispatchNote: "24/7 Immediate Bereavement Dispatch & Body Collection operates round-the-clock everyday.",
};

export function createWhatsAppUrl(message: string): string {
  return `https://wa.me/${BERRY_CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function createMailtoUrl(subject: string, body: string): string {
  return `mailto:${BERRY_CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// 1. Immediate Need / 24/7 Emergency Dispatch
export function getImmediateNeedTemplates() {
  const whatsappText = `🕊️ *URGENT BEREAVEMENT ASSISTANCE REQUEST*
Hello Berry Funeral Services,

I have an urgent bereavement situation and need immediate assistance with body collection and mortuary care.

• Location / Facility: 
• Contact Person: 
• Contact Phone: 

Please contact me immediately. Thank you.`;

  const emailSubject = `[URGENT] Immediate Bereavement Assistance - Berry Funeral Services`;
  const emailBody = `Dear Berry Funeral Services Directors,

I have an urgent bereavement situation and require immediate assistance with dignified body collection and mortuary sanctum care.

Urgent Details:
- Deceased / Family Location: [Insert Hospital / Home Address]
- Primary Contact Person: [Insert Name]
- Primary Contact Phone: [Insert Phone Number]
- Additional Notes: [Insert Any Instructions]

Please reach out as soon as possible.

Sincerely,`;

  return {
    whatsappUrl: createWhatsAppUrl(whatsappText),
    emailUrl: createMailtoUrl(emailSubject, emailBody),
  };
}

// 2. Policy Plan Inquiries
export function getPolicyInquiryTemplates(planName: string, coverAmount?: string, premium?: string) {
  const planInfo = coverAmount ? `${planName} (${coverAmount})` : planName;
  const premiumInfo = premium ? `\n• Starting Premium: ${premium}` : "";

  const whatsappText = `🕊️ *FUNERAL POLICY PLAN INQUIRY*
Hello Berry Funeral Services,

I would like to inquire about joining the *${planInfo}*.${premiumInfo}

Could you please send me:
1. Registration requirements & onboarding steps
2. Waiting period terms (including zero-waiting options)
3. Banking / premium payment options

My Name: 
My Contact Number: 

Thank you!`;

  const emailSubject = `Inquiry: ${planInfo} - Berry Funeral Services`;
  const emailBody = `Dear Berry Funeral Services,

I am interested in taking out a funeral policy with Berry Funeral Services.

Plan of Interest: ${planInfo}${premiumInfo ? `\nIndicated Premium: ${premium}` : ""}

Please provide information on:
- Member eligibility and documentation required
- Policy schedule and payment mechanisms
- Family registration details

My Contact Details:
- Full Name: 
- Phone Number: 
- Preferred Communication: WhatsApp / Email

Kind regards,`;

  return {
    whatsappUrl: createWhatsAppUrl(whatsappText),
    emailUrl: createMailtoUrl(emailSubject, emailBody),
  };
}

// 3. Service Inquiries
export function getServiceInquiryTemplates(serviceName: string) {
  const whatsappText = `🕊️ *SERVICE INQUIRY: ${serviceName.toUpperCase()}*
Hello Berry Funeral Services,

I would like to inquire about your *${serviceName}* services in Midrand / nationwide.

Could you please advise on availability, tariff guidance, and next steps?

My Name: 
Contact Number: 

Thank you!`;

  const emailSubject = `Inquiry Regarding ${serviceName} - Berry Funeral Services`;
  const emailBody = `Dear Berry Funeral Services,

I am writing to inquire about your ${serviceName}.

Could you please provide:
- Scope of services included
- Estimated costs and quotation details
- Step-by-step coordination process

My Details:
- Full Name: 
- Contact Phone: 
- Location: 

Warm regards,`;

  return {
    whatsappUrl: createWhatsAppUrl(whatsappText),
    emailUrl: createMailtoUrl(emailSubject, emailBody),
  };
}

// 4. Arrangement Modal Wizard
export function getArrangementTemplates(data: {
  referenceId: string;
  fullName: string;
  phone: string;
  service: string;
  urgency: string;
  consultationMode: string;
  notes?: string;
  initialEstimate?: string;
}) {
  const estimateLine = data.initialEstimate ? `\n• Estimated Budget: ${data.initialEstimate}` : "";
  const notesLine = data.notes ? `\n• Location / Cultural Notes: ${data.notes}` : "";

  const whatsappText = `🕊️ *FUNERAL ARRANGEMENT BOOKING [REF: ${data.referenceId}]*
Hello Director Berry Mofulatsi & Concierge,

I have submitted a funeral arrangement request via your website:

• Reference ID: ${data.referenceId}
• Client Name: ${data.fullName || "Valued Family"}
• Contact Phone: ${data.phone}
• Requested Service: ${data.service}
• Urgency Level: ${data.urgency}
• Preferred Consultation: ${data.consultationMode}${estimateLine}${notesLine}

Please confirm receipt and get back to me. Thank you!`;

  const emailSubject = `Funeral Arrangement Booking [Ref: ${data.referenceId}] - ${data.fullName || "Client Request"}`;
  const emailBody = `Dear Director Berry Mofulatsi & Berry Funeral Services Concierge,

Please receive my formal arrangement booking details:

Reference ID: ${data.referenceId}
Client Name: ${data.fullName || "Valued Client"}
Contact Phone: ${data.phone}
Requested Service: ${data.service}
Urgency Level: ${data.urgency}
Preferred Consultation Method: ${data.consultationMode}${estimateLine ? `\nEstimated Budget: ${data.initialEstimate}` : ""}${notesLine ? `\nLocation / Cultural Notes: ${data.notes}` : ""}

Please advise on our consultation schedule and next steps.

Kind regards,
${data.fullName || "Client"}`;

  return {
    whatsappUrl: createWhatsAppUrl(whatsappText),
    emailUrl: createMailtoUrl(emailSubject, emailBody),
    whatsappText,
    emailSubject,
    emailBody,
  };
}

// 5. Contact Section Form
export function getContactFormTemplates(data: {
  name: string;
  phone: string;
  email: string;
  service: string;
  plan: string;
  message: string;
}) {
  const whatsappText = `🕊️ *NEW CLIENT INQUIRY - BERRY FUNERAL SERVICES*
Hello Berry Funeral Services,

I am reaching out through your official web portal:

• Full Name: ${data.name || "N/A"}
• Phone Number: ${data.phone || "N/A"}
• Email Address: ${data.email || "N/A"}
• Service Needed: ${data.service}
• Preferred Plan: ${data.plan}
• Location / Cultural Requests:
${data.message || "Please contact me for further consultation."}

Looking forward to your guidance.`;

  const emailSubject = `Client Inquiry: ${data.service} - ${data.name || "Website Inquiry"}`;
  const emailBody = `Dear Berry Funeral Services,

I would like to request assistance regarding your funeral services and policy solutions.

Client Information:
- Full Name: ${data.name || "N/A"}
- Phone Number: ${data.phone || "N/A"}
- Email: ${data.email || "N/A"}

Service Requested:
- Service Category: ${data.service}
- Preferred Funeral Plan: ${data.plan}

Cultural Preferences / Location Details:
${data.message || "No additional notes provided."}

Please get in touch with me via WhatsApp, phone, or reply to this email.

Kind regards,
${data.name || "Prospective Client"}`;

  return {
    whatsappUrl: createWhatsAppUrl(whatsappText),
    emailUrl: createMailtoUrl(emailSubject, emailBody),
  };
}

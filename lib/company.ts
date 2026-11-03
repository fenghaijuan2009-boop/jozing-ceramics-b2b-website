// Owner-confirmed public facts, 2026-11-03. Registration and experience are distinct.
export const company = {
  legalName: "Xiamen Jozing Industrial Co., Ltd.",
  registrationYear: "2017",
  ceramicExperienceSince: "2003",
  facilityArea: "6,000 m²",
  streetAddress: "No. 3, Gubantou Village, Chao'an District",
  addressLocality: "Chaozhou",
  addressRegion: "Guangdong",
  addressCountry: "CN",
  address: "No. 3, Gubantou Village, Chao'an District, Chaozhou, Guangdong, China",
  email: "sales_b2b@jozing.cn",
  whatsapp: "+86 178 2590 7898",
  telephone: "+8617825907898",
  whatsappUrl: "https://wa.me/8617825907898",
  website: "https://www.jozing.com/",
} as const;

export const companyHistory = `${company.legalName} was registered in ${company.registrationYear}. Our ceramic experience dates back to ${company.ceramicExperienceSince}; this is separate from the company's registration date.`;
export const companyFacility = `Our ${company.facilityArea} facility and warehouse is located at ${company.address}.`;

// Add LinkedIn/Wikidata only after the exact company entities have been confirmed.
export const companySameAs = [
  "https://www.youtube.com/@jozingstockceramic",
  "https://www.facebook.com/profile.php?id=100064043678536",
  "https://www.instagram.com/jozingstockceramic",
];

const origin = "https://www.jozing.com";

export const testReports = [
  {
    id: "CANHG2307611901",
    title: "SGS Porcelain Soup Plate Test Report",
    file: "/compliance/SGS-ISO-6486-Report-CANHG2307611901.pdf",
    laboratory: "SGS-CSTC Standards Technical Services Co., Ltd. Guangzhou Branch",
    issued: "2023-06-05",
    sample: "Porcelain soup plate, item NO.2; sample CAN23-076119.001",
    method: "With reference to ISO 6486-1:2019; ICP-OES analysis",
    result: "Four reported measurements: leachable lead <0.1 mg/L and leachable cadmium <0.01 mg/L. The report conclusion is 'See Results', not a blanket pass certification.",
  },
  {
    id: "ZTS23090909ZRCR1",
    title: "ZTS Ceramic Food-Contact Test Report",
    file: "/compliance/EU-84-500-EEC-Food-Contact-Report-ZTS23090909ZRCR1.pdf",
    laboratory: "Shenzhen ZTS Testing Service Co., Ltd.",
    issued: "2023-09-18",
    sample: "White ceramic cup body (70 mm depth) and color ceramic plate body (10 mm depth)",
    method: "Lead and cadmium migration; report references 84/500/EEC and amendment 2005/31/EC",
    result: "The laboratory reports 'Pass' for the submitted samples. Page 2 records lead <0.1 and <0.3 mg/L respectively, and cadmium <0.01 mg/L for both samples.",
  },
];

export const reportScope = "These 2023 laboratory reports apply to the identified submitted samples and test conditions. They do not certify every JOZING product or current stock lot. Match the item, glaze, decoration and intended market to the report, and request current testing where needed.";

export const reportStructuredData = testReports.map(report => ({
  "@type": "Report",
  "@id": `${origin}${report.file}#report`,
  name: report.title,
  reportNumber: report.id,
  datePublished: report.issued,
  author: { "@type": "Organization", name: report.laboratory },
  about: { "@id": `${origin}/#organization` },
  url: `${origin}${report.file}`,
  encoding: { "@type": "MediaObject", contentUrl: `${origin}${report.file}`, encodingFormat: "application/pdf" },
  description: `${report.sample}. ${report.method}. ${report.result} ${reportScope}`,
}));

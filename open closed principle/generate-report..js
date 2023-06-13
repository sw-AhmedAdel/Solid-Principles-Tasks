// reportGenerator.js
const dataSourceA = require("./dataSourceA");
const generateReport = require("./generateReportClass");

function generateReport() {
  // use  generateReport to generate pdfReportData and excelReportData
  const dataFromSourceA = dataSourceA.generateData();
  return ({ pdfReportData, excelReportData } =
    new generateReport.generateReport(dataFromSourceA));
}

module.exports = { generateReport };

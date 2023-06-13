// reportGenerator.js
const dataSourceA = require("./dataSourceA");
const generateReportClass = require("./generateReportClass");

function generateReport() {
  // use  generateReport to generate pdfReportData and excelReportData
  const dataFromSourceA = dataSourceA.generateData();
  return ({ pdfReportData, excelReportData } =
    new generateReportClass.generateReport(dataFromSourceA));
}

module.exports = { generateReport };

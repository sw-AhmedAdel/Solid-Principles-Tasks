const pdfReport = require("./pdfReportClass");
const excelReport = require("./excelReportClass");

// to add another class like sheet Report i can extend this class from report class
// and add it below
class generateReport {
  constructor(dataFromSourceA) {
    this.dataFromSourceA = dataFromSourceA;
  }

  generateReport() {
    const pdfReportData = new pdfReport.generateReport(dataFromSourceA);
    const excelReportData = new excelReport.generateReport(dataFromSourceA);

    return { pdfReportData, excelReportData };
  }
}

module.exports = generateReport;

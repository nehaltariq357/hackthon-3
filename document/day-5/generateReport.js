import fs from "fs";

const testCases = [
  {
    TestCaseID: "TC001",
    Description: "Validate product listing page",
    Steps: "Open product page > Verify products",
    ExpectedResult: "Products displayed correctly",
    ActualResult: "Products displayed correctly",
    Status: "Passed",
    SeverityLevel: "Low",
    AssignedTo: "-",
    Remarks: "No issues found",
  },
  {
    TestCaseID: "TC002",
    Description: "Test API error handling",
    Steps: "Disconnect API > Refresh page",
    ExpectedResult: "Show fallback UI with error message",
    ActualResult: "Error message shown",
    Status: "Passed",
    SeverityLevel: "Medium",
    AssignedTo: "-",
    Remarks: "Handled gracefully",
  },
  {
    TestCaseID: "TC003",
    Description: "Check cart functionality",
    Steps: "Add product to cart > Verify cart contents",
    ExpectedResult: "Cart updates with added product",
    ActualResult: "Cart updates as expected",
    Status: "Passed",
    SeverityLevel: "High",
    AssignedTo: "-",
    Remarks: "Works as expected",
  },
  {
    TestCaseID: "TC004",
    Description: "Ensure responsiveness on mobile",
    Steps: "Resize browser window > Check layout",
    ExpectedResult: "Layout adjusts properly to screen size",
    ActualResult: "Responsive layout working as intended",
    Status: "Passed",
    SeverityLevel: "Medium",
    AssignedTo: "-",
    Remarks: "Test successful",
  },
];

const csvHeader =
  "Test Case ID,Test Case Description,Test Steps,Expected Result,Actual Result,Status,Severity Level,Assigned To,Remarks\n";

const csvRows = testCases
  .map((test) =>
    [
      test.TestCaseID,
      test.Description,
      test.Steps,
      test.ExpectedResult,
      test.ActualResult,
      test.Status,
      test.SeverityLevel,
      test.AssignedTo,
      test.Remarks,
    ].join(",")
  )
  .join("\n");

fs.writeFileSync("TestingReport.csv", csvHeader + csvRows);
console.log("Testing report saved as TestingReport.csv");

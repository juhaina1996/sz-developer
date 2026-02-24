// Google Apps Script for Enquiry Form
// Deploy this as a Web App in Google Apps Script

// CONFIGURATION - Update these values
const ADMIN_EMAIL = "szdevelopers72@gmail.com"; // Change this to your email
const SHEET_NAME = "Enquiries"; // Name of the sheet tab

function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);
    
    // Create sheet if it doesn't exist
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      // Add headers
      sheet.appendRow([
        "Timestamp",
        "Name",
        "Phone/WhatsApp",
        "Email",
        "Message"
      ]);
      // Format header row
      const headerRange = sheet.getRange(1, 1, 1, 5);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#00CC61");
      headerRange.setFontColor("#FFFFFF");
    }
    
    // Add the data to the sheet
    const timestamp = new Date();
    sheet.appendRow([
      timestamp,
      data.name || "",
      data.phone || "",
      data.email || "",
      data.message || ""
    ]);
    
    // Send email to admin
    sendEmailNotification(data, timestamp);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: "Form submitted successfully"
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendEmailNotification(data, timestamp) {
  const subject = "New Enquiry from SZ Developers Website";
  
  const htmlBody = `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #00CC61; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
          .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-radius: 0 0 5px 5px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #555; }
          .value { margin-top: 5px; padding: 10px; background-color: white; border-left: 3px solid #00CC61; }
          .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #777; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Enquiry Received</h2>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Timestamp:</div>
              <div class="value">${Utilities.formatDate(timestamp, Session.getScriptTimeZone(), "dd MMM yyyy, hh:mm a")}</div>
            </div>
            
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${data.name || "Not provided"}</div>
            </div>
            
            <div class="field">
              <div class="label">Phone/WhatsApp:</div>
              <div class="value">${data.phone || "Not provided"}</div>
            </div>
            
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${data.email || "Not provided"}</div>
            </div>
            
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${data.message || "No message provided"}</div>
            </div>
            
            <div class="footer">
              This enquiry was submitted through the SZ Developers website contact form.
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
  
  // Plain text version for email clients that don't support HTML
  const plainBody = `
New Enquiry from SZ Developers Website

Timestamp: ${Utilities.formatDate(timestamp, Session.getScriptTimeZone(), "dd MMM yyyy, hh:mm a")}
Name: ${data.name || "Not provided"}
Phone/WhatsApp: ${data.phone || "Not provided"}
Email: ${data.email || "Not provided"}
Message: ${data.message || "No message provided"}

---
This enquiry was submitted through the SZ Developers website contact form.
  `;
  
  // Send the email
  MailApp.sendEmail({
    to: ADMIN_EMAIL,
    subject: subject,
    body: plainBody,
    htmlBody: htmlBody
  });
}

// Test function to verify setup
function testSetup() {
  const testData = {
    name: "Test User",
    phone: "+91 9876543210",
    email: "test@example.com",
    message: "This is a test enquiry"
  };
  
  const testEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(testEvent);
  Logger.log(result.getContent());
}

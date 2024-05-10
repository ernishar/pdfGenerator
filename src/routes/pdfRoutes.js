const express = require('express');
const router = express.Router();
const { generatePDF, sendEmail } = require('../controllers/pdfController');

// Route to generate PDF and send via email
router.post('/generate-pdf', async (req, res) => {
  const { htmlContent, email } = req.body;

  try {
    const pdfBuffer = await generatePDF(htmlContent);
    await sendEmail(email, 'PDF Report', 'Please find attached the PDF report.', pdfBuffer);

    res.status(200).send('PDF generated and sent successfully');
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;

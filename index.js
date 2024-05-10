const express = require('express');
const app = express();
const port = 8000;

app.use(express.json());

// Import routes
const pdfRoutes = require('./src/routes/pdfRoutes');

// Use routes
app.use('/api', pdfRoutes);

// app.use(express.urlencoded())
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

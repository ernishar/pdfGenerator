const express = require('express');
const dotenv = require('dotenv');
dotenv.config()
const app = express();
const pdfRoutes = require('./src/routes/pdfRoutes');


const port = 8000;

app.use(express.json());




// Use routes
app.use('/api', pdfRoutes);

// app.use(express.urlencoded())
app.listen(process.env.PORT || port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

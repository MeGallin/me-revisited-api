const express = require('express');
require('dotenv').config({ path: './config.env' });
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
app.use(express.json());
app.use(cors());

//Routes
app.use('/api/', require('./routes/PageHitsRoutes'));
app.use('/api/', require('./routes/AnalyticsRoutes'));
app.use('/api/', require('./routes/ContactFormRoutes'));
app.use('/api/', require('./routes/UserRoutes'));
app.use('/api/', require('./routes/EmailConfirmationLinkRoute'));
app.use('/api/', require('./routes/AdminRoutes'));
app.use('/api/', require('./routes/FileUploaderRoutes.js'));

const PORT = process.env.PORT || 5000;
//Connect to Mongo
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
});

const express = require('express');
const app = express();
const cors = require('cors');

// Allow requests from cdn.sanity.io
const corsOptions = {
  origin: 'https://cdn.sanity.io',
};

// Enable CORS with the above options
app.use(cors(corsOptions));
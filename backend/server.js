const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const configurationRoutes = require("./routes/configurationRoutes");
require('dotenv').config();

app.use(cors());
app.use(express.json());

// connect to MongoDB 
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err.message));

// routes
app.use("/api", configurationRoutes);

// server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

const express = require('express');
const cors = require('cors');
const bp = require('body-parser');
const app = express();
const PORT = 4000;

app.use("/api/v1/videos",require("./routes/videos"))

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
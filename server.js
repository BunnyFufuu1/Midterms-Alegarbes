const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
app.get('MIDTERM EXAM ITP 314', (req, res) => {
    res.send('your message');
  });
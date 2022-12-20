const express = require("express");
const app = express();
// const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-cache");

  let delay = Number.parseInt(req.query.delay);

  if (!delay || delay < 0) {
    delay = 0;
  } else if (delay > 60000) {
    delay = 60000;
  }

  const responseBody = { delay: `${delay} ms` };

  setTimeout(() => {
    res.json(responseBody);
  }, delay);
});

// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });

module.exports = app;

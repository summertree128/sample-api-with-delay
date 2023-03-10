const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/delay", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-cache");

  let delay = Number.parseInt(req.query.ms);

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

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

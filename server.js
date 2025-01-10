const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

app.get("/posts", async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch posts",
      message: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

import express from "express";
import cron from "node-cron";

import dotenv from "dotenv";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

cron.schedule("0 0 * * * *", () => generateQuote());

app.get("/quote", (req, res) => {
  res.json({ quote, quoteAuthor });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

let quote = `When studying a new concept, try to explain it in your own words as if you're teaching it to someone else. 
      This technique, known as the 'Feynman Technique,' helps identify gaps in your understanding and reinforces your learning.`;
let quoteAuthor = "Richard Feynman";

async function generateQuote() {
  fetch("https://zenquotes.io/api/random")
    .then((response) => response.json())
    .then((data) => {
      quote = data[0].q;
      quoteAuthor = data[0].a;
    })
    .catch((error) => {
      console.error("Error fetching the quote:", error);
      quote = `When studying a new concept, try to explain it in your own words as if you're teaching it to someone else. 
      This technique, known as the 'Feynman Technique,' helps identify gaps in your understanding and reinforces your learning.`;
      quoteAuthor = "Richard Feynman";
    });
}

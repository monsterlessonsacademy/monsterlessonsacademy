import express from "express";
import bodyParser from "body-parser";
import ollama from "ollama";

const app = express();
app.use(bodyParser.json());

app.post("/prompt", async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await ollama.chat({
      model: "llama3.2",
      messages: [{ role: "user", content: prompt }],
    });

    res.json({ text: response.message.content });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

// import express from "express";
// import bodyParser from "body-parser";
// import fetch from "node-fetch";
//
// const app = express();
// app.use(bodyParser.json());
//
// const OLLAMA_URL = "http://127.0.0.1:11434";
//
// app.post("/prompt", async (req, res) => {
//   try {
//     const { prompt } = req.body;
//
//     const response = await fetch(
//       `${OLLAMA_URL}/v1/completions`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           model: "llama3.2",
//           prompt: prompt,
//           max_tokens: 200,
//         }),
//       }
//     );
//
//     if (!response.ok) {
//       const text = await response.text();
//       throw new Error(`Ollama API error ${response.status}: ${text}`);
//     }
//
//     const data = await response.json();
//     res.json(data);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Something went wrong" });
//   }
// });
//
// app.listen(3000, () => {
//   console.log("Server running on http://localhost:3000");
// });

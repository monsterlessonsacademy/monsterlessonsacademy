// API KEY 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
const app = require("express")();
const bodyParser = require("body-parser");
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/completion", async (req, res, next) => {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-001",
      prompt: req.body.text,
      temperature: 0.4,
      max_tokens: 64,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    console.log("response", response.data.choices[0]);
    res.send(response.data.choices[0].text);
  } catch (err) {
    next(err);
  }
});

app.post("/imagegeneration", async (req, res, next) => {
  try {
    const response = await openai.createImage({
      prompt: req.body.text,
      n: 1,
      size: "1024x1024",
    });
    console.log("response", response.data);
    res.send({ url: response.data.data[0].url });
  } catch (err) {
    next(err);
  }
});

app.listen(3000, () => {
  console.log(`App is started`);
});

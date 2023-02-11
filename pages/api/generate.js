import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion("text-davinci-003", {
    prompt: generatePrompt(req.body.data),
    temperature: .7,
    max_tokens: 400,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop: ["{}"],
  });
  res.status(200).json({ result: completion.data.choices[0].text
                          });
} 

function generatePrompt(data) {
    return `${data}`
}   
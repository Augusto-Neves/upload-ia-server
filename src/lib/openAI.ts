import 'dotenv/config';
import { OpenAI } from 'openai';

export const openAI = new OpenAI({
  apiKey: process.env.OPEN_IA_KEY,
});

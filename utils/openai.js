import { GoogleGenAI } from "@google/genai";
import { OPENAI_KEY } from "./constants";

const openai = new GoogleGenAI({
  apiKey: OPENAI_KEY,
});
export default openai;

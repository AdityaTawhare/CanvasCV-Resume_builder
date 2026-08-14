import OpenAI from "openai";
import { GoogleGenAI } from "@google/genai";

const ai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: process.env.OPENAI_BASE_URL,
});

export const googleAI = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY || process.env.OPENAI_API_KEY
});

export default ai;


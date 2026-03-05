import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file") as File;

  const bytes = await file.arrayBuffer();
  const base64 = Buffer.from(bytes).toString("base64");

  // IA GRATUITE : OCR + résumé + traduction + RDV + checklist
  const prompt = `
Tu es un assistant administratif.
Lis ce document et renvoie un JSON EXACT comme ceci :

{
  "text": "...",
  "resume": "...",
  "translation": "...",
  "rdv": "...",
  "checklist": ["...", "...", "..."]
}

Le document est encodé en base64 ici :
${base64}
  `;

  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.GROQ_API_KEY}`
    },
    body: JSON.stringify({
      model: "llama-3.2-90b-vision-preview",
      messages: [{ role: "user", content: prompt }]
    })
  });

  const data = await response.json();
  const text = data.choices[0].message.content;

  return NextResponse.json(JSON.parse(text));
}

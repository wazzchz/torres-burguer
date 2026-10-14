// Build ultra-simples: copia index.html -> dist/ (pronto p/ Vercel/Netlify/Pages)
import { mkdirSync, copyFileSync } from "node:fs";
mkdirSync("dist", { recursive: true });
copyFileSync("index.html", "dist/index.html");
console.log("✅ build ok -> dist/index.html");

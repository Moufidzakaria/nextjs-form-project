import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import fs from "fs";
import path from "path";

// Utiliser MongoDB local par défaut si .env.local n'est pas défini
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/myformdb";

// Fonction pour connecter MongoDB
async function connectDB() {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(MONGO_URI);
  console.log("MongoDB connecté ✅");
}

// Schema utilisateur
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  age: Number,
  extra: String,
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model("User", userSchema);

export async function POST(req: NextRequest) {
  try {
    console.log("Connexion à MongoDB...");
    await connectDB();
    console.log("MongoDB connecté ✅");

    const body = await req.json();
    console.log("Données reçues :", body);

    if (!body.name || !body.email || !body.password) {
      return NextResponse.json({ message: "Champs requis manquants" }, { status: 400 });
    }

    // Enregistrement MongoDB
    const user = await User.create(body);
    console.log("Utilisateur enregistré dans MongoDB :", user);

    // Sauvegarde dans fichier JSON local
    const filePath = path.join(process.cwd(), "data", "users.json");
    let fileData: any[] = [];
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      fileData = fileContent ? JSON.parse(fileContent) : [];
    }
    fileData.push(body);
    fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2));
    console.log("Utilisateur sauvegardé dans users.json");

    return NextResponse.json({ message: "Utilisateur enregistré", user });
  } catch (err: any) {
    console.error("Erreur backend :", err);
    return NextResponse.json({ message: "Erreur serveur", error: err.message }, { status: 500 });
  }
}

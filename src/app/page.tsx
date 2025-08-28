"use client";

import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    extra: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/users", form);
      alert(res.data.message);
      setForm({ name: "", email: "", password: "", age: "", extra: "" });
    } catch (err: any) {
      alert(err.response?.data?.message || "Erreur serveur");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6">Formulaire Next.js</h1>

        <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} className="w-full p-2 mb-4 border rounded" required />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full p-2 mb-4 border rounded" required />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} className="w-full p-2 mb-4 border rounded" required />
        <input type="number" name="age" placeholder="Age" value={form.age} onChange={handleChange} className="w-full p-2 mb-4 border rounded" />
        <input type="text" name="extra" placeholder="Extra" value={form.extra} onChange={handleChange} className="w-full p-2 mb-4 border rounded" />

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">Envoyer</button>
      </form>
    </div>
  );
}

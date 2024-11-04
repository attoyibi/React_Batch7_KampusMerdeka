// App.jsx
import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

function App() {
  const [inputUser, setInputUser] = useState(""); // Menyimpan input pengguna
  const [response, setResponse] = useState(""); // Menyimpan respons dari AI

  // Fungsi untuk memanggil Google AI Gemini API
  const generateText = async (prompt) => {
    try {
      // Inisialisasi GoogleGenerativeAI dengan API Key
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      // Konfigurasi opsi pemrosesan AI
      const generationConfig = {
        maxOutputTokens: 1000,
        temperature: 1, // Kreativitas dari AI
      };

      const chatSession = model.startChat({
        generationConfig,
      });

      // Mengirim permintaan ke API
      const result = await chatSession.sendMessage(prompt);
      setResponse(result.response.text());
    } catch (error) {
      console.error("Error generating text:", error);
    }
  };

  // Event handler untuk button
  const handleGenerate = () => {
    if (inputUser.trim()) { // Cek apakah input tidak kosong
      generateText(inputUser); // Kirim input pengguna sebagai prompt
    }
  };

  // Event handler untuk input perubahan
  const handleInputChange = (e) => {
    setInputUser(e.target.value); // Update state dengan input pengguna
  };

  return (
    <div>
      <h1>Google AI Gemini API Example</h1>
      <input
        type="text"
        value={inputUser}
        onChange={handleInputChange} // Mengupdate input pengguna
        placeholder="Tanyakan sesuatu kepada AI..."
      />
      <button onClick={handleGenerate}>Generate Text</button>
      <p>Response: {response}</p>
    </div>
  );
}

export default App;

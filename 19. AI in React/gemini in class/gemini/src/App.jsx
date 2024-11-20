// 1. buat struktur kodenya / UI
// 2. integrasikan sehingga inputan use akan masuk ke state
// 3. pasang google/open ai setting
// 4. masukkan data dari state ke dalam setting open ai
import { useState } from 'react'
import { GoogleGenerativeAI } from "@google/generative-ai"
import { data } from './data/dataHarga'; // Sesuaikan path jika perlu
import { apiKey } from './constans/config'
import HistoryList from './components/HistoryList';
function App() {
  const [inputUser, setInputUser] = useState("");
  const [response, setResponse] = useState("defult response");
  const [dataState, setDataState] = useState(data);
  const [history, setHistory] = useState([
    {
      role: "user",
      parts: [{ text: "nama saya muchson, kamu siapa ?" }],
    },
    {
      role: "model",
      parts: [{ text: "saya adalah AI tukang sayur" }],
    },
  ]);
  function handleChangeInputPrompt(e) {
    console.log("handle change");
    setInputUser(e.target.value);
  }

  //inisialisasi google generativ AI dengan API key
  const genAI = new GoogleGenerativeAI(apiKey);

  // dapatkan model yang akan digunakan (gemini)
  const model = genAI.getGenerativeModel({
    // model: "gemini-1.5-flash-latest",
    model: "gemini-1.5-flash-latest",
  });

  // konfigurasi opsi pemrosesan AI
  const generationConfig = {
    maxOutputTokens: 1000,
    temperature: 1,// kreatifitas dari AI
  }

  // functio untuk menembak ke AI Gemini
  async function handlePromptSubmit() {
    // ambil inputan dari user
    console.log("input user = ", inputUser);
    try {
      const chatSession = model.startChat(
        {
          generationConfig,
          history: history,
        }
      )
      let promptDefault = `Kamu harus menjawab dengan sopan. Berikut adalah data harga yang ada: ${JSON.stringify(dataState, null, 2)}. 
Tidak boleh menjawab di luar dari data dan history yang diberikan. bahwa saya adalah muchson.dengan history percakapan${JSON.stringify(history, null, 2)}. Berikut inputan pengguna: ${inputUser}`;
      // const dataAPI = await axios.get("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=YOUR_API_KEY", data)
      const result = await chatSession.sendMessage(inputUser);
      console.log(result.response.text());
      setResponse(result.response.text());

      //ada logic untuk menambahkan pada history state
      setHistory((prevData) => [
        ...prevData,
        { role: "user", parts: [{ text: inputUser }], },
        { role: "model", parts: [{ text: result.response.text() }] },
      ]);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <h1>Gemini AI</h1>
      <input type="text" onChange={handleChangeInputPrompt} />
      <input placeholder = "username" type="text" onChange={handleChange} />
      <button onClick={handlePromptSubmit} type="button">Submit</button>
      <p>{response}</p>
      <HistoryList />
    </>
  )
}

export default App

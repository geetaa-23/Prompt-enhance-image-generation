import { useState } from "react";

function App() {
  const [prompt, setPrompt] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-10">
      
      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-4">
          AI Prompt Enhancer 🚀
        </h1>

        <p className="text-center text-gray-400 mb-10">
          Transform simple prompts into cinematic AI image prompts
        </p>

        <div className="bg-gray-900 p-6 rounded-2xl shadow-2xl">
          
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter a simple prompt like: futuristic city"
            className="w-full h-40 bg-black border border-gray-700 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <button
            className="mt-6 w-full bg-purple-600 hover:bg-purple-700 transition-all duration-300 py-4 rounded-xl font-semibold text-lg"
          >
            Generate Enhanced Prompts
          </button>

        </div>

      </div>

    </div>
  );
}

export default App;
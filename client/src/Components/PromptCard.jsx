function PromptCard({ title, prompt, reasoning }) {
  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-800">
      
      <h2 className="text-2xl font-bold text-purple-400 mb-4">
        {title}
      </h2>

      <div className="mb-5">
        <h3 className="text-lg font-semibold mb-2">
          Enhanced Prompt
        </h3>

        <p className="text-gray-300 leading-relaxed">
          {prompt}
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">
          Reasoning
        </h3>

        <p className="text-gray-400 leading-relaxed">
          {reasoning}
        </p>
      </div>

    </div>
  );
}

export default PromptCard;
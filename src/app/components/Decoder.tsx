"use client";

import { useState } from "react";
import { extractSingleLink } from "../lib/decode";

export default function Decoder() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [msg, setMsg] = useState("");

  function handleDecode() {
    if (!input.trim()) {
      setMsg("Masukkan URL terlebih dahulu.");
      setResult(null);
      return;
    }

    const decoded = extractSingleLink(input);

    if (!decoded) {
      setMsg(
        "❌ Tidak dapat menemukan link asli. Pastikan URL masih memiliki parameter ?s= dan belum dihapus oleh ouo.io."
      );
      setResult(null);
      return;
    }

    setMsg("✅ Link asli berhasil ditemukan:");
    setResult(decoded);
  }

  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-700">
      <h2 className="text-2xl font-bold text-sky-400 mb-4">🔍 URL Decoder</h2>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={4}
        placeholder="Tempel URL yang mengandung ?s=..."
        className="w-full p-3 bg-gray-800 text-gray-100 rounded-lg resize-none border border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
      />

      <div className="flex gap-3 mt-4">
        <button
          onClick={handleDecode}
          className="bg-sky-500 hover:bg-sky-600 px-5 py-2 rounded-md font-semibold text-gray-900"
        >
          Decode
        </button>
        <button
          onClick={() => {
            setInput("");
            setResult(null);
            setMsg("");
          }}
          className="border border-gray-600 px-5 py-2 rounded-md hover:bg-gray-800"
        >
          Clear
        </button>
      </div>

      {msg && <p className="text-gray-300 mt-3">{msg}</p>}

      {result && (
        <div className="mt-4 bg-gray-800 p-3 rounded-lg break-words">
          <a
            href={result}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-300 font-semibold hover:underline"
          >
            {result}
          </a>
        </div>
      )}
    </div>
  );
}

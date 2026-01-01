import CodeMirror from "@uiw/react-codemirror";
import { useState } from "react";
import axiosClient from "../utils/axiosClient";
import languageFinder from "../utils/languageFinder";
import * as themes from "@uiw/codemirror-themes-all";


const Compiler = () => {
  const [code, setCode] = useState(
    "#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << \"Hello from Compile-X\";\n    return 0;\n}"
  );
  const [output, setOutput] = useState("Output will be displayed here...");
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState("cpp");

  const runCode = async () => {
    setLoading(true);
    try {
      const response = await axiosClient.post("/code/run", {
        language,
        code
      });
      setOutput(response.data.output);
    } catch {
      setOutput("Error while running code");
    } finally {
      setLoading(false);
    }
  };

  const currentLang = languageFinder.find((l) => l.lang === language);

  return (
    <div
      className="h-screen w-full flex flex-col md:flex-row gap-4 p-4
      bg-linear-to-br from-black via-gray-900 to-black text-white"
    >
      <div
        className="relative md:w-1/2 h-1/2 md:h-full
        bg-black/40 backdrop-blur-2xl
        border border-white/10 rounded-2xl
        shadow-2xl shadow-black/60 overflow-hidden"
      >
        <div
          className="absolute top-0 left-0 right-0 z-10
          flex items-center justify-between px-4 py-2
          bg-black/50 backdrop-blur-xl
          border-b border-white/10"
        >
          <span className="text-sm font-semibold text-gray-300">
            Playground 
          </span>

          <button
            onClick={runCode}
            disabled={loading}
            className="px-4 py-1.5 rounded-lg
              bg-emerald-500/80 text-black font-medium
              hover:bg-emerald-400
              hover:scale-105 active:scale-95 transition
              disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Running..." : "Run ▶"}
          </button>
        </div>

        <CodeMirror
          value={code}
          height="100%"
          extensions={[currentLang?.extension]}
          onChange={(value) => setCode(value)}
          theme={themes.vscodeDark}
          className="pt-12 bg-transparent text-sm"
        />
      </div>

      <div
        className="md:w-1/2 h-1/2 md:h-full flex flex-col
        bg-black/40 backdrop-blur-2xl
        border border-white/10 rounded-2xl
        shadow-2xl shadow-black/60 overflow-hidden"
      >
        <div
          className="p-3 bg-black/50 backdrop-blur-xl
          border-b border-white/10"
        >
          <select
            value={language}
            onChange={(e) => {
              setLanguage(e.target.value);
              setCode(
                languageFinder.find((d) => d.lang === e.target.value)
                  ?.boilerplate
              );
            }}
            className="bg-black/60 text-gray-200 px-3 py-2 rounded-lg
              border border-white/10 outline-none
              focus:ring-1 focus:ring-emerald-500/50"
          >
            {languageFinder.map((data, idx) => (
              <option value={data.lang} key={idx}>
                {data.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1 p-4 overflow-auto font-mono text-sm text-gray-300 whitespace-pre-wrap">
          {output}
        </div>
      </div>
    </div>
  );
};

export default Compiler;

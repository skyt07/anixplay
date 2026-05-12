"use client";

import { useState } from "react";

const LangSwitch = () => {
  const [lang, setLang] = useState<"EN" | "JP">("EN");

  return (
    <button
      onClick={() => setLang(lang === "EN" ? "JP" : "EN")}
      className="relative flex flex-col items-center w-10 h-10 rounded-full cursor-pointer"
      aria-label="Toggle Language"
    >
      {/* EN */}
      <span
        className={`absolute font-bold text-sm  ${
          lang === "EN" ? "show" : "hide-up"
        }`}
      >
        EN
      </span>

      {/* JP */}
      <span
        className={`absolute font-bold text-sm  ${
          lang === "JP" ? "show" : "hide-down"
        }`}
      >
        JP
      </span>
    </button>
  );
};

export default LangSwitch;

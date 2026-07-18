"use client";

import { createContext, useContext } from "react";

const LocaleContext = createContext({
  locale: "lt",
  t: (key) => key,
});

export function useLocale() {
  return useContext(LocaleContext);
}

export function useT() {
  const { t } = useContext(LocaleContext);
  return t;
}

export default function LocaleProvider({ locale, messages, children }) {
  const t = (key) => {
    const keys = key.split(".");
    let value = messages;
    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }
    return typeof value === "string" || Array.isArray(value) ? value : key;
  };

  return (
    <LocaleContext.Provider value={{ locale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

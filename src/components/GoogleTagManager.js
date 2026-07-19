"use client";

import { useEffect } from "react";

const GTM_ID = "GTM-M2BSVPNP";

/**
 * Injects Google Tag Manager scripts only when cookie consent is "accepted".
 * Listens for cookie-consent-changed custom events from CookieBanner.
 */
export default function GoogleTagManager() {
  useEffect(() => {
    // Check initial consent state
    const consent = localStorage.getItem("cookie-consent");
    if (consent === "accepted") {
      injectGTM();
    }

    // Listen for consent changes from CookieBanner
    const handler = () => {
      const current = localStorage.getItem("cookie-consent");
      if (current === "accepted") {
        injectGTM();
      } else {
        removeGTM();
      }
    };

    window.addEventListener("cookie-consent-changed", handler);
    return () => window.removeEventListener("cookie-consent-changed", handler);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}

let gtmInjected = false;

function injectGTM() {
  if (gtmInjected) return;
  gtmInjected = true;

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });

  // Inject <script> in <head>
  const script = document.createElement("script");
  script.async = true;
  script.id = "gtm-script";
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(script);

  // Inject <noscript> iframe fallback right after <body> opens
  const noscript = document.createElement("noscript");
  noscript.id = "gtm-noscript";
  const iframe = document.createElement("iframe");
  iframe.src = `https://www.googletagmanager.com/ns.html?id=${GTM_ID}`;
  iframe.height = "0";
  iframe.width = "0";
  iframe.style.display = "none";
  iframe.style.visibility = "hidden";
  noscript.appendChild(iframe);

  // Insert noscript as first child of body
  document.body.insertBefore(noscript, document.body.firstChild);
}

function removeGTM() {
  if (!gtmInjected) return;
  gtmInjected = false;

  // Remove injected script
  const script = document.getElementById("gtm-script");
  if (script) script.remove();

  // Remove noscript iframe
  const noscript = document.getElementById("gtm-noscript");
  if (noscript) noscript.remove();

  // Clear all GTM-related dataLayer entries and reset
  window.dataLayer = [];
}

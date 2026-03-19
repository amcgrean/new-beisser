export type UtmSessionData = {
  utm_source: string;
  utm_medium: string;
  referrer: string;
  landing_page: string;
};

const SESSION_KEY = "beisser_attribution";

export const readOrCreateAttribution = (): UtmSessionData => {
  if (typeof window === "undefined") {
    return { utm_source: "", utm_medium: "", referrer: "", landing_page: "" };
  }

  const existing = window.sessionStorage.getItem(SESSION_KEY);
  if (existing) {
    try {
      return JSON.parse(existing) as UtmSessionData;
    } catch {
      window.sessionStorage.removeItem(SESSION_KEY);
    }
  }

  const params = new URLSearchParams(window.location.search);
  const payload: UtmSessionData = {
    utm_source: params.get("utm_source") ?? "",
    utm_medium: params.get("utm_medium") ?? "",
    referrer: document.referrer ?? "",
    landing_page: `${window.location.pathname}${window.location.search}`,
  };

  window.sessionStorage.setItem(SESSION_KEY, JSON.stringify(payload));
  return payload;
};

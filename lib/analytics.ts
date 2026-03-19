export type EventParams = Record<string, string | number | boolean | undefined>;

export const trackEvent = (eventName: string, params?: EventParams) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
};

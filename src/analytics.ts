// Define types for Google Analytics gtag
type GtagCommand = 'config' | 'event' | 'set' | 'get';
type GtagEventParams = {
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: unknown;
};

// Extend the global window interface
declare global {
  interface Window {
    gtag?: (
      command: GtagCommand,
      eventNameOrId: string,
      params?: GtagEventParams | Record<string, unknown>
    ) => void;
  }
}

// Function to initialize Google Analytics
export const initGA = () => {
  const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (!GA_ID) return;

  // Inject GA script
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script1);

  const script2 = document.createElement('script');
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_ID}');
  `;
  document.head.appendChild(script2);
};

// Function to track events
export const trackEvent = (category: string, action: string, label?: string) => {
  if (typeof window.gtag !== 'function') return;

  const params: GtagEventParams = {
    event_category: category,
    event_label: label,
  };

  window.gtag('event', action, params);
};

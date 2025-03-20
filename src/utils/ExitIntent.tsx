import throttle from "lodash/throttle";

interface ExitIntentOptions {
  threshold?: number;
  maxDisplays?: number;
  eventThrottle?: number;
  onExitIntent?: () => void;
  delayBeforePopup?: number; // Adding option for delay
}

export default function ExitIntent(options: ExitIntentOptions = {}) {
  const defaultOptions: Required<ExitIntentOptions> = {
    threshold: 20,
    maxDisplays: 1,
    eventThrottle: 200,
    onExitIntent: () => {},
    delayBeforePopup: 500, // Default delay set to 1000ms
  };

  return (function () {
    const config = { ...defaultOptions, ...options };
    const eventListeners = new Map<
      string,
      { eventName: string; callback: EventListener }
    >();
    let displays = 0;
    let timeoutId: NodeJS.Timeout | null = null; // Store timeout ID

    const addEvent = (eventName: string, callback: EventListener) => {
      document.addEventListener(eventName, callback, false);
      eventListeners.set(`document:${eventName}`, { eventName, callback });
    };

    const removeEvent = (key: string) => {
      const event = eventListeners.get(key);
      if (event) {
        const { eventName, callback } = event;
        document.removeEventListener(eventName, callback);
        eventListeners.delete(key);
      }
    };

    const shouldDisplay = (position: number): boolean => {
      if (position <= config.threshold && displays < config.maxDisplays) {
        displays++;
        return true;
      }
      return false;
    };

    const mouseDidMove = (event: MouseEvent) => {
      if (timeoutId) {
        clearTimeout(timeoutId); // Clear any previous timeout
      }

      timeoutId = setTimeout(() => {
        if (shouldDisplay(event.clientY)) {
          config.onExitIntent();
          if (displays >= config.maxDisplays) {
            removeEvents();
          }
        }
      }, config.delayBeforePopup); // Delay popup triggering
    };

    const removeEvents = () => {
      eventListeners.forEach((_, key) => removeEvent(key));
    };

    addEvent(
      "mousemove",
      throttle(mouseDidMove, config.eventThrottle) as unknown as EventListener
    );

    return removeEvents;
  })();
}

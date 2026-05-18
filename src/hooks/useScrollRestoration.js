import { useEffect } from "react";

// Manual scroll restoration not strictly needed alongside ScrollToTop,
// but kept here for projects that want history-based restoration.
export default function useScrollRestoration() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);
}

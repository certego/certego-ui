import React from "react";

/*
 * React hook for debounce input. 
 */
export default function useDebounceInput(inputValue, delay, setFunction) {
  const initialized = React.useRef("");
  React.useEffect(() => {
    if (initialized.current !== inputValue) {
      initialized.current = inputValue;
      const timer = setTimeout(() => {
        setFunction(inputValue);
      }, delay);
      return () => clearTimeout(timer);
    }
    return null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);
}
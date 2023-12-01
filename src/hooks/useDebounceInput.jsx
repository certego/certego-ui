import React from "react";

/*
 * React hook for debounce input. 
 */
export default function useDebounceInput(inputValue, delay, setFunction) {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setFunction(inputValue);
    }, delay);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);
}
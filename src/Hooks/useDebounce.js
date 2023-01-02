import { useState, useEffect } from "react";

export default function useDebounce(value, delay) {
  const [debouceValue, setDebouceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouceValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouceValue;
}

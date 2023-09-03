import { useState } from "react";

const useLocalStorage = (keyName:string, defaultValue:any) => {
   // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const value = window.localStorage.getItem(keyName);
      if (value) {
       // Parse stored json
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      // If error also return initialValue
      return defaultValue;
    }
  });
  
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (newValue:any) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) { // A more advanced implementation would handle the error case }
    // Save to local storage
    setStoredValue(newValue);
  };
  return [storedValue, setValue];
};
}

export default useLocalStorage;
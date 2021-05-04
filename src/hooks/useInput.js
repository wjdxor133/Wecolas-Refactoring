import { useCallback, useState } from "react";

const useInput = () => {
  const [value, setValue] = useState("");
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return [value, handler];
};

export default useInput;

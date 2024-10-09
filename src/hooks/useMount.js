import { useEffect, useState } from "react";

export const useMount = () => {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (status) return;
    setStatus(true);
  }, [status]);

  return status;
};

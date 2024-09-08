import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [checkStatus, setCheckStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {
      setCheckStatus(true);
    });

    window.addEventListener("offline", () => {
      setCheckStatus(false);
    });
  }, []);
  return checkStatus;
};

export default useOnlineStatus;

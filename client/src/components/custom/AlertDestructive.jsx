import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useEffect, useState } from "react";

const getErrorMsg = (htmlString) => {
  if (!htmlString.includes("<pre>")) return htmlString;
  // Find the position of <pre> and <br/> tags
  const startIndex = htmlString.indexOf("<pre>") + "<pre>".length;
  const endIndex = htmlString.indexOf("<br>");

  // Extract the error message between <pre> and <br/> tags and return
  return htmlString.substring(startIndex, endIndex).trim();
};

const AlertDestructive = ({ title, message = "something is wrong" }) => {
  const [errorMsg, setErrorMsg] = useState(message);

  useEffect(() => {
    setErrorMsg(getErrorMsg(message));
  }, [message]);

  return (
    <Alert variant="destructive">
      <ExclamationTriangleIcon className="h-4 w-4" />
      {title && <AlertTitle>{title}</AlertTitle>}
      <AlertDescription>{errorMsg}</AlertDescription>
    </Alert>
  );
};

export default AlertDestructive;
export { getErrorMsg };

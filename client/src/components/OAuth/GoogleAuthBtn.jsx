import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";

const GoogleAuthBtn = ({
  btnText = "continue with google",
  handleGoogleAuth,
}) => {
  return (
    <Button
      variant="outline"
      className="flex items-center gap-4 py-2"
      onClick={handleGoogleAuth}
    >
      <FcGoogle className="w-6 h-6" />
      <span>{btnText}</span>
    </Button>
  );
};

export default GoogleAuthBtn;

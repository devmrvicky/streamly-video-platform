import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "./googleAuth";
import { useToast } from "../ui/use-toast";
import api from "@/axios/api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "@/redux/features";

const GoogleAuthBtn = ({ btnText = "continue with google" }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();
  const auth = getAuth(app);
  const handleGoogleAuth = async () => {
    console.log(auth);
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const resultsFromGoogle = await signInWithPopup(auth, provider);
      const { displayName, email, photoURL } = resultsFromGoogle.user;
      const res = await api.post(
        "/users/google-auth",
        { displayName, email, photoURL },
        {
          timeout: 60000,
          timeoutErrorMessage: "sorry time out",
        }
      );
      console.log(res);
      toast({
        title: res.successText,
        description: res.data.message,
      });
      dispatch(loginSuccess(res.data));
      navigate("/");
    } catch (error) {
      toast({
        variant: "destructive",
        description: error.message,
      });
    }
  };
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

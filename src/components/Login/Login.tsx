import { useState } from "react";
import LoginSignupModal from "./LoginSignupModal";
import LogoImg from "../../assets/Logo.png";
import "./Login.css";

type LoginPropsType = {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

const Login = ({ isLogin, setIsLogin }: LoginPropsType) => {
  // States //
  const [open, setOpen] = useState<boolean>(true);
  const handleClose: () => void = () => setOpen(false);

  return (
    <div className="login">
      <img className="logo-img" src={LogoImg} alt="logo-img" />
      <LoginSignupModal
        open={open}
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        handleClose={handleClose}
      />
    </div>
  );
};

export default Login;

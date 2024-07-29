import {
  Box,
  InputAdornment,
  IconButton,
  Modal,
  Typography,
  Input,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginButton from "../../assets/Login Button.png";
import RegisterButton from "../../assets/Register Button.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 463,
  bgcolor: "#27292D",
  boxShadow: 24,
  p: 3,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "8px",
};

type LoginSignupModalPropsType = {
  open: boolean;
  handleClose: () => void;
  isLogin: boolean;
  register?: boolean;
  setRegister?: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLogin?: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginSignupModal = ({
  open,
  handleClose,
  isLogin,
  register = false,
  setRegister,
  setIsLogin,
}: LoginSignupModalPropsType) => {
    
  // States //
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();

  // Basic Function //
  const handleClickShowPassword: () => void = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Modal
      open={open}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        {!isLogin && (
          <IconButton
            sx={{
              alignSelf: "flex-end",
              color: "#C5C7CA",
              background: "#131319",
            }}
            onClick={handleClose}
          >
            <CloseIcon sx={{ fontSize: "14px" }} />
          </IconButton>
        )}
        <Typography align="center" sx={{ fontSize: "14px", color: "#6B6C70" }}>
          {register ? "SIGN UP" : "WELCOME BACK"}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{ fontSize: "18px" }}
        >
          {register ? "Create an account to continue" : "Log into your account"}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: ".5rem",
            width: "100%",
            paddingTop: "3rem",
            paddingBottom: "1rem",
          }}
        >
          <Typography
            sx={{ fontSize: "14px", color: "#C5C7CA", textAlign: "start" }}
          >
            {register ? "Email" : "Email or Username"}
          </Typography>
          <Input
            fullWidth
            placeholder={
              register ? "Enter your email" : "Enter your email and username"
            }
            sx={{
              fontSize: "14px",
              color: "#C5C7CA",
              border: "1px solid #ffffff80",
              padding: ".3rem .5rem",
              borderRadius: "3px",
            }}
          />
        </Box>

        {register && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: ".5rem",
              width: "100%",
              paddingBottom: "1rem",
            }}
          >
            <Typography
              sx={{ fontSize: "14px", color: "#C5C7CA", textAlign: "start" }}
            >
              Username
            </Typography>
            <Input
              fullWidth
              placeholder="Choose a preferred username"
              sx={{
                fontSize: "14px",
                color: "#C5C7CA",
                border: "1px solid #ffffff80",
                padding: ".3rem .5rem",
                borderRadius: "3px",
              }}
            />
          </Box>
        )}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: ".5rem",
            width: "100%",
            paddingBottom: "2rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "14px", color: "#C5C7CA" }}>
              Password
            </Typography>
            {!register && (
              <Typography sx={{ fontSize: "12px", color: "#C5C7CA" }}>
                Forget Password ?
              </Typography>
            )}
          </Box>

          <Input
            fullWidth
            sx={{
              fontSize: "14px",
              border: "1px solid #ffffff80",
              color: "#C5C7CA",
              width: "100%",
              padding: ".3rem .5rem",
              borderRadius: "3px",
            }}
            type={showPassword ? "text" : "password"}
            placeholder={
              register ? "Choose a strong password" : "Enter your password"
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </Box>
        {register ? (
          <img
            src={RegisterButton}
            alt="login-button"
            onClick={() => {
              handleClose();
            }}
          />
        ) : (
          <img
            src={LoginButton}
            alt="login-button"
            onClick={() => {
              if (!isLogin) handleClose();
              else {
                setIsLogin && setIsLogin(false);
                navigate("/");
              }
            }}
          />
        )}
        <button
          style={{
            color: "#6B6C70",
            fontSize: "14px",
            width: "fit-content",
            alignSelf: "start",
            background: "transparent",
            border: "none",
            outline: "none",
            marginTop: "1rem",
          }}
          onClick={() => setRegister && setRegister((prev: any) => !prev)}
        >
          {register ? "Already have an account ? " : "Not registered yet ? "}
          <span style={{ color: "white" }}>
            {register ? "Login →" : "Register →"}
          </span>
        </button>
      </Box>
    </Modal>
  );
};

export default LoginSignupModal;

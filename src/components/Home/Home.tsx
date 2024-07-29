import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginSignupModal from "../Login/LoginSignupModal";
import PostButton from "../../assets/Group 2.png";
import ThoughtImage from "../../assets/Text.png";
import Posts from "./Posts";
import "./Home.css";

const Home = ({ isLogin }: { isLogin: boolean }) => {
  // States //
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const [register, setRegister] = useState<boolean>(true);

  // UseEffect //
  useEffect(() => {
    if (isLogin) {
      navigate("/login");
    }
  }, [isLogin]);


  // Basic Functions //
  const handleClick:() => void = () => {
    setRegister(true);
    setOpen(true);
  };
  const handleClose:() => void = () => setOpen(false);

  return (
    <div className="home">
      <div className="main-section">
        <div className="top-section">
          <h2>Hello Jane</h2>
          <p style={{ color: "#7F8084" }}>
            How are you doing today? Would you like to share something with the
            community 🤗
          </p>
        </div>
        <div className="bottom-section">
          <div className="create-post" onClick={handleClick}>
            <div className="inner-one">Create Post</div>
            <div className="inner-two">
              <img
                className="thought-img"
                src={ThoughtImage}
                alt="text-image"
              />{" "}
              <span style={{ color: "#7F8084" }}>
                How are you feeling today?
              </span>
            </div>

            <img className="inner-three" src={PostButton} alt="post-button" />
          </div>
          <Posts handleClick={handleClick} />
        </div>
      </div>
      <LoginSignupModal
        open={open}
        register={register}
        isLogin={isLogin}
        setRegister={setRegister}
        handleClose={handleClose}
      />
    </div>
  );
};

export default Home;

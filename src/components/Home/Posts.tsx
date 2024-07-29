import MsgIcon from "../../assets/Chat Bubble.png";
import { PostData } from "../../constants/PostData";
import "./Posts.css";

type PostType = {
  name: string;
  image: string;
  text: string;
  textImg: string;
  comment: string;
  time: string;
};

type PostsPropsType = {
  handleClick: () => void;
};

const Posts = ({ handleClick }: PostsPropsType) => {
  return (
    <>
      {PostData.map((post: PostType) => (
        <div className="post-card" onClick={handleClick} key={post.name}>
          <div className="img-name-section">
            <div className="left-part">
              <img className="post-img" src={post.image} alt="imgg" />
              <div className="name-time">
                <span className="name-text">{post.name}</span>
                <span className="time-text">{post.time}</span>
              </div>
            </div>
            <span>...</span>
          </div>
          <div className="post-text-section">
            <img className="text-img" src={post.textImg} alt="text-image" />{" "}
            <span style={{ color: "#7F8084" }}>{post.text}</span>
          </div>
          <div className="comment-section">
            <img className="msg-icon" src={MsgIcon} alt="msg" />
            {post.comment}
          </div>
        </div>
      ))}
    </>
  );
};

export default Posts;

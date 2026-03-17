import React, { useState } from "react";

const Post = ({ post }) => {

  const [liked, setLiked] = useState(post?.isLiked || false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="post">

      {/* USER */}
      <div className="user">
        <div className="img-wrapper">
          <img
            src={post?.user?.profileImage || "https://i.pravatar.cc/150?img=3"}
            alt="profile"
          />
        </div>
        <p>{post?.user?.username}</p>
      </div>

      {/* POST IMAGE */}
      <img src={post?.imgUrl} alt="post" />

      {/* ICONS */}
      <div className="icons">
        <div className="left">

          <button onClick={handleLike}>
            <svg
              className={liked ? "like" : ""}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={liked ? "red" : "none"}
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 21s-6.716-4.438-9.193-7.06C1.18 12.06 1 10.574 1 9.5 1 6.462 3.462 4 6.5 4 8.24 4 9.91 4.81 11 6.09 12.09 4.81 13.76 4 15.5 4 18.538 4 21 6.462 21 9.5c0 1.074-.18 2.56-1.807 4.44C18.716 16.562 12 21 12 21z"/>
            </svg>
          </button>

          <button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/>
            </svg>
          </button>

          <button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 2L11 13"></path>
              <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
            </svg>
          </button>

        </div>

        <div className="right">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
            </svg>
          </button>
        </div>

      </div>

      {/* CAPTION */}
      <div className="bottom">
        <p className="caption">{post?.caption}</p>
      </div>

    </div>
  );
};

export default Post;
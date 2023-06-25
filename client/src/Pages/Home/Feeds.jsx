import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Feeds.css";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import rightarrow from '../../assets/right-arrow.png'
import a from '../../Images/a.jpeg'
import b from '../../Images/b.jpeg'
import c from '../../Images/c.jpeg'
import d from '../../Images/d.jpeg'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faComment,
  faShare
} from "@fortawesome/free-solid-svg-icons";

const preLoadedImages = [
  a,
  b,
  c,
  d,

];

const Feeds = () => {
  const User = useSelector((state) => state.currentUserReducer);
  const user = useSelector((state) => state.authReducer.data);
  const navigate = useNavigate();

  const checkAuth = () => {
    if (!user) {
      alert("Login or signup to Post a feed");
      navigate("/Auth");
    }
  };

  const [postText, setPostText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [feedData, setFeedData] = useState(preLoadedImages.map((image, index) => ({
    id: index,
    image: image,
    user: "John Deo",
    timestamp: "a week ago",

  })));

  const handlePost = () => {
    if (postText.trim() !== "" || selectedImage) {
      if (!user) {
        alert("Login or signup to Post a feed");
        navigate("/Auth");
        return;
      }

      const newFeedItem = {
        id: feedData.length + 1,
        image: selectedImage,
        user: User.result.name,
        timestamp: <p>Posted {moment().fromNow()}</p>,
        post: postText
      };
      setFeedData([newFeedItem, ...feedData]);
      setPostText("");
      setSelectedImage(null);
    }
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const uploadedImage = event.target.result;
      setSelectedImage(uploadedImage);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="feeds-container">
      <div className="post-container">
        <div className="text-box-container">
          <input
            type="text"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            placeholder="Write something..."
          />
        </div>
        <div className="btns">
          <input
            type="file"
            accept="image/*, video/*"
            id="file-input"
            className="file-input"
            onChange={handleUpload}
          />
          <label htmlFor="file-input" className="file-input-label">Choose File & click
            Post <img
              src={rightarrow}
              alt=""
              width="18"
              className="right-arrow"

            /></label>
          <button
            onClick={handlePost}
            className="post-button"
            disabled={!postText.trim() && !selectedImage}
          >
            Post
          </button>
        </div>
      </div>

      {feedData.map((feed) => (
        <div className="feed-item" key={feed.id}>
          {feed.image && <img src={feed.image} alt="Feed" />}
          <div className="feed-info">
            <div className="user">{feed.user}</div>
            <div className="timestamp">{feed.timestamp}</div>
            {feed.post && <div className="post">{feed.post}</div>}
            <div className="actions">
              <button>
                <FontAwesomeIcon icon={faThumbsUp} />
              </button>
              <button>
                <FontAwesomeIcon icon={faThumbsDown} />
              </button>
              <button>
                <FontAwesomeIcon icon={faComment} />
              </button>
              <button>
                <FontAwesomeIcon icon={faShare} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feeds;

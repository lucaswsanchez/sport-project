import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "../../styles/CommentSection.css";
import { BiUserCircle } from "react-icons/bi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CommentSection = ({ region }) => {
  const [user] = useState(firebase.auth().currentUser);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const commentsRef = firebase.database().ref(`regiones/${region}/comments`);
    commentsRef.on("value", (snapshot) => {
      const commentsData = snapshot.val();
      if (commentsData) {
        const commentsArray = Object.entries(commentsData).map(
          ([commentId, comment]) => ({
            id: commentId,
            ...comment,
          })
        );
        setComments(commentsArray);
      } else {
        setComments([]);
      }
    });

    return () => {
      commentsRef.off();
    };
  }, [region]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("Create an account to add a comment.", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    if (commentText.trim() === "") {
      toast.error("The comment field is empty.", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    try {
      const commentsRef = firebase
        .database()
        .ref(`regiones/${region}/comments`);
      await commentsRef.push({
        userId: user.uid,
        email: user.email,
        comment: commentText,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
      });

      setCommentText("");
    } catch (error) {
      toast.error("Error while adding a comment.", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const handleCommentDelete = async (commentId) => {
    try {
      const commentRef = firebase
        .database()
        .ref(`regiones/${region}/comments/${commentId}`);
      await commentRef.remove();
    } catch (error) {
      console.error("Error al eliminar el comentario:", error);
    }
  };

  return (
    <div className="comments-container">
      <h2>Comments</h2>
      <form onSubmit={handleCommentSubmit}>
        <textarea
          placeholder="Write your comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      <div className="comments">
        {comments.map((comment) => (
          <div className="comment" key={comment.id}>
            <p className="comment-user">
              <BiUserCircle size={22} />
              {comment.email}
            </p>
            <p className="comment-text">{comment.comment}</p>
            {user && user.uid === comment.userId && (
              <button onClick={() => handleCommentDelete(comment.id)}>
                Delete
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;

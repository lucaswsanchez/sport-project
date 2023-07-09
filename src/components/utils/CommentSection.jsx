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
      toast.error("Crea una cuenta para agregar un comentario.", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
      console.log("Usuario no autenticado. No se puede agregar un comentario.");
      return;
    }

    if (commentText.trim() === "") {
      toast.error("El campo del comentario esta vacio.", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
      console.log("El campo del comentario está vacío.");
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
      console.log("Comentario agregado exitosamente.");
    } catch (error) {
      toast.error("Error al agregar comentario", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
      console.error("Error al agregar el comentario:", error);
    }
  };

  const handleCommentDelete = async (commentId) => {
    try {
      const commentRef = firebase
        .database()
        .ref(`regiones/${region}/comments/${commentId}`);
      await commentRef.remove();
      console.log("Comentario eliminado exitosamente.");
    } catch (error) {
      console.error("Error al eliminar el comentario:", error);
    }
  };

  return (
    <div className="comments-container">
      <h2>Comentarios</h2>
      <form onSubmit={handleCommentSubmit}>
        <textarea
          placeholder="Escribe tu comentario..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button type="submit">Enviar</button>
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
                Eliminar
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;

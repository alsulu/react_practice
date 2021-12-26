import React, { useEffect, useState } from 'react';
import styles from './App.module.scss';
import CommentForm from './components/commentForm'
import Comment from './components/addedComment';

function App() {
  const localComments = localStorage.getItem('comments');
  const localCommentsArray = localComments.split(';');
  const [newComment, setNewComment] = useState("");
  const [addedComment, setAddedComment] = useState({storage: []});

  const handleChange = (event) => {
    setNewComment(event.target.value)
  }

  const handleClickAdd = () => {
    if (newComment) { 
      const comments = localComments ? localCommentsArray : addedComment.storage;
      comments.push(newComment);
      setAddedComment({storage: comments});
      setNewComment("");
      localStorage.setItem('comments', comments.join(';'));
    }
  }

  const handleClickDelete = (i) => {
    localCommentsArray.splice(i, 1);
    localStorage.setItem('comments', localCommentsArray.join(';'));
    setAddedComment({storage: localCommentsArray});
  }

  return (
    <div className={styles.App}>
      <div className={styles.comments}>
        <h2>Все комментарии</h2>
        {localComments && 
          localCommentsArray.map((comment, i) => <Comment key={comment+i} text={comment} onClick={() => handleClickDelete(i)} isNew={i===localCommentsArray.length-1} />).reverse()}
      </div>
      <CommentForm onClick={handleClickAdd} onChange={handleChange} value={newComment}/>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Post from "./Post";
import "../css/PostForm.css";

export function PostForm ({ onSubmitForm, onClose} : {onSubmitForm: (post: Post) => void; onClose: () => void}) {
    const [title, setTitle] = useState<string>("");
    const [thought, setThought] = useState<string>("");
    

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmitForm({ title, thought });
  
      };
    return (
        <div className="PostForm" onSubmit={handleSubmit}>
           <button className="close-button" onClick={onClose}><b>X</b></button>
    
           <h2>New Thought</h2>
            <label>Title</label>
            <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title"></input>
            <label>Thought</label>
            <input onChange={(e) => setThought(e.target.value)} id="thought" placeholder="What are your thoughts?"></input>
            <button className='post-button' type="submit">Add Post</button> 
        </div>
    )
}
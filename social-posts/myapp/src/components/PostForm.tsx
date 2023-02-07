import React, { useState } from "react";
import Post from "./Post";
import { ButtonToggle } from 'reactstrap';
import "../css/PostForm.css";

export interface PostFormProps{
    addPost: Function;
}

export function PostForm (props: PostFormProps){
    const [title, setTitle] = useState<string>("");
    const [thought, setThought] = useState<string>("");
    

function onSubmitForm(e:React.FormEvent<HTMLElement>) {
    e.preventDefault();
    props.addPost({title: title, thought: thought})

}
    const newPost: Post = {
        title: title,
        thought: thought,
    };

    return (
        <div className="PostForm">
            <div className="form">
               <form onSubmit={onSubmitForm}>
                <label>Title</label>
                <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title"></input>
                <label>Thought</label>
                <input onChange={(e) => setThought(e.target.value)} id="thought" placeholder="What are your thoughts?"></input>
                <button className='post-button' type="submit" onSubmit={onSubmitForm}>Add Post</button>
            </form>  
            </div>   
        </div>
    )
}
import * as React from 'react';
import { useState } from "react";
import Post from "./Post";
import { PostInList } from "./PostInList";
import "../css/SocialPosts.css";
import { PostForm } from "./PostForm";
import { Modal, ModalBody } from 'reactstrap';

function SocialPosts(){
    
    const [posts, setPost] = useState<Post[]>([
        {title: "Grand Circus", thought: "Grand Circus is cool."},
        {title: "React", thought: "React gives me power!"},
        {title: "Beatrice", thought: "My friend Beatrice has mad skills. She made the top 10! I'm just so proud of her!"}
    ]);
    
    function addPost(post:Post){
      setPost([post, ...posts]);
    }
    
    function deletePost(post: Post) {
        
      }

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    function submitCloseModal(){
      
    }
return (
<div className='container'>
  <div className="new-thought">
    <h1>My Thoughts</h1>
    <button onClick={toggle}>New Thought</button>
    <Modal isOpen={modal} toggle={toggle}>
      <ModalBody>
      <>
      <div><i onClick={toggle} className="fa-sharp fa-solid fa-circle-xmark"></i></div>
      <PostForm addPost={addPost} />
      </>
      </ModalBody>
    </Modal>
  </div>
<div className="post-container">
{posts.map((post) => (<PostInList key={post.title} post={post} />))}
</div>
</div>
)
}

export default SocialPosts;
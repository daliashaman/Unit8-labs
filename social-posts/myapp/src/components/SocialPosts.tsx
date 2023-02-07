import { useState } from "react";
import Post from "./Post";
import { PostInList } from "./PostInList";
import "../css/SocialPosts.css";
import { PostForm } from "./PostForm";

function SocialPosts(){
    
    const [posts, setPosts] = useState<Post[]>([
        {title: "Grand Circus", thought: "Grand Circus is cool."},
        {title: "React", thought: "React gives me power!"},
        {title: "Beatrice", thought: "My friend Beatrice has mad skills. She made the top 10! I'm just so proud of her!"}
    ]);
    const [formOpen, setFormOpen] = useState(false);

  const handleSubmit = (newPost: Post) => {
    setPosts([...posts, newPost]);
    setFormOpen(false);
  };
  
  const handleDelete = (index: number) => {
    setPosts(posts.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1 className="myThoughts">My Thoughts</h1>
      <div>
      <div className="thought-container">
      <button className="new-thought" onClick={(e) => setFormOpen(true)}>New Thought</button>
      </div>
        {formOpen && (
          <div className="form"><PostForm onSubmitForm={handleSubmit} onClose={() => setFormOpen(false)}/>
          </div>
        )};
        {posts.map((post, index) => (<PostInList key={index} post={post} onDelete={() => handleDelete(index)}/>
        ))};
      </div>
    </div>
  );
}

export default SocialPosts;
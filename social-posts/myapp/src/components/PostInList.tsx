import Post from "./Post";
import "../css/PostInList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export interface PostInListProps {
post: Post;
onDelete: () => void;
}

export function PostInList ({post, onDelete}: {post: Post, onDelete: () => void}){

    return(
        <div className="PostInList">
            <div className="post-main">
                <h3>{post.title}</h3>
                <p>{post.thought}</p>
            </div>
            <div className="post-delete" onClick={onDelete}>
            <FontAwesomeIcon icon={faTrash} className="icon" /></div>
        </div>
    );
}

import Post from "./Post";
import "../css/PostInList.css";

export interface PostInListProps {
post: Post;
}

export function PostInList (props: PostInListProps){

    function onDelete(){

    };

    return(
        <div className="PostInList">
            <div className="post-main">
                <h3>{props.post.title}</h3>
                <p>{props.post.thought}</p>
            </div>
            <div className="post-delete" onClick={onDelete}><i className="fa-solid fa-trash"></i></div>
        </div>
    );
}

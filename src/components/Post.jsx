import { useState } from "react";

const Post = ({ post }) => {
    const [isShow, setIsShow] = useState(false);
    const handleShowHide = (e) => {
        e.preventDefault()
        setIsShow(prev => !prev)
    };
    return (
        <div id={post.id} className="m-auto card w-75 mb-3">
            <div className="card-body">
                <h5 className="card-title">
                    <span>{post.id}</span>. {post.title}
                </h5>
                <a
                    onClick={(e) => handleShowHide(e)}
                    href="/!"
                    className=" btn btn-outline-info"
                >
                    Description
                </a>
                {isShow && <p className="card-text">{post.body}</p>}
            </div>
        </div>
    );
}

export default Post;
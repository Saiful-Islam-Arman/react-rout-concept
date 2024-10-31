import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;
    const navigate = useNavigate();
    const handlePost = () => {
        navigate(`/posts/${id}`);
    }

    const postStyle = {
        border: '2px solid green',
        borderRadius: '20px',
        margin: '10px',
        padding: '20px',
    }
    return (
        <div style={postStyle}>
            <h3>Post id: {post.id}</h3>
            <p>Post Title: {post.title}</p>
            <Link to={`/posts/${id}`}>Show Post </Link>
            <br />
            <button onClick={handlePost}>Show Post</button>
        </div>
    );
};

export default Post;
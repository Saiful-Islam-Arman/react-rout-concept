import { useLoaderData, useNavigate } from "react-router-dom";

const ShowPost = () => {
    const posts = useLoaderData();
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }

    const showPostStyle = {
        border: '2px solid green',
        borderRadius: '20px',
        width: '600px',
        padding: '20px',
        marginX: 'auto',
        marginTop: '60px',
        marginBottom: '60px'
    }
    return (
        <div style={showPostStyle}>
            <h2>Post About: {posts.id}</h2>
            <h3>Post Title: {posts.title}</h3>
            <p><b><u>Post:</u></b> {posts.body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default ShowPost;
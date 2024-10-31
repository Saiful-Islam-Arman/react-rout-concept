import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id, name, email, phone} = user;
    const userStyle = {
        border: '2px solid green',
        borderRadius: '20px',
        margin: '10px',
        padding: '20px', 
    }
    return (
        <div style={userStyle}>
            <h3>User Name: {name}</h3>
            <p>Email Address: {email}</p>
            <p>User Phone: {phone}</p>
            <Link to={`/user/${id}`}>Show User Details</Link>
        </div>
    );
};

export default User;
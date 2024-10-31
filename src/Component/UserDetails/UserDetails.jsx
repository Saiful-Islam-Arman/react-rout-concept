import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }
    const {name, website} = user;
    return (
        <div>
            <h2>User Name: {name}</h2>
            <p>Visit to : {website}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default UserDetails;
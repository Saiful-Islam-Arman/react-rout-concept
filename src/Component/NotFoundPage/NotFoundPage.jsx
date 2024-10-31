import { useNavigate, useRouteError } from "react-router-dom";

const NotFoundPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    const handleGoHome = () => {
        navigate(-1);
    }

    return (
        <div>
            <h2>Oops!!!</h2>
            <p>Sorry, an unexpacted error has occurred</p>
            <p>{error.statusTest || error.message}</p>
            <button onClick={handleGoHome}>Go Back</button>
        </div>
    );
};

export default NotFoundPage;
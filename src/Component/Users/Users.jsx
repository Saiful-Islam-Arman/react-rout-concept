import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import "./Users.css"

const Users = () => {
    const data = useLoaderData();
    return (
        <div>
            <div className="userContent">
                <h2>Our Users: {JSON.stringify(data.length)}</h2>
                <p>Our users so much polite</p>
                <p>And they are very expert</p>
            </div>
          <div className="users">
            {
                data.map( user => <User key={user.id} user={user}></User>)
            }
          </div>
        </div>
    );
};

export default Users;
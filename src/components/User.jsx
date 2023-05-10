import { Link, useLoaderData } from "react-router-dom";

const User = () => {
    const userData = useLoaderData();
    console.log(userData);
    return (
        <div>
            <h1>This is details page</h1>
            <Link to={'/users'}>Users</Link>
            <p>{userData.name}</p>
            <p>{userData.email}</p>
        </div>
    );
};

export default User;
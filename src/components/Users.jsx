import { Link, useLoaderData } from "react-router-dom";


const Users = () => {

    const loadedData = useLoaderData();
    console.log(loadedData);
    const deleteUser = id => {
        if (id) {
            alert('deleted successful')

            fetch(`http://localhost:5000/users/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }


    }
    return (
        <div>
            <Link to={'/'}>Home</Link>
            <div>
                {
                    loadedData.map(data => <p key={data._id}>name:{data.name} <br></br> email:{data.email}
                        <button onClick={() => deleteUser(data._id)}>X</button>
                       <Link to={`/user/${data._id}`}><button>Details</button></Link>
                    </p>

                    )
                }
            </div>
        </div>
    );
};

export default Users;
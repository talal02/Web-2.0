import React, { useEffect, useState } from "react";

const App = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/')
        .then(res => res.json())
        .then(allUsers => setUsers(allUsers))
        .catch(err => console.log(err));
    }, []);

    return (
        <main className="container">
            <section className="row justify-content-center mt-5">
                <h1 className="col-12 text-center">
                    {users.map(user => {
                        return (
                            <div className="col-md-6" key={`user-${user.id}`}>
                                <div className="card-body">
                                    <h4 className="card-title">
                                        {user.name}
                                    </h4>
                                    <p className="card-subtitle text-muted">{user.username}</p>
                                    <p className="card-text">{user.email}</p>
                                </div>
                            </div>
                        );
                    })}
                </h1>
            </section>
        </main>    
    );
};

export default App;

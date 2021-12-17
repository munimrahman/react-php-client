import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const Home = () => {
    const [users, setUsers] = useState()
    let [userLength, setUserLength] = useState(null);
    const [newData, setNewData] = useState({});
    useEffect(async () => {
        fetch('http://localhost/react-php-crud/all-users.php')
            .then(res => res.json())
            .then(data => setUsers(data.users))
    }, [])

    const handleDelete = id => {
        let userDeleted = users.filter((user) => {
            return user.id !== id;
        });

        fetch("http://localhost/react-php-crud/delete-user.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: id }),
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                if (data.success) {
                    setUsers(userDeleted);
                    if (users.length === 1) {
                        setUserLength(0);
                    }
                } else {
                    alert(data.msg);
                }
            })
            .catch((err) => {
                console.log(err);
            });

    }


    return (
        <div className='w-50 mx-auto mt-2'>
            <h1>All Contacts</h1>
            <hr />
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th className='text-center' scope="col">#</th>
                        <th className='text-center' scope="col">Name</th>
                        <th className='text-center' scope="col">Email</th>
                        <th className='text-center' scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map((user, i) => <tr key={user.id}>
                            <th className='text-center' scope="row">{i + 1}</th>
                            <td className='text-center'>{user.user_name}</td>
                            <td className='text-center'>{user.user_email}</td>
                            <td className='text-center'>
                                <Link to={`/edit-contact/${user.id}`}>
                                    <button className='btn btn-success py-0 shadow-none me-2'>Edit</button>
                                </Link>

                                <button onClick={() => handleDelete(user.id)} className='btn btn-danger py-0 shadow-none'>Delete</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Home;
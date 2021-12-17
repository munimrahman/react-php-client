import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditContact = () => {
    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        fetch("http://localhost/react-php-crud/edit-user.php")
            .then(res => res.json())
            .then(data => console.log(data))
    }, [id])
    // const updateUser = (userData) => {
    //     fetch("http://localhost/react-php-crud/update-user.php", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(userData),
    //     })
    //         .then((res) => {
    //             return res.json();
    //         })
    //         .then((data) => {
    //             if (data.success) {
    //                 users = users.map((user) => {
    //                     if (user.id === userData.id) {
    //                         user.isEditing = false;
    //                         user.user_name = userData.user_name;
    //                         user.user_email = userData.user_email;
    //                         return user;
    //                     }
    //                     return user;
    //                 });
    //                 setUsers(users);
    //             } else {
    //                 alert(data.msg);
    //             }
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };

    return (
        <div>
            <div className='w-50 mx-auto mt-2'>
                <h1>Edit Contact</h1>
                <hr />
                <form className='w-50 mx-auto' >
                    <label htmlFor="" className='mb-2'>Name</label>
                    <input
                        className='form-control shadow-none mb-2'
                        type="text"
                        name="name"
                        id=""
                    // value={userInfo.name}
                    // onChange={handleNameChange}
                    />
                    <label htmlFor="" className='mb-2'>Mobile Number</label>
                    <input
                        className='form-control shadow-none'
                        type="number"
                        name="number"
                        id=""
                    // value={userInfo.mobile}
                    // onChange={handleMobileChange}
                    />
                    <input type="submit" className='btn btn-primary shadow-none mt-3' value="Update" />
                </form>
            </div>
        </div>
    );
};

export default EditContact;
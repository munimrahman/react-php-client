import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const AddContact = () => {
    const [userInfo, setUserInfo] = useState({})
    let navigate = useNavigate();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUserData = { ...userInfo }
        newUserData[field] = value;
        setUserInfo(newUserData);
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post("http://localhost/react-php-crud/add-user.php", userInfo)
            .then(result => {
                if (result.status === 200) {
                    swal({
                        title: "Contact Added Successfully!",
                        icon: "success",
                        button: "OK!",
                    });
                    navigate("/");
                }
            })
    }

    return (
        <div>
            <div className='w-50 mx-auto mt-2'>
                <h1>Add New Contact</h1>
                <hr />
                <form className='w-50 mx-auto' onSubmit={handleSubmit}>
                    <label htmlFor="" className='mb-2'>Name</label>
                    <input onBlur={handleOnBlur} className='form-control shadow-none mb-2' type="text" name="user_name" id="" />
                    <label htmlFor="" className='mb-2'>Mobile Number</label>
                    <input onBlur={handleOnBlur} className='form-control shadow-none' type="email" name="user_email" id="" />
                    <input type="submit" className='btn btn-primary shadow-none mt-3' value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default AddContact;
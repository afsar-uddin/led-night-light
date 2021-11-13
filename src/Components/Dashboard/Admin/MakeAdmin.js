import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdmin = e => {
        e.preventDefault();
        const user = { email };
        fetch('https://floating-inlet-09206.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Role successfully added');
                    e.target.reset();
                }
            })
    }

    return (
        <>
            <div className="page-title">
                <h2>Make an admin using email</h2>
            </div>
            <div>
                <form className="led-form" onSubmit={handleAdmin}>
                    <input type="email" onBlur={handleOnBlur} name="email" placeholder="Make admin" required />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    );
};

export default MakeAdmin;
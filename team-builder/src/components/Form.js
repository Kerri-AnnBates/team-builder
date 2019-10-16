import React from 'react';

function Form() {
    return (
        <div className='form'>
            <form>
                <label htmlFor="fullName">Member Name</label>
                <input type="text" placeholder="Member Name" name="fullName" id="fullName" />
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Member Email" name="email" id="email" />
                <label htmlFor="role">Role</label>
                <input type="role" placeholder="Member Role" name="role" id="role" />
            </form>
        </div>
    );
}

export default Form;
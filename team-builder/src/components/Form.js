import React, { useState } from 'react';

function Form(props) {
    const {addMembers} = props;

    const [member, setMember] = useState({
        name: '',
        role: ''
    });

    const onInputChange = (e) => {
        setMember({
            ...member,
            [e.target.name]: e.target.value
        });
    }

    const submitMember = (e) => {
        e.preventDefault();
        console.log('member added')
        addMembers(member);
        setMember({name: '', role: ''});
    }

    return (
        <div className='form'>
            <form>
                <label htmlFor="fullName">Member Name</label>
                <input onChange={onInputChange} type="text" placeholder="Member Name" name="fullName" id="fullName" />
                <label htmlFor="email">Email</label>
                <input onChange={onInputChange} type="email" placeholder="Member Email" name="email" id="email" />
                <label htmlFor="role">Role</label>
                <input onChange={onInputChange} type="role" placeholder="Member Role" name="role" id="role" />
                <button type='submit' onClick={submitMember}>Add Member</button>
            </form>
        </div>
    );
}

export default Form;
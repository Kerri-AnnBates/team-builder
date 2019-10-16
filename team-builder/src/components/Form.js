import React, { useState } from 'react';

function Form(props) {
    const {addMembers} = props;

    const [member, setMember] = useState({
        name: '',
        role: '',
        email: ''
    });

    const onInputChange = (e) => {
        setMember({
            ...member,
            [e.target.name]: e.target.value
        });
    }

    const submitMember = (e) => {
        e.preventDefault();
        addMembers(member);
        setMember({name: "", role: "", email: ""});
    }

    return (
        <div className='form'>
            <form>
                <label htmlFor="name">Member Name</label>
                <input onChange={onInputChange} type="text" placeholder="Member Name" name="name" id="name" value={member.name} />
                <label htmlFor="email">Email</label>
                <input onChange={onInputChange} type="email" placeholder="Member Email" name="email" id="email" value={member.email} />
                <label htmlFor="role">Role</label>
                <input onChange={onInputChange} type="role" placeholder="Member Role" name="role" id="role" value={member.role} />
                <button type='submit' onClick={submitMember}>Add Member</button>
            </form>
        </div>
    );
}

export default Form;
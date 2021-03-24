import React, {useState} from 'react';
import addNewMember from '../index';

const MembersForm = props => {

    const [member, setMember] = useState({title: props.title, body: ''})

    const handleChanges = event => {
        console.log('change handled!', event.target.value)
        setMember({title: event.target.value});
        const newStateObj = {...member, [event.target.name] : event.target.value}
        console.log('newStateObj', newStateObj)
        setMember(newStateObj);
    }

    const submitForm = event => {
        event.preventDefault()
        props.addNewMember(member);
        setMember({ title:"", body:""})
    }

    console.log('member', member)
    return (
      <div>
        {/* <h3>about to add {member || "unknown" }</h3> */}
        <form onSubmit={submitForm}>    
            <label htmlFor='title'>Title of Member</label>
            <input id="title" 
                   type='text' 
                   placeholder='Enter Name' 
                   value={props.title}
                   name='title'
                   onChange={handleChanges} 
            />
            <label htmlFor='body'>Member</label>
            <textarea id="body" 
                      placeholder="Add the member here" 
                      name="body"
                      onChange={handleChanges} 
                      value={member.body} 
            />
            <button type='submit'>Add Member</button>
        </form>
      </div>
    );
};


export default MembersForm;
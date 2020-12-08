import React from 'react';

const Persons = (props) => {
    console.log(props);
    const {firstName, lastName} = props.person;
    console.log(firstName);
    return (
        <div>
           <p>{firstName}</p>
           <p>{lastName}</p> 
        </div>
    );
};

export default Persons;
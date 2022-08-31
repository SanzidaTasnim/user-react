import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import './User.css';

const User = (props) => {
   const { name , picture , email , phone , salary , address } = props.user; 
   const handleClick = props.handleClick;
   return (
      <div className="user-container">
         <div className="user-image">
            <img src={picture} alt="" />
         </div>
         <div className="user-info">
            <h3>Name: {name}</h3>
            <p>Telephone: {phone}</p>
            <p>Email: {email}</p>
            <p>Salary: {salary}</p>
            <p><small>{address}</small></p>
            <button 
               className="addButton" 
               onClick={() => handleClick(props.user)}
            >
               <FontAwesomeIcon icon={faPlusCircle} />
               Add User
            </button>
         </div>
         
      </div>
   );
};

export default User;
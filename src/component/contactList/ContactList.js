import React from 'react';
import style from "./ContactList.module.css";
import PropTypes from 'prop-types'


const ContactList = ({findUserContact,deleteUserContact}) => {

    
    return (
        <ul className={(style.contact__list)}>
        {findUserContact().map(elem => 
          <li key={elem.id} className={(style.contact__item)}>
            <p className={(style.contact__style)}>
              {elem.name + ':'}
            </p>
            <p className={(style.contact__style)}>
              {elem.number}
            </p>
            <button
              className={style.deletebtn__style}
              type="button"
              onClick={()=>deleteUserContact(elem.id)}
            >
              Delete
            </button>
          </li>
        )}
        </ul>
    );
};

export default ContactList;

ContactList.propTypes={
    findUserContact:PropTypes.func.isRequired,
    deleteUserContact:PropTypes.func.isRequired,
    
}
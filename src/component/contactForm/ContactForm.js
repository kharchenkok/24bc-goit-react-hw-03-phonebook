import React, { useState } from "react";
import style from "./ContactForm.module.css";
import PropTypes from "prop-types";



const initialFormContact = {
    name: "",
    number: "",
  };

const ContactForm = ({addUserContact,contacts}) => {

const [formContact, setContact]= useState(initialFormContact)

const handleFormSubmit = (e) => {
  const{name,number}=formContact
      e.preventDefault();

      if (name.length === 0) {
        alert("'Name' is empty. Enter the name of your contact");
      } else if (contacts.some((el) => el.name.toLowerCase() === name.toLowerCase())) {
        alert(`"${name}" is alredy in contacts `);
      } else {
        addUserContact(name, number);
      }
      setContact(initialFormContact)
      
    };
    const  handleChange = ({ target }) => {
          const { name, value } = target;
          setContact({...formContact,[name]: value});
        };


  return (
    
    <form className={style.form__style} onSubmit={handleFormSubmit}>
      <label>
        <input
          placeholder="Name"
          className={style.input__style}
          type="text"
          name="name"
          value={formContact.name}
          onChange={handleChange}
        ></input>
      </label>
      <label>
        <input
          placeholder="Number"
          className={style.input__style}
          type="number"
          name="number"
          value={formContact.number}
          onChange={handleChange}
        ></input>
      </label>
      <button className={style.addbtn__style} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
// export default class ContactForm extends Component {

//   formInitialState = {
//     name: "",
//     number: "",
//   };
//   state = {
//     name: "",
//     number: "",
//   };

//   handleFormSubmit = (e) => {
//     e.preventDefault();

//     const { name, number } = this.state;
//     const {contacts,addUserContact} = this.props
//     if (name.length === 0) {
//       alert("'Name' is empty. Enter the name of your contact");
//     } else if (contacts.find((el) => el.name.toLowerCase() === name.toLowerCase())) {
//       alert(`"${name}" is alredy in contacts `);
//     } else {
//       addUserContact(name, number);
//     }

//     this.setState({ ...this.formInitialState });
//   };

//   handleChange = ({ target }) => {
//     const { name, value } = target;
//     this.setState({ [name]: value });
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <form className={style.form__style} onSubmit={this.handleFormSubmit}>
//         <label>
//           <input
//             placeholder="Name"
//             className={style.input__style}
//             type="text"
//             name="name"
//             value={name}
//             onChange={this.handleChange}
//           ></input>
//         </label>
//         <label>
//           <input
//             placeholder="Number"
//             className={style.input__style}
//             type="number"
//             name="number"
//             value={number}
//             onChange={this.handleChange}
//           ></input>
//         </label>
//         <button className={style.addbtn__style} type="submit">
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

ContactForm.propTypes = {
  addUserContact: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

import React, { useState, useEffect } from "react";
import ContactForm from "../contactForm/ContactForm";
import { v4 as uuidv4 } from "uuid";
import Filter from "../filter/Filter";
import ContactList from "../contactList/ContactList";
import style from "./Phonebook.module.css";

// import React from 'react';

const Phonebook = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");


  useEffect(()=>{
    const getLocalStorageData = localStorage.getItem('contacts');
    getLocalStorageData && setContacts(JSON.parse(getLocalStorageData))
  },[])

  useEffect(()=>{
    localStorage.setItem('contacts', JSON.stringify(contacts))
  },[contacts])

  const addUserContact = (name, number) => {
    const userContact = { name: name, number: number, id: uuidv4() };
    setContacts((prev) => [...prev, userContact]);
  };

  const userFilter = (filter) => {
    setFilter(filter);
  };

const findUserContact = () => {
      return contacts.filter((elem) => elem.name.toLowerCase().includes(filter));
    };

   const deleteUserContact = (id) => {
    setContacts(
            contacts.filter((contact) => contact.id !== id),
          );
        };

  return (
    <div className={style.phonebook_wrapper}>
      <h1 className={style.phonebook_title}>Phonebook</h1>
      <ContactForm addUserContact={addUserContact} contacts={contacts} />

      <h2 className={style.phonebook_title}>Contacts</h2>
      <Filter userFilter={userFilter} />
      <ContactList
        findUserContact={findUserContact}
        deleteUserContact={deleteUserContact}
      />
    </div>
  );
};

export default Phonebook;

// export default class Phonebook extends Component {
//   state = {
//     contacts: [
//         // {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//         // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//         // {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//         // {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//     ],
//     filter: "",
//   };

//   componentDidMount(){
//     const getLocalStorageData = localStorage.getItem('contacts');
//     getLocalStorageData && this.setState({contacts:JSON.parse(getLocalStorageData)})
//   };

//   componentDidUpdate(prevState){
//     (prevState.contacts !== this.state.contacts)&&localStorage.setItem('contacts', JSON.stringify(this.state.contacts))

//   }

//   addUserContact = (name, number) => {
//     const userContact = { name: name, number: number, id: uuidv4() };
//     this.setState((prev) => ({
//       contacts: [...prev.contacts, userContact],
//     }));
//   };

//   userFilter = (filter) => {
//     this.setState({ filter: filter });
//   };

//   findUserContact = () => {
//     const { filter, contacts } = this.state;
//     return contacts.filter((elem) => elem.name.toLowerCase().includes(filter));
//   };
//   deleteUserContact = (id) => {
//     this.setState({
//       contacts: this.state.contacts.filter((contact) => contact.id !== id),
//     });
//   };

//   render() {
//     const { contacts} = this.state;
//     return (
//       <div className={style.phonebook_wrapper}>
//         <h1 className={style.phonebook_title}>Phonebook</h1>
//         <ContactForm addUserContact={this.addUserContact} contacts={contacts} />

//         <h2 className={style.phonebook_title}>Contacts</h2>
//         <Filter userFilter={this.userFilter} />

//         <ContactList findUserContact={this.findUserContact} deleteUserContact={this.deleteUserContact} />
//       </div>
//     );
//   }
// }

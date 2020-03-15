import React from "react";
import ContactListItem from "./../contactForm/contactListItem/ContactListItem";

const ContactList = ({ contacts, deleteContact }) => (
  <ul>
    {contacts.map(contact => (
      <ContactListItem contact={contact} key={contact.id} deleteContact={deleteContact}/>
    ))}
  </ul>
);

export default ContactList;

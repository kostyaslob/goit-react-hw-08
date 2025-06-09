import css from "./ContactList.module.css"

import { Contact } from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contactsSlice.js"
import { useSelector } from "react-redux";

export const ContactList = () => {
    const contacts = useSelector(selectFilteredContacts)

    return (
        <ul className={css.contactList}>
            {contacts.map((contact) => (
                <li className={css.contactItem} key={contact.id}>
                    <Contact contact={contact}  />
                </li>
            ))}
        </ul>
    )
}
import css from "./Contact.module.css"

import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps.js";

export const Contact = ({ contact }) => {    
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(contact.id))
    };

    return (
        <div className={css.cont}>
            <div className={css.contactInfo} >
                <p><FaUser /> {contact.name}</p>
                <p><FaPhoneAlt /> {contact.number}</p>
            </div>
            <button className={css.contactBtn} onClick={handleDelete}>Delete</button>
        </div>
    );
}

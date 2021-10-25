import { IoPersonCircleSharp } from "react-icons/io5";
import { FaTrashAlt } from "react-icons/fa"
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import deleteContactsApi from "../../Services/deleteContactsApi";
import { getContactsApi } from "../../Services/getContactsApi";
const ContactList = (props) => {
  const [contacts, setContacts] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const [allContacts, setAllContacts] = useState([]);

  // when rerender => get data from DB
  useEffect(() => {
    const getContacts = async () => {
      const { data } = await getContactsApi();
      setContacts(data);
      setAllContacts(data)
    }

    try {
      getContacts();
    } catch (error) {
    }
  }, []);


  const searchHandler = (e) => {
    setSearchValue(e.target.value.toLowerCase());
    if (e.target.value !== "") {
      const search = contacts.filter((c) => (Object.values(c).join(" ").toLocaleLowerCase().includes(searchValue)));
      setContacts(search);
    }
    else {
      setContacts(allContacts);
    }
  }

  const deleteHandler = async (item) => {
    try {
      await deleteContactsApi(item.id);
      const filteredItems = contacts.filter((i) => item.id !== i.id);
      setContacts(filteredItems);
    } catch (error) {

    }
  }

  return (
    <div className="container">
      <div className="titles">
        <Link to="/" className="btn btn-add-more">Add More</Link>
        <input type="text" className="search-input" onChange={searchHandler} placeholder="search..." />
      </div>
      <div className="contact-list">
        {
          (contacts[0]) ?
            <ul>
              {contacts.map((item) =>
                <li key={item.id}>
                  <div className="continer-inform">
                    <div className="left-inform">
                      <div className="person-image">
                        <IoPersonCircleSharp style={{ fontSize: 30, color: '#00a6fb' }} />
                      </div>
                      <div className="person-information">
                        <Link to={{ pathname: `user/${item.id}`, state: item }}>
                          <div className="person-name">Name : {item.name}</div>
                          <div className="person-email">Email : {item.email}</div>
                        </Link>
                      </div>
                    </div>
                    <div className="right-inform">
                      <Link to={`/edit/${item.id}`}>
                        <button className="btn-edit"> Edit </button>
                      </Link>
                      <FaTrashAlt className="trash" onClick={() => deleteHandler(item)} />
                    </div>
                  </div>
                </li>)}
            </ul>
            :
            <h3>List is Empty</h3>
        }
      </div>
    </div>
  );
}

export default ContactList;

import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import postContactsApi from "../../Services/postContactsApi";

const ContactForm = ({ history }) => {
  const [getForm, setGetForm] = useState({
    name: "",
    email: "",
  });



  const inputNameRef = useRef();
  const inputEmailRef = useRef();

  const inputHandler = (e) => {
    setGetForm({
      ...getForm,
      [e.target.name]: e.target.value,
    })
  }


  const clickHandler = async () => {
    if (getForm.name === "" || getForm.email === "") {
      alert("please...")
    } else {
      try {
        await postContactsApi(getForm);
        history.push("/contacts");
      } catch (error) {

      }
    }
  }


  return (
    <div className="container">
      <div className="container-form">
        <h3 className="title">Add Contact</h3>
        <div>
          <label> Name </label>
          <input type="text" name="name" placeholder="Name" value={getForm.name}
            onChange={inputHandler} ref={inputNameRef} />
        </div>
        <div>
          <label> Email </label>
          <input type="text" name="email" placeholder="Email" value={getForm.email}
            onChange={inputHandler} ref={inputEmailRef} />
        </div>
        <div>
          <button className="btn" onClick={clickHandler}> Add </button>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
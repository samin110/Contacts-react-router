
import { useState, useRef, useEffect } from "react";
import getOneContacts from "../Services/getOneContacts";
import putContacts from "../Services/putContacts";

const EditContacts = ({ history, match }) => {
  const [getForm, setGetForm] = useState({
    name: "",
    email: "",
  });

  console.log(match.params);


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
        await putContacts(match.params.id, getForm);
        history.push("/contacts");
      } catch (error) {

      }
    }
  }

  useEffect(() => {
    try {
      const fetchUser = async () => {
        const { data } = await getOneContacts(match.params.id)
        setGetForm({ name: data.name, email: data.email });
      }
      fetchUser();
    }
    catch (err) {
    }
  }, [])


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
          <button className="btn" onClick={clickHandler}> Edit </button>
        </div>
      </div>
    </div>
  );
}

export default EditContacts;
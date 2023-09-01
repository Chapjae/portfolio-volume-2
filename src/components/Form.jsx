import { useState } from "react";
import { validateEmail } from "../utils/helpers"


const Form = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    
    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("I can't message you back with an invalid email!");
      return
    }

    if (!name) {
      setErrorMessage("You must give me your name!")
      return
    }

    if (!message) {
      setErrorMessage("You don't want to say anything?")
      return
    }

    setName("");
    setEmail("");
    setMessage("");
  }

  return(
    <div className="container text-center">
      <h1>Contact Form!</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="name"
          placeholder="Please Enter Your Name"
          onBlur={() => setNameError(name.length > 0 ? false : true)}
        />
          {nameError && (
          <span>A man needs a name...</span> 
          )}
        
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Please Enter Your Email"
        /> 
        
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="message"
          placeholder="Send Me a Message"
          onBlur={() => setErrorMessage(message.length > 0 ? false : true)}
        /> 
          {messageError && (
          <span>You have to say something</span> 
          )}

        <button type="submit">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form
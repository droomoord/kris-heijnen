import axios from "axios";

import { useState } from "react";

import { FiSend } from "react-icons/fi";

import Backdrop from "../backdrop/Backdrop";

const Form = ({ removeModal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  async function submitForm(e) {
    try {
      e.preventDefault();
      const form = new FormData();
      form.append("name", name);
      form.append("email", email);
      form.append("message", message);
      const res = await axios({
        method: "post",
        url: "https://formcarry.com/s/tCSVXyR26iM",
        headers: { "Content-Type": "multipart/form-data" },
        data: form,
      });
      for (var pair of form.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }
      setName("");
      setEmail("");
      setMessage("");
      alert("message sent!");
    } catch (error) {
      console.log(error);
      alert("something went wrong");
    }
  }

  return (
    <Backdrop clicked={removeModal}>
      <div className="contact" onClick={(e) => e.stopPropagation()}>
        <form
          noValidate
          className="contact__form"
          onSubmit={submitForm}
          method="POST"
          acceptCharset="UTF-8"
          autoComplete="off"
        >
          <div className="group">
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="name" className={name && "focus"}>
              name
            </label>
          </div>
          <div className="group">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email" className={email && "focus"}>
              email
            </label>
          </div>
          <div className="group">
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="message" className={message && "focus"}>
              message
            </label>
          </div>
          <div>
            <button type="submit">
              <FiSend size="1.2em" />
              send
            </button>
          </div>
        </form>
      </div>
    </Backdrop>
  );
};

export default Form;

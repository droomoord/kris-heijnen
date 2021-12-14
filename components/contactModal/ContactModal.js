import axios from "axios";

import { useState, useRef, useEffect } from "react";

import { FiSend } from "react-icons/fi";

import Backdrop from "../backdrop/Backdrop";
import WriteAnimation from "../writeAnimation/WriteAnimation";

const Form = ({ removeModal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [msgHasBeenSent, setMsgHasBeenSent] = useState(false);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorType, setErrorType] = useState("");
  useEffect(() => {
    setTimeout(() => {
      nameRef.current.focus();
    }, 500);
  }, []);
  async function submitForm(e) {
    try {
      e.preventDefault();
      if (!name) {
        setErrorMessage("Please provide your name");
        setErrorType("name");
        nameRef.current.focus();
      } else if (!email || !validateEmail(email)) {
        setErrorMessage("Please provide a valid email");
        setErrorType("email");
        emailRef.current.focus();
      } else if (!message) {
        setErrorMessage("Please provide a message");
        setErrorType("message");
        messageRef.current.focus();
      } else {
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
        if (res.status == 200) setMsgHasBeenSent(true);
        else
          alert(
            `Something went wrong. Please try again. Response status: ${res.status}`
          );
      }
    } catch (error) {
      console.log(error);
      alert(
        "Something went wrong while trying to send the message. Please try again!"
      );
    }
  }
  const validateEmail = (email) => {
    return email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  return (
    <Backdrop clicked={removeModal}>
      <div className="contact" onClick={(e) => e.stopPropagation()}>
        {errorMessage && !msgHasBeenSent && (
          <div className="error">{errorMessage}</div>
        )}
        <form
          style={{
            visibility: msgHasBeenSent ? "hidden" : "visible",
          }}
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
              className={errorType == "name" && "red-border"}
              ref={nameRef}
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
              className={errorType == "email" && "red-border"}
              ref={emailRef}
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
              className={errorType == "message" && "red-border"}
              ref={messageRef}
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
        {msgHasBeenSent && (
          <>
            <div className="sent">
              <WriteAnimation
                sentence={`Thank you, ${
                  name.charAt(0).toUpperCase() + name.slice(1)
                }! I will get back to you soon!`}
              />
            </div>
            <button className="close" onClick={removeModal}>
              Close
            </button>
          </>
        )}
      </div>
    </Backdrop>
  );
};

export default Form;

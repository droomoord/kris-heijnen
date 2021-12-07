import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formVisible, setFormVisible] = useState(false);
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
  const button = (
    <button className="contact__button" onClick={() => setFormVisible(true)}>
      <AiOutlineMail size="1.2em" /> Contact me!
    </button>
  );
  const form = (
    <form
      className="contact__form"
      onSubmit={submitForm}
      // action="https://formcarry.com/s/tCSVXyR26iM"
      method="POST"
      acceptCharset="UTF-8"
    >
      <div className="group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div className="group">
        <button type="submit">submit</button>
      </div>
    </form>
  );
  return <div className="contact">{formVisible ? form : button}</div>;
};

export default Form;

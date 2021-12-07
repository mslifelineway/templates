import React from "react";
import "./styles.css";
import CloseIcon from "../../assets/images/close-button.svg";
import { errorMessages } from "../../utils/constants";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const defaultValues = {
  name: "",
  email: "",
  message: "",
};

const defaultErrors = {
  name: "",
  email: "",
  message: "",
};

const HireMeForm = ({ setOpen }) => {
  const [user, setUser] = React.useState(defaultValues);
  const [errors, setErrors] = React.useState(defaultErrors);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
    if (value === "") {
      setErrors({ ...errors, [name]: errorMessages[name] });
    } else {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateUser = () => {
    const newErrors = {};
    let validated = true;
    Object.keys(user).forEach((key) => {
      if (user[key] === "") {
        validated = false;
        newErrors[key] = errorMessages[key];
      } else {
        newErrors[key] = "";
      }
    });
    setErrors({ ...errors, ...newErrors });
    return validated;
  };

  const sendMail = (e) => {
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        () => {
          toast.success("Mail sent!");
          setUser(defaultValues);
          setOpen(false);
        },
        (error) => {
          if (typeof error === "string") toast.error(error);
          else toast.error(JSON.stringify(error));
        }
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateUser()) {
      sendMail(e);
    }
  };

  return (
    <div className="hireme">
      <div className="hireme__modal--content">
        <img src={CloseIcon} alt="left top" onClick={() => setOpen(false)} />
        <form onSubmit={handleSubmit}>
          <h2 className="gradient__logo">Want to hire me?</h2>
          <input
            placeholder="Name"
            type="text"
            name="name"
            autoComplete="off"
            value={user.name}
            onChange={handleChange}
            className={
              errors.name === errorMessages.name ? "error__border" : ""
            }
          />
          <input
            placeholder="Email"
            type="email"
            name="email"
            autoComplete="off"
            value={user.email}
            onChange={handleChange}
            className={
              errors.email === errorMessages.email ? "error__border" : ""
            }
          />
          <textarea
            placeholder="Message"
            name="message"
            autoComplete="off"
            value={user.message}
            onChange={handleChange}
            className={
              errors.message === errorMessages.message ? "error__border" : ""
            }
          ></textarea>
          <button className="gradient__button" type="submit">
            Hire Me
          </button>
        </form>
      </div>
    </div>
  );
};

export default HireMeForm;

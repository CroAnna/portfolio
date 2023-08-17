import "./Contact.scss";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const success_ = () => {
    toast.success("Uspješno poslano", {});
  };
  const error_ = () => {
    toast.error("Došlo je do pogreške, pokušajte ponovo!", {});
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_189cjxd",
        "template_uz4p2jr",
        form.current,
        "FBMs7F2k5rhtlLlRJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          success_();
        },
        (error) => {
          console.log(error.text);
          error_();
        }
      );
    form.current.reset();
  };
  return (
    <div className="contact-wrapper">
      <div className="contact-inner">
        <div className="contact-text">
          <h3>contact</h3>
          <h4>Feel free to send me a message.</h4>
          <p>
            Want to know more about what me and what I do? Simply fill out the
            form, and I&apos;ll get back to you as quickly as possible.
          </p>
        </div>
        <form action="" ref={form} onSubmit={sendEmail}>
          <div className="row">
            <div className="row-item">
              <label htmlFor="name">Your name *</label>
              <input type="text" name="name" required />
            </div>
            <div className="row-item">
              <label htmlFor="email">Your e-mail *</label>
              <input type="email" name="email" required />
            </div>
          </div>
          <div>
            <label htmlFor="message">Your message *</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              required
            ></textarea>
          </div>
          <button id="btnSend" type="submit">
            Send message
          </button>
        </form>
        <ToastContainer
          theme="colored"
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
        />
      </div>
    </div>
  );
};

export default Contact;

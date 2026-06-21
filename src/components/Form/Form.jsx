import { useState } from "react";
import styles from "./Form.module.scss";


const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "", 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Дані форми:", formData);

    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: "", message: "" });
    };
    
    return (
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.formHeader}>Send Us a Message</h2>

        <div className={styles.inputGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>
        </div>

        <button type="submit" className={styles.submitBtn}>
          Send Message
        </button>
      </form>
    );
};

export default Form

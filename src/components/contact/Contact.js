import "./Contact.css";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "9c22eba1-3e21-4e2d-9f44-acc0631c81cb");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <>
      <h2 className="section-title">Contact Me</h2>
      <form id="contact-form" onSubmit={onSubmit}>
        <label htmlFor="input-name">Your Name</label>
        <input
          id="input-name"
          type="text"
          name="name"
          autoComplete="off"
          placeholder="nick clouse"
          required
        />

        <label htmlFor="input-email">Your Email</label>
        <input
          id="input-email"
          type="email"
          name="email"
          autoComplete="off"
          placeholder="example123@gmail.com"
          required
        />

        <label htmlFor="input-text">Subject</label>
        <input
          id="input-text"
          type="text"
          name="subject"
          autoComplete="off"
          placeholder="ex. Let's go skiing"
          required
        />

        <label htmlFor="input-message">Message</label>
        <textarea
          id="input-message"
          name="message"
          autoComplete="off"
          required
        ></textarea>
        <button id="submit-btn" type="submit">
          Submit Form
        </button>
      </form>
    </>
  );
}

export default Contact;

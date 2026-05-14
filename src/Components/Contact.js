import "./Contact.css";

function Contact() {

  return (

  <section className="contact">
      <div className="contact-container">

        <div className="contact-info">
          <h2>Contact Us</h2>

          <p>
            Ready to give your car the premium treatment?
            Get in touch with us today.
          </p>

          <div className="info-item">
            <h4>📞 Phone</h4>
            <p>+27 72 075 7744</p>
          </div>

          <div className="info-item">
            <h4>📧 Email</h4>
            <p>info@tall-detailer.co.za</p>
          </div>

          <div className="info-item">
            <h4>📍 Location</h4>
            <p>Johannesburg, South Africa</p>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Your Phone Number" />

          <textarea
            placeholder="Tell us what service you need..."
            rows="5"
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

      </div>
    </section>

  );
}

export default Contact;
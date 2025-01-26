import React from 'react'
import "./Contact.css"
import { useState, useRef, useEffect } from 'react'
import emailjs from "@emailjs/browser"
const Contact = () => {
  const [name, setName] = useState();
  const [mail, setMail] = useState();
  const [message, setMessage] = useState();
  const [mailClass, setMailClass] = useState("no")
  const [mailStatus, setMailStatus] = useState("")
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ki3g3ud', 'template_rfmhw81', form.current, '9a4gdiOC4_K7Za_qZ')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          setName("")
          setMail("")
          setMessage("")
          setMailStatus("Your Message has been sent!");
      }, (error) => {
          console.log(error.text);
      });
  };

  useEffect(()=>{
    setMailClass("success")
    setTimeout(() => {
        setMailClass("no")//hide message
      }, 4000)
  }, [mailStatus])


  return (
    <div>
        <div className="contact" id='contact'>
          <div className="contact-text">
              <h2>Contact <span>Me!</span></h2>
              <div class="contactInfo">
                <div class="text__box">
                    <div class="icon"><i class="fas fa-phone"></i></div>
                    <div class="text">
                        <h3>Phone Number</h3>
                        <p>+2348100285445</p>
                    </div>
                </div>
                <div class="text__box">
                    <div class="icon"><i class="far fa-envelope"></i></div>
                    <div class="text">
                        <h3>Email</h3>
                        <p>mayowa.mikeadeogun@gmail.com</p>
                    </div>
                </div>
            </div>
          </div>

          <div className="contact-form">
            <form ref={form} action="" onSubmit={sendEmail}>
              <input type="name" placeholder='Enter Name' name='user_name' value={name} onChange={(e) => setName(e.target.value)} required />
              <input type="email" placeholder='Enter Email' name='user_email'  value={mail} onChange={(e) => setMail(e.target.value)} required/>
              <textarea name="message" id="" cols="30" rows="10" placeholder='What can I help you with?' value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
              <input type="submit" className="btn" value="Send Message" />
              <p className={mailClass}>{mailStatus}</p>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Contact

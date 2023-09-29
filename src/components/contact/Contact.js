import React, { useRef, useState } from 'react'
import styles from "./Contact.module.css"
import emailjs from '@emailjs/browser';

const Contact = () => {

    const [error, setError] = useState(false);
    let text = "thanks"
    const [showForm, setShowForm] = useState(true)
    
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

    
        emailjs.sendForm('service_mdxbfbc', 'template_hkh9kcb', form.current, 'EC5SUwKQgu1g3-CdC')
          .then((result) => {
              console.log(result);


              if(result.status === 200) {
                setShowForm(false)
                console.log(form)

              }
          }, (error) => {
              console.log(error.text);
          });
      };

   
    return (
        <div id='section_contact' className={styles.container}>
            <p className={styles.touch}>Get In Touch!</p>
            <p className={styles.help}>How can i help you ?</p>
            <div className={styles.contactInfo}>
                <div className={styles.address}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#9473d0" class="bi bi-house" viewBox="0 0 16 16">
                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
                    </svg>
                    <p>Ontario, Canada</p>
                </div>
                <div className={styles.phone}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#9473d0" class="bi bi-telephone" viewBox="0 0 16 16">
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                    </svg>
                    <p>0000000000</p>

                </div>
                <div className={styles.email}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#9473d0" class="bi bi-envelope" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                    </svg>
                    <p>amarjitmangarhia@gmail.com</p>
                </div>
            </div>


            
            <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
                <div className={styles.content}>
                    <div className={styles.details}>
                        <div className={styles.username}>
                            <label htmlFor="name">Your Name</label> <br />
                            <input name="user_name" type="text" required/>
                        </div>
                        <div className={styles.useremail}>
                            <label htmlFor="email">Mail</label> <br />
                            <input name="user_email" type="text" required/>
                        </div>
                        <div className={styles.userphone}>
                            <label htmlFor="phone">Phone (optional)</label><br />
                            <input name="user_phone" type="text" />
                        </div>
                    </div>
                    <div className={styles.messageBox}>
                        <label>Message</label> <br />
                        <textarea name="message" id="message" rows="5" cols="5" required></textarea>
                    </div>
                </div>
                <div className={styles.button}>
                    <button type='submit' value='Send'> {showForm ? "Send Message" : "Your Message has been sent!"}  </button>
                </div>
            </form>
            </div>
    )
}

export default Contact
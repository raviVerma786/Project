import React,{useContext,useEffect} from 'react';
import { UserContext } from '../Context/ContextApi';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import {MdOutlineEmail} from "react-icons/md";
import {BsWhatsapp} from "react-icons/bs";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contacts.css";

const Contacts = () => {
    const store = useContext(UserContext);
  
    useEffect(()=>{
      const userId = localStorage.getItem("userId");
      if(userId){
        store.setSignedIn(true);
        store.setUser(localStorage.getItem("userId"));
        store.setEmail(localStorage.getItem("email"));
      }
    },[])

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o6dxzmn', 'template_63qxqbm', form.current, 'evJrG3OPne9hpLjRy')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      alert("Your Data Has Been Submitted !");
      e.target.reset();
  };
  
  return (
    <>
    <section id="contact" className='p-5 bg-gray-400'>
      <div className="contactElements">
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" style={{color:"white"}}/>
            <h4 className='text-gray-100'>Email</h4>
            <Link to = "mailto:vravi084@gmail.com" target="_blank" style={{color:"yellow"}}>Send a messege</Link>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" style={{color:"white"}}/>
            <h4 className='text-gray-100'>WhatsApp</h4>
            <Link to = "https://wa.me/+919161621334" target="_blank" style={{color:"yellow"}}>Send a messege</Link>
          </article>
        </div>

        {/* End of contact options */}
          <form ref = {form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Full Name" required/>
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="messege" rows="6" placeholder="Your Messege" required></textarea>
            <button type="submit" className="btn bg-green-600 font-semibold"> Send Messege </button>

          </form>
      </div>
      </div>
    </section>

    <Footer/>
    </>
  )
}

export default Contacts
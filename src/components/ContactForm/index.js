import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import emailImage from '../../assets/images/logos/primary/email-13-48.png'

function ContactForm() {
    //initial state is an empty string
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    function handleSubmit(e) {
        e.preventDefault();
        if (!errorMessage) {
            //e.target.name refers to the name attribute of the form element
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }
        console.log('Form', formState);
    }

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
    }

    return (
        <section className='contact-container'>
            <div className="contact">
                <h1 >Contact me by Form</h1>
                <form id="contact-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="email">Email address:</label>
                        <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                        {errorMessage && (
                            <div>
                                <p className="error-text">{errorMessage}</p>
                            </div>
                        )}
                    </div>
                    <button data-testid="button" type="submit">Submit</button>
                </form>
            </div>
            <div className='email'>
                <h1 >Or by Email</h1>
                <a href="mailto:jen.saikaly@gmail.com"><img className="img-email" src={emailImage} alt="email"></img></a>

            </div>
        </section>
    )
}

export default ContactForm;
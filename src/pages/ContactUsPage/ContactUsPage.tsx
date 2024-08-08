import React, { useState } from 'react';
import Input from '../../shared/ui/Input/Input'; // Убедитесь, что путь правильный
import Textarea from '../../shared/ui/Textarea/Textarea'; // Убедитесь, что путь правильный
import Button from '../../shared/ui/Button/Button'; // Убедитесь, что путь правильный
import './ContactUsPage.css'; // Убедитесь, что этот файл существует и содержит стили

const ContactUs: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Здесь вы можете добавить логику для отправки формы (например, через API)

        setSubmitted(true);
        // Сброс полей формы после отправки
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="contact-us-container">
            <div className="contact-us-inner">
                <h2>Contact Us</h2>
                {submitted ? (
                    <p className="contact-us-thank-you">Thank you for your message! We will get back to you shortly.</p>
                ) : (
                    <form className="contact-us-form" onSubmit={handleSubmit}>
                        <label className="contact-us-label">Name:</label>
                        <Input
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />

                        <label className="contact-us-label">Email:</label>
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <label className="contact-us-label">Message:</label>
                        <Textarea
                            placeholder="Enter your message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            rows={5}
                            cols={50}
                        />

                        <Button type="submit" size="medium">Send Message</Button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ContactUs;

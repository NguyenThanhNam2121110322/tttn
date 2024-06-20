import React, { useEffect, useState } from 'react';
import { addContacts } from '../../api/ContactService';
import { toast } from 'react-hot-toast';

function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const handleContact = (event) => {
        event.preventDefault();
        if (name !== "",
            email !== "",
            message !== ""
        ) {
            const contact = {
                name: name,
                email: email,
                subject: subject,
                message: message
            };
            console.log(contact);
            // console.log("images", selectedImages);

            addContacts("Contact", contact)
                .then((response) => {
                    console.log("added", response);
                    if (response.status === 201 && response.data) {
                        toast.success('Thành công!', {
                            className: 'custom-toast'
                        });
                    } else {
                        alert("Lỗi khi thực hiện contact!");
                    }
                })
                .catch((error) => {
                    console.error("Error:", error);
                    alert("Lỗi khi gọi API!");
                });
        } else {
            alert("Bạn chưa nhập đủ thông tin!");
        }
    };

    return (
        <>
            {/* <!-- Page Header Start --> */}
            <div class="container-fluid bg-secondary mb-5">
                <div class="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "300px" }}>
                    <h1 class="font-weight-semi-bold text-uppercase mb-3">Contact Us</h1>
                    <div class="d-inline-flex">
                        <p class="m-0"><a href="">Home</a></p>
                        <p class="m-0 px-2">-</p>
                        <p class="m-0">Contact</p>
                    </div>
                </div>
            </div>
            {/* <!-- Page Header End --> */}


            {/* <!-- Contact Start --> */}
            <div class="container-fluid pt-5">
                <div class="text-center mb-4">
                    <h2 class="section-title px-5"><span class="px-2">Contact For Any Queries</span></h2>
                </div>
                <div class="row px-xl-5">
                    <div class="col-lg-7 mb-5">
                        <div class="contact-form">
                            <div id="success"></div>
                            <form name="sentMessage" id="contactForm" novalidate="novalidate">
                                <div class="control-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        placeholder="Your Name"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group">
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        id="email"
                                        className="form-control"
                                        name="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="subject"
                                        name="subject"
                                        placeholder="Subject"
                                        required
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                    />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group">
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        placeholder="Your Message"
                                        rows="4"
                                        required
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    ></textarea>
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div>
                                    <button class="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton" onClick={handleContact}>Send
                                        Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-5 mb-5">
                        <h5 class="font-weight-semi-bold mb-3">Get In Touch</h5>
                        <p>Justo sed diam ut sed amet duo amet lorem amet stet sea ipsum, sed duo amet et. Est elitr dolor elitr erat sit sit. Dolor diam et erat clita ipsum justo sed.</p>
                        <div class="d-flex flex-column mb-3">
                            <h5 class="font-weight-semi-bold mb-3">Store 1</h5>
                            <p class="mb-2"><i class="fa fa-map-marker-alt text-primary mr-3"></i>123 Street, New York, USA</p>
                            <p class="mb-2"><i class="fa fa-envelope text-primary mr-3"></i>info@example.com</p>
                            <p class="mb-2"><i class="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890</p>
                        </div>
                        <div class="d-flex flex-column">
                            <h5 class="font-weight-semi-bold mb-3">Store 2</h5>
                            <p class="mb-2"><i class="fa fa-map-marker-alt text-primary mr-3"></i>123 Street, New York, USA</p>
                            <p class="mb-2"><i class="fa fa-envelope text-primary mr-3"></i>info@example.com</p>
                            <p class="mb-0"><i class="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Contact End --> */}
        </>
    );
}

export default Contact;
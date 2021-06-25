import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
    return (

        <div className="row mt-4">
            <div className="col-md-5">
            <ContactForm/>
            </div>
            <div className="col-md-7">
                <div>list of Contacts</div>
            </div>
        </div>

    )

}
export default Contact;
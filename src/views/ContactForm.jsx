import React from "react";

const ContactForm = () => {
    return (
        <div className="">


                <form>
                    <div className="mb-3">

                        <input type="text" className="form-control" placeholder="Full Name"></input>

                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" placeholder="Enter email"></input>
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Mobile"></input>
                    </div>
                    <div className="mb-3">
                        <textarea type="text" className="form-control" placeholder="Address"></textarea>
                    </div>
                    <div className="form-check mb-3">
                        <input type="checkbox" className="form-check-input" ></input>
                        <label className="form-check-label" htmlFor="exampleCheck1">is Active</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>

    )


}
export default ContactForm;
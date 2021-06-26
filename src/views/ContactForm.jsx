import React, {useEffect ,useState} from "react";

const ContactForm = (props) => {
    const initialFieldValues = {
        fullName:'',
        email:'',
        address:'',
        mobil:''
    }
    const [values, setValues] = useState(initialFieldValues);

    useEffect(() => {
        if(props.currentId=='')
            setValues({
                ...initialFieldValues
            })
        else
            setValues({
                ...props.contactObject[props.currentId]
            })

    }, [props.currentId, props.contactObject])
    const  handleInputChange= e => {

        const {name, value} = e.target;
        setValues({
            ...values,
        [name] : value,
        })
    }

    const cancel = () => {
        setValues({
            ...initialFieldValues
        })
    }
    const  handleFormSubmit = e => {
        e.preventDefault();
        props.addOrEdit(values)
    }
    return (
        <div className="">


                <form autoComplete="off" onSubmit={handleFormSubmit}>
                    <div className="mb-3">

                        <input type="text" className="form-control" placeholder="Full Name" name="fullName"
                        value={values.fullName} onChange={handleInputChange}></input>

                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" placeholder="Enter email" name="email"
                        value={values.email} onChange={handleInputChange}></input>
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Mobile" name="mobil" value={values.mobil} onChange={handleInputChange}></input>
                    </div>
                    <div className="mb-3">
                        <textarea type="text" className="form-control" placeholder="Address" name="address" value={values.address} onChange={handleInputChange}></textarea>
                    </div>
                    <div className="form-check mb-3">
                        <input type="checkbox" className="form-check-input" ></input>
                        <label className="form-check-label" htmlFor="exampleCheck1">is Active</label>
                    </div>
                    <button type="submit" className="btn btn-primary">{props.currentId==''? 'Save':'Update' }</button>
                    <a className="btn btn-primary" onClick={cancel}>Cancel</a>
                </form>
            </div>

    )


}
export default ContactForm;
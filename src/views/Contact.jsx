import React, {useState, useEffect} from "react";
import ContactForm from "./ContactForm";
import firebaseDb from "../firebase";
const Contact = () => {

        const [contactObject, setContactObject] = useState({})
        const  [currentId, setCurrentId] = useState()

    useEffect(() => {
            firebaseDb.child('contacts').on('value', snapshot => {
            if(snapshot.val() != null)
                setContactObject({
                    ...snapshot.val()
                })

            })

    }, []);

        const onDelete = key => {

            if(window.confirm('Are you sure')){
                firebaseDb.child('contacts/'+key).remove(

                    err => {
                        if(err){
                            console.log(err)
                        }
                        else
                        {
                            setCurrentId('')
                        }
                    }
                )
            }
        }
    const addOrEdit =  obj => {
    if(currentId=='')
        firebaseDb.child('contacts').push(
            obj,
            err => {
                if(err){
                    console.log(err)
                }
            }
        )
        else
    {
        firebaseDb.child('contacts/'+currentId).set(
            obj,
            err => {
                if(err){
                    console.log(err)
                }
                else
                {
                    setCurrentId('')
                }
            }
        )
    }

    }
    
    return (

        <div className="row mt-4">
            <div className="col-md-5">
            <ContactForm { ...({addOrEdit, currentId, contactObject, setCurrentId})}/>
            </div>
            <div className="col-md-7">

                <table className="table table-borderless table-active">
                    <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Addres</th>
                        <th>Actions</th>
                        <th></th>
                    </tr>
                </thead>
                    <tbody>
                    {
                        Object.keys(contactObject).map(id => {
                            return <tr key={id}>
                                <td>{contactObject[id].fullName}</td>
                                <td>{contactObject[id].mobil}</td>
                                <td>{contactObject[id].email}</td>
                                <td>{contactObject[id].address}</td>
                                <td><a className="btn text-primary" onClick={() => setCurrentId(id)}> <i className=" fa fa-edit"></i> </a></td>
                                <td><a className="btn text-danger" onClick={() => onDelete(id)}> <i className="fa fa-trash"></i></a> </td>
                            </tr>

                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>

    )

}
export default Contact;
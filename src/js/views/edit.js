import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditContacts = () => {
    const { store, actions } = useContext(Context);
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const params = useParams()

    useEffect(() => {
        const contacToEdit = store.contacts.filter(contact => contact.id === parseInt(params.id))[0]
        if (contacToEdit) {
            setFullName(contacToEdit.name || "");
            setEmail(contacToEdit.email || "");
            setPhone(contacToEdit.phone || "");
            setAddress(contacToEdit.address || "");
        }
    }, [store.selectedContact]);
    const navigate = useNavigate()
    const contact = {
        name: fullName,
        phone: phone,
        email: email,
        address: address,
    }
    

    const editSubmit = () => {
        actions.editContacts(params.id, contact)
        navigate("/")
    }


    return (
        <div className="container">
            <ul className="list-group">
                <h1>Edit contact</h1>
                <h3>Full Name</h3>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setFullName(e.target.value)} value={fullName} />
                <h2>Email</h2>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} value={email} />
                <h2>Phone</h2>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setPhone(e.target.value)} value={phone} />
                <h2>Address</h2>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setAddress(e.target.value)} value={address} />
                <div className="mt-3">
                    <button className="btn btn-primary w-100" onClick={() => editSubmit()}>Save</button>
                </div>
            </ul>
            <Link to="/">
                <span className="btn btn-primary btn-lg " href="#" role="button">
                    Return Contact List
                </span>
            </Link>
        </div>
    );
};
export default EditContacts;












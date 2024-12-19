import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const CreateContacts = () => {
    const { store, actions } = useContext(Context);
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const params = useParams()



    const createSubmit = (event) => {
        event.preventDefault()

        console.log(fullName, email, phone, address);
        actions.addContact({
            "name": fullName,
            "phone": email,
            "email": phone,
            "address": address
        })
      
    }

    return (
        <div className="container">
            <form className="list-group" onSubmit={createSubmit}>
                <h1>Create Contact</h1>
                <h3>Full Name</h3>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setFullName(e.target.value)} value={fullName} />
                <h2>Email</h2>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} value={email} />
                <h2>Phone</h2>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setPhone(e.target.value)} value={phone} />
                <h2>Address</h2>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setAddress(e.target.value)} value={address} />
                <div className="mt-3">
                    <button className="btn btn-primary w-100" type="submit">Save</button>
                </div>
            </form>
            <Link to="/">
                <span className="btn btn-primary btn-lg " href="#" role="button">
                    Return Contact List
                </span>
            </Link>
        </div>
    );
};
export default CreateContacts;





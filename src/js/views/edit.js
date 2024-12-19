import React,{useState, useContext} from "react";
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
    // useEffect(() => {
    //     actions.setContact(params.id); 
    // }, [params.id]);
    // useEffect(() => {
    //     if (store.selectedContact) {
    //         setFullName(store.selectedContact[0]?.name || "");
    //         setEmail(store.selectedContact[0]?.email || "");
    //         setPhone(store.selectedContact[0]?.phone || "");
    //         setAddress(store.selectedContact[0]?.address || "");
    //     }
    // }, [store.selectedContact]);
    const navigate = useNavigate() 
    const contact = {
        name: fullName,
        phone: phone,
        email: email,
        address: address,
    }
    const editSubmit = () => {
        actions.editContacts(id, contact)
        navigate("/")
    }
    // useEffect(() => {
    //     console.log(store.selectedContact);
    //     console.log(store.contacts);
    // }, [store.selectedContact]
    
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












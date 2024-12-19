import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import Modal from "./modal.jsx";

const Card = ({ contact }) => {
  const [ismodalOpen, setModalOpen] = useState(false)
  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)
  const navigate = useNavigate()
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "white", }}>
      <div className="card col-3" style={{ width: "80rem", position: "relative", justifyContent: "center" }}>
        <div style={{ position: "absolute", top: "10px", right: "10px", display: "flex", gap: "10px" }}>
          <div className="bg-dark text-white p-3" onClick={openModal} style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "35px", height: "35px", borderRadius: "50%", backgroundColor: "text-black bg-white", color: "white", textDecoration: "none" }}>
            <i className="fa-sharp fa-solid fa-trash"></i></div>
          <a href="#" className="bg-dark text-white p-3" onClick={() => navigate(`/edit/${contact.id}`)} style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "35px", height: "35px", borderRadius: "50%", backgroundColor: "#007BFF", color: "white", textDecoration: "none" }}>
            <i className="fa-regular fa-pen-to-square"></i></a>
        </div>
        <div className="card-body" style={{ display: "flex", alignItems: "center" }}>
          <img src="https://imgs.search.brave.com/Ast88rlXL8eCR2FJ-FQ0cv3NPJXmcstAgBtdzN6DTkg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/dmVjdG9yLWdyYXRp/cy9wYW5kYS1saW5k/by1iYW1idV8xMzg2/NzYtMzA1My5qcGc_/c2VtdD1haXNfaHli/cmlk" style={{ borderRadius: "100%", width: "200px", height: "150px", marginRight: "20px" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", }}>
            <p className="card-text" style={{ display: "flex", alignItems: "center", gap: "10px" }}> {contact.name} </p>
            <p className="card-text fa-solid fa-phone" style={{ display: "flex", alignItems: "center", gap: "10px" }}>{contact.phone}</p>
            <p className="card-text fa-regular fa-envelope" style={{ display: "flex", alignItems: "center", gap: "10px" }}>{contact.email}</p>
            <p className="card-text fa-solid fa-location-dot" style={{ display: "flex", alignItems: "center", gap: "10px" }}>{contact.address}</p>
          </div>
        </div>
        <Modal isOpen={ismodalOpen} onClose={closeModal} id={contact.id} />
      </div>
    </div>
  );
};
export default Card;
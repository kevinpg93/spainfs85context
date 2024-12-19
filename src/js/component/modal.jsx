import React from "react";
import { Context } from '../store/appContext';
import { useContext } from "react";
import { useNavigate } from "react-router";


const Modal = ({ isOpen, onClose, id }) => {
  const { actions, store } = useContext(Context)
  const navigate = useNavigate()
  const handleDelete = () => {
    actions.deleteContact(id)
    onClose()
  }

  if (!isOpen)
    return null;

  return (

    <div className={`modal ${isOpen ? "fade show":""}`} tabIndex="-1" style={isOpen ?{display:"block"}:""}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>¿Are you sure delete?</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onClose}>Close</button>
            <button type="button" className="btn btn-primary" onClick={handleDelete}>Save changes</button>
          </div>
        </div>
      </div>
    </div>





  )

}
export default Modal;
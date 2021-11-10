import React from 'react';
import './modal.css';
import Galeria from '../Tabla_1/Galeria';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';


const Modal = ({isOpen,closeModal}) => {
    let iconExit=<FontAwesomeIcon icon={faTimes}/>;
    return (
        <div className={isOpen? "styleModal":"styleModal-open"}>
            <div className="modal_dialog">
                    <h1>Galeria</h1>
                     <button className="btn btn-danger btnSalir"  onClick={()=>closeModal()} >{iconExit}</button>
                     <Galeria/>
            </div>
        </div>
    )
}

export default Modal;

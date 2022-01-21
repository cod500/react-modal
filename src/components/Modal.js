import React from 'react';
import { FiAlertCircle, FiXCircle } from "react-icons/fi";

export default function Modal({ closeModal }) {
    return (
        <section className="modal --center-all close-modal" onClick={closeModal}>
            <div className="modal-section">
                <h3 className="--flex-end"><FiXCircle className="icon close close-modal" onClick={closeModal} /></h3>
                <h3 className="--flex-start"> <FiAlertCircle className="icon" />Do you want to continue?</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis cupiditate provident illum placeat voluptas repellendus nemo doloribus asperiores beatae hic, rerum tenetur commodi perspiciatis voluptate facilis voluptatum expedita recusandae. Aspernatur.</p>
                <div className="modal-btns --flex-end">
                    <button className="--btn --btn-danger close-modal" onClick={closeModal}>Cancel</button>
                    <button className="--btn --btn-primary">Proceed</button>
                </div>
            </div>
        </section>
    )
}

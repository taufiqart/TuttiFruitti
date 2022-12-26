import React from 'react'
import { Link } from 'react-router-dom';

export default function Modal(id, title, message, href) {
    return (
        <>
            < input type="checkbox" id={id} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label htmlFor={id} className="btn"><Link to={href} >{buttonTitle}</Link></label>
                    </div>
                </div>
            </div>
        </>
    )

}

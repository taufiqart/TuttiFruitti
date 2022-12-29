import React, { Children } from 'react'

function Modal({ id, children }) {
    return (
        <>
            <input type="checkbox" id={id} className="modal-toggle" />
            <div className="!flex bg-black/40 modal  ">
                <div className="max-h-full bg-white modal-box min-w-min h-[90%]">
                    {children}
                </div>
            </div>
        </>
    )
}

export default Modal

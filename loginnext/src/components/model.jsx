import React, { useEffect, useRef } from "react"
import { createPortal } from "react-dom"

export default function Model({ open, close, children }) {
    const ref = useRef()
    useEffect(() => {
        if (open) { ref.current.showModal() }
        else { ref.current.close() }

    }, [open])
    return createPortal(
        <dialog className='fixed inset-0 z-50 overflow-auto bg-opacity-20 bg-dark rounded-lg flex justify-center items-center' ref={ref}>
            {open && (<div className="bg-background rounded-lg p-8 max-w-lg w-full">
                <div className="flex justify-between items-center mb-4 gap-11">
                    <h1 className="text-2xl font-semibold text-secondary">O</h1>
                    <button
                        className="text-error hover:text-gray-800 focus:outline-none"
                        onClick={close}
                    >
                        &#x2715;
                    </button>
                </div>
                <div>{children}</div>
            </div>)}
        </dialog>,
        document.getElementById('model')
    )
}

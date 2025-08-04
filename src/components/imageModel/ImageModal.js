import "./ImageModal.css"

import {useState} from "react";

function ImageModal({thumbnailSrc, alt}){
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <img
                src={thumbnailSrc}
                alt={alt}
                className="thumbnail"
                onClick={() => setIsOpen(true)}
            />

            {isOpen && (
                <div className="modal-overlay" onClick={() => setIsOpen(false)}>
                    <button className="close-button" onClick={() => setIsOpen(false)}>×</button>

                    <img src={thumbnailSrc} alt={alt} className="modal-image" onClick={() => setIsOpen(false)}/>
                </div>
            )}
        </>
    );
};


export default ImageModal;
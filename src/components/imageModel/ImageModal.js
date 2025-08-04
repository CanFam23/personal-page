import "./ImageModal.css"

import {useState, useEffect} from "react";
import { useInView } from "react-intersection-observer";

function ImageModal({thumbnailSrc, alt}){
    // Keep track of if modal is open
    const [isOpen, setIsOpen] = useState(false);

    // Used to check if 10% of the base image is in the viewport
    const {ref, inView} = useInView({threshold: 0.1});

    // Prevents modal from auto popping back up if it goes off viewport then back on
    useEffect(() => {
        if (!inView && isOpen){
            setIsOpen(false);
        }
    }, [inView, isOpen]) // Method is called whenever inView is updated

    return (
        <>
            <img
                ref={ref}
                src={thumbnailSrc}
                alt={alt}
                className="thumbnail"
                onClick={() => setIsOpen(true)}
            />

            {isOpen && (
                <div className="full-screen-overlay"
                onClick={() => setIsOpen(false)}
                >
                    <div className="modal-overlay" >
                        <button className="close-button" onClick={() => setIsOpen(false)}>×</button>
                        <img src={thumbnailSrc} alt={alt} className="modal-image"/>
                    </div>
                </div>
            )}
        </>
    );
};


export default ImageModal;
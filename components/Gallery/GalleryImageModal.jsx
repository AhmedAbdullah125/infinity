import React from 'react';
import Image from "next/image";

export default function GalleryImageModal({ isOpen, onClose, image, title, desc }) {
    if (!isOpen) return null;

    return (
        <div className="gallery-image-modal" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 18 18" /></svg>
                </button>

                <div className="image-container">
                    {image && <Image src={image} alt={title || "Gallery Image"} className="gallery-modal-image" />}
                </div>

                <div className="text-content">
                    {desc && <p>{desc}</p>}
                </div>
            </div>
        </div>
    );
}

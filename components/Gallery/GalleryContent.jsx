"use client";
import React, { useState } from "react";
import { t } from "@/lib/i18n";
import Image from "next/image";
import Link from "next/link";
import img1 from "@/src/assets/entrepreneurs/1.png";
import img2 from "@/src/assets/entrepreneurs/2.png";
import img3 from "@/src/assets/entrepreneurs/3.png";
import GalleryImageModal from "./GalleryImageModal";

export default function GalleryContent({ lang }) {
    const [selectedItem, setSelectedItem] = useState(null);

    const galleryItems = [
        {
            id: 1,
            title: t(lang, "gallery_item_title"),
            desc: t(lang, "gallery_item_desc"),
            image: img1,
        },
        {
            id: 2,
            title: t(lang, "gallery_item_title"),
            desc: t(lang, "gallery_item_desc"),
            image: img1,
        },
        {
            id: 3,
            title: t(lang, "gallery_item_title"),
            desc: t(lang, "gallery_item_desc"),
            image: img1,
        },
        {
            id: 4,
            title: t(lang, "gallery_item_title"),
            desc: t(lang, "gallery_item_desc"),
            image: img1,
        }
    ];

    const openModal = (item) => {
        setSelectedItem(item);
    };

    const closeModal = () => {
        setSelectedItem(null);
    };

    return (
        <div className="gallery-content-sec">
            <div className="container">
                <div className="gallery-grid">
                    {galleryItems.map((item) => (
                        <div key={item.id} className="gallery-card">
                            <div className="gallery-image">
                                <Image src={item.image} alt={item.title} fill />
                                <div className="gallery-overlay">
                                    <h3>{item.title}</h3>
                                </div>
                            </div>
                            <div className="gallery-body">
                                <p className="gallery-desc">{item.desc}</p>
                                <button
                                    onClick={() => openModal(item)}
                                    className="read-more-btn"
                                >
                                    <span>{t(lang, "read_more")}</span>
                                    <i className={`fa-solid ${lang === 'ar' ? 'fa-arrow-left' : 'fa-arrow-right'}`}></i>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <GalleryImageModal
                isOpen={!!selectedItem}
                onClose={closeModal}
                image={selectedItem?.image}
                title={selectedItem?.title}
                desc={selectedItem?.desc}
            />
        </div>
    );
}
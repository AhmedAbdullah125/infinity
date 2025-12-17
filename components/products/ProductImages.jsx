"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import FancyboxWrapper from "../ui/FancyboxWrapper";
import eye from '@/src/assets/icons/eye.svg'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

function getUrl(img) {
    if (!img) return "";
    if (typeof img === "string") return img;
    return img.url || img.src || img.image || "";
}

export default function ProductImages({ product }) {
    const images = useMemo(() => (product?.images || []).map(getUrl).filter(Boolean), [product]);

    const [activeImage, setActiveImage] = useState(images?.[0] || "");

    useEffect(() => {
        setActiveImage(images?.[0] || "");
    }, [images]);

    if (!images.length) return null;

    return (
        <div className="product-images">
            {/* Top / Main Image (Fancybox) */}
            <div className="product-images__main">
                <FancyboxWrapper>
                    {/* Visible anchor (active image) */}
                    <a
                        href={activeImage}
                        data-caption={product?.title || ""}
                        data-fancybox="gallery"
                        className="product-images__mainLink"
                    >
                        <div className="product-images__mainMedia">
                            <Image
                                src={activeImage}
                                alt={product?.title || "product"}
                                fill
                                className="product-images__mainImg"
                                sizes="(max-width: 768px) 100vw, 900px"
                                priority
                            />
                            <div className="overlay">
                                <Image src={eye} width={100} height={200} alt="eye" />
                            </div>
                        </div>
                    </a>

                    {/* Hidden anchors to make it a real gallery (next/prev inside Fancybox) */}
                    <div className="product-images__hiddenGallery" aria-hidden="true">
                        {images.filter(images => images !== activeImage).map((url, idx) => (
                            <a
                                key={url + idx}
                                href={url}
                                data-caption={product?.title || ""}
                                data-fancybox="gallery"
                                tabIndex={-1}
                            />
                        ))}
                    </div>
                </FancyboxWrapper>
            </div>

            {/* Bottom / Thumbnails Swiper */}
            <div className="product-images__thumbs">
                <Swiper
                    modules={[FreeMode]}
                    freeMode

                    spaceBetween={12}
                    slidesPerView={4}
                    breakpoints={{
                        0: { slidesPerView: 3.7 },
                        480: { slidesPerView: 3.7 },
                        768: { slidesPerView: 3.7 },
                    }}
                    className="product-images__swiper"
                >
                    {product.images.map((url, idx) => {
                        const isActive = url === activeImage;
                        return (
                            <SwiperSlide key={url + idx}>
                                <div
                                    className={`product-images__thumb ${isActive ? "is-active" : ""}`}
                                    onClick={() => setActiveImage(url)}
                                    aria-label={`thumbnail-${idx + 1}`}
                                >
                                    <div className="product-images__thumbMedia">
                                        <Image
                                            src={url}
                                            alt={`thumb-${idx + 1}`}
                                            fill
                                            className="product-images__thumbImg"
                                            sizes="200px"

                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
}

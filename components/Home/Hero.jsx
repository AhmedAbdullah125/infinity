"use client";
import React from "react";
import { t } from "@/lib/i18n";
import { usePathname } from "next/navigation";

export default function Hero({ lang }) {
    const pathname = usePathname();

    return (
        <div className={`hero ${pathname !== '/' ? 'secondary-page-hero' : ''}`}>
            <video className="video" autoPlay muted loop playsInline>
                <source src="/videos/vid.mp4" type="video/mp4" />
                {t(lang, "video_not_supported")}
            </video>
            {/* scroll down icon */}
            {
                pathname == "/" &&
                <div
                    className="scroll-down"
                    onClick={() => {
                        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
                    }}
                >
                    <div className="scroll-icon">↓</div>
                </div>
            }
            <div className="overlay">
                <div className="container">

                </div>
            </div>
        </div>
    );
}
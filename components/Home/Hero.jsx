import React from "react";
import { t } from "@/lib/i18n";
export default function Hero({ lang }) {
    return (
        <div className="hero">
            <video className="video" autoPlay muted loop playsInline>
                <source src="/videos/vid.mp4" type="video/mp4" />
                {t(lang, "video_not_supported")}
            </video>
            {/* scroll down icon */}
            <div
                className="scroll-down"
                onClick={() => {
                    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
                }}
            >
                <div className="scroll-icon">↓</div>
            </div>
            <div className="overlay">
                <div className="container">

                </div>
            </div>
        </div>
    );
}
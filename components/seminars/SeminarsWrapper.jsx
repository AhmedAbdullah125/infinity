"use client"
import React, { useEffect, useState } from "react";
import Hero from "../Home/Hero";
import SeminarsHeader from "./SeminarsHeader";
import SeminarsContent from "./SeminarsContent";
export default function SeminarsWrapper() {
    const [lang, setLang] = useState('ar');
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedLang = localStorage.getItem('lang');
            setLang(savedLang || 'ar');
        }
    }, []);

    return (
        <div className="home-page-content" style={{ direction: lang == "ar" ? "rtl" : "ltr" }}>
            <Hero lang={lang} />
            <SeminarsHeader lang={lang} />
            <SeminarsContent lang={lang} />

        </div>
    )
}

"use client"
import React, { useEffect, useState } from "react";
import Hero from "../Home/Hero";
import PartnerHeader from "./PartnerHeader.jsx";
import PartnerContent from "./PartnerContent";

export default function PartnerWrapper() {
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
            <PartnerHeader lang={lang} />
            <PartnerContent lang={lang} />

        </div>
    )
}
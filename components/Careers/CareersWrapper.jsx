"use client"
import React, { useEffect, useState } from "react";
import Hero from "../Home/Hero";
import CareersHeader from "./CareersHeader";
import CareersContent from "./CareersContent";

export default function CareersWrapper() {
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
            <CareersHeader lang={lang} />
            <CareersContent lang={lang} />
        </div>
    )
}
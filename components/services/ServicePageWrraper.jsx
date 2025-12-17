"use client"
import React, { useEffect, useState } from "react";
import Hero from "../Home/Hero";
import ServicesSection from "../Home/ServicesSection";



export default function AboutPageWrraper() {
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
            <ServicesSection lang={lang} />

        </div>
    )
}

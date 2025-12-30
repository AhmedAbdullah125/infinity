"use client"
import React, { useEffect, useState } from "react";
import Hero from "../Home/Hero";
import ContactUs from "./ContactUs";
import ContactSection from "../Home/ContactSection";

export default function ComplaintsWrapper() {
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
            <ContactSection lang={lang} />

        </div>
    )
}
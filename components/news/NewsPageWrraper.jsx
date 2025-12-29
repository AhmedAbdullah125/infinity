"use client"
import React, { useEffect, useState } from "react";
import Hero from "../Home/Hero";
import NewsSection from "../Home/NewsSection";



export default function NewsPageWrraper() {
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
            <NewsSection lang={lang} />

        </div>
    )
}

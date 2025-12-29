"use client"
import React, { useEffect, useState } from "react";
import Hero from "../Home/Hero";
import ELearningHeader from "./ELearningHeader";
import ELearningContent from "./ELearningContent";
import ELearningFooter from "./ELearningFooter";

export default function ELearningWrapper() {
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
            <ELearningHeader lang={lang} />
            <ELearningContent lang={lang} />
            <ELearningFooter lang={lang} />
        </div>
    )
}
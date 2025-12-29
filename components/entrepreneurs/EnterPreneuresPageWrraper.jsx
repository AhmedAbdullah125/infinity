"use client"
import React, { useEffect, useState } from "react";
import Hero from "../Home/Hero";
import EntrepreneursHeader from "./EntrepreneursHeader";
import CurrentOpportunities from "./CurrentOpportunities";
import Features from "./Features";

import { t } from "@/lib/i18n";
import EnterPreneuresForm from "./EnterPreneuresForm";

export default function EnterPreneuresPageWrraper() {
    const [lang, setLang] = useState('ar');
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedLang = localStorage.getItem('lang');
            setLang(savedLang || 'ar');
        }
    }, []);
    const feat = {
        title: t(lang, "features_investors_title"),
        desc: t(lang, "features_investors_desc")
    }
    const analysis = {
        title: t(lang, "market_statistics_title"),
        desc: t(lang, "market_statistics_desc")
    }

    return (
        <div className="home-page-content" style={{ direction: lang == "ar" ? "rtl" : "ltr" }}>
            <Hero lang={lang} />
            <EntrepreneursHeader lang={lang} />
            <CurrentOpportunities lang={lang} />
            <Features lang={lang} data={feat} />
            <Features lang={lang} data={analysis} />
            <EnterPreneuresForm lang={lang} />
        </div>
    )
}

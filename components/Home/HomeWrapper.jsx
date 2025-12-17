"use client"
import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import AboutSection from "./AboutSection";
import OffersSection from "./OffersSection";
import ServicesSection from "./ServicesSection";
import ProductsSection from "./ProductsSection";
import Entrepreneur from "./Entrepreneur";
import NewsSection from "./NewsSection";
import ContactSection from "./ContactSection";
import PartenerSection from "./PartenersSection";


export default function HomeWrapper() {
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
      <AboutSection lang={lang} />
      <OffersSection lang={lang} />
      <ServicesSection lang={lang} />
      <ProductsSection lang={lang} />
      <Entrepreneur lang={lang} />
      <NewsSection lang={lang} />
      <OffersSection lang={lang} />
      <ContactSection lang={lang} />
      <PartenerSection lang={lang} />
    </div>
  )
}

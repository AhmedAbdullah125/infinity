'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import fullLogo from '@/src/assets/home/fullLogo.svg'
import { t } from '@/lib/i18n'
export default function Footer() {
    const [lang, setLang] = useState('ar');
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedLang = localStorage.getItem('lang');
            setLang(savedLang || 'ar');
        }
    }, []);

    return (
        <footer className="footer" style={{ direction: lang == "ar" ? "rtl" : "ltr" }}>
            <div className="container">
                <div className="footer-grid">
                    {/* Logo and Description Column */}
                    <div className="footer-col info-col">
                        <Link href="/" className="footer-logo">
                            <Image src={fullLogo} alt="Infinity Medical" className="logo-img" />
                        </Link>
                        <p className="footer-desc">
                            {t(lang, "footer_desc")}
                        </p>
                        <div className="social-links">
                            <Link href="https://www.youtube.com/" target="_blank"><i className="fa-brands fa-youtube"></i></Link>
                            <Link href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook-f"></i></Link>
                            <Link href="https://wa.me/96628787911" target="_blank"><i className="fa-brands fa-whatsapp"></i></Link>
                            <Link href="https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></Link>
                            <Link href="https://x.com/" target="_blank"><i className="fa-brands fa-x-twitter"></i></Link>
                            <Link href="https://t.me/" target="_blank"><i className="fa-brands fa-telegram"></i></Link>
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div className="footer-col links-col">
                        <h3>{t(lang, "quick_links_title")}</h3>
                        <ul className="footer-links">
                            <li><Link href="/">{t(lang, "home")}</Link></li>
                            <li><Link href="/about">{t(lang, "about")}</Link></li>
                            <li><Link href="/services">{t(lang, "services")}</Link></li>
                            <li><Link href="/products">{t(lang, "products")}</Link></li>
                            <li><Link href="/entrepreneurs">{t(lang, "entrepreneurs_and_investors")}</Link></li>
                            <li><Link href="/news">{t(lang, "news")}</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info Column */}
                    <div className="footer-col contact-col">
                        <h3>{t(lang, "contact_info_title")}</h3>
                        <ul className="contact-list">
                            <li>
                                <i className="fa-solid fa-phone"></i>
                                <a href="tel:+96628787911" dir="ltr">+966 287 87 911</a>
                            </li>
                            <li>
                                <i className="fa-brands fa-whatsapp"></i>
                                <a href="https://wa.me/9668292898" dir="ltr">+966 829 28 98</a>
                            </li>
                            <li>
                                <i className="fa-regular fa-envelope"></i>
                                <a href="mailto:bedonhodod@gmail.com">bedonhodod@gmail.com</a>
                            </li>
                            <li>
                                <i className="fa-solid fa-location-dot"></i>
                                <span>{t(lang, "footer_address")}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>{t(lang, "rights_reserved")} {new Date().getFullYear()}</p>
                </div>
            </div>
        </footer>
    )
}
